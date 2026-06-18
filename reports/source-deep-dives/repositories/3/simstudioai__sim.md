# simstudioai/sim Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Build, deploy, and orchestrate AI agents. Sim is the central intelligence layer for your AI workforce.

## 요약

- 조사 단위: `sources/simstudioai__sim` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 11,531 files, 2,601 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=packages/testing/src/mocks/mcp-oauth.mock.ts, packages/db/migrations/0210_mcp_oauth.sql, apps/sim/public/email/broadcast/v0.5/mcp.png이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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


## Repository Context

| Field | Value |
| --- | --- |
| Repository | simstudioai/sim |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 28809 |
| Forks | 3662 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/simstudioai__sim](../../../../sources/simstudioai__sim) |
| Existing report | [reports/global-trending/repositories/simstudioai__sim.md](../../../global-trending/repositories/simstudioai__sim.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 11531 / 2601 |
| Max observed depth | 13 |
| Top directories | .agents, .claude, .cursor, .devcontainer, .github, .husky, apps, docker, helm, packages, scripts |
| Top extensions | .ts: 8295, .mdx: 1310, .tsx: 744, .json: 330, .png: 283, .sql: 239, .md: 112, .yaml: 61, .svg: 26, .yml: 17, (none): 17, .mdc: 15 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| apps/sim | apps workspace | 94 |
| apps/docs | apps workspace | 30 |
| apps/realtime | apps workspace | 27 |
| packages/testing | packages workspace | 27 |
| packages/security | packages workspace | 20 |
| packages/db | packages workspace | 13 |
| packages/audit | packages workspace | 12 |
| packages/workflow-persistence | packages workspace | 12 |
| packages/utils | packages workspace | 10 |
| packages/ts-sdk | packages workspace | 8 |
| packages/logger | packages workspace | 7 |
| packages/workflow-authz | packages workspace | 7 |
| packages/workflow-types | packages workspace | 6 |
| packages/auth | packages workspace | 5 |
| packages/cli | packages workspace | 5 |
| packages/python-sdk | packages workspace | 4 |
| packages/realtime-protocol | packages workspace | 2 |
| .devcontainer | deployment surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | turbo run build |
| serve-dev | package.json | dev | turbo run dev |
| serve-dev | package.json | dev:sockets | cd apps/realtime && bun run dev |
| serve-dev | package.json | dev:full | bunx concurrently -n "App,Realtime" -c "cyan,magenta" "cd apps/sim && bun run dev" "cd apps/realtime && bun run dev" |
| serve-dev | package.json | dev:full:capped | bunx concurrently -n "App,Realtime" -c "cyan,magenta" "cd apps/sim && bun run dev:capped" "cd apps/realtime && bun run dev" |
| test | package.json | test | turbo run test |
| quality | package.json | format | turbo run format |
| quality | package.json | format:check | turbo run format:check |
| quality | package.json | lint | turbo run lint |
| quality | package.json | lint:check | turbo run lint:check |
| test | package.json | lint:helm | helm lint ./helm/sim --strict --values ./helm/sim/test/values-lint.yaml |
| quality | package.json | lint:all | turbo run lint && bun run lint:helm |
| quality | package.json | check | turbo run format:check |
| quality | package.json | check:boundaries | bun run scripts/check-monorepo-boundaries.ts |
| quality | package.json | check:api-validation | bun run scripts/check-api-validation-contracts.ts --check |
| quality | package.json | check:api-validation:strict | bun run scripts/check-api-validation-contracts.ts --check --enforce-boundary-baseline |
| quality | package.json | check:realtime-prune | bun run scripts/check-realtime-prune-graph.ts |
| quality | package.json | check:zustand-v5 | bun run scripts/check-zustand-v5-selectors.ts |
| quality | package.json | check:react-query | bun run scripts/check-react-query-patterns.ts --check |
| quality | package.json | check:utils | bun run scripts/check-utils-enforcement.ts |
| quality | package.json | check:migrations | bun run scripts/check-migrations-safety.ts |
| utility | package.json | mship-contracts:generate | bun run scripts/sync-mothership-stream-contract.ts |
| quality | package.json | mship-contracts:check | bun run scripts/sync-mothership-stream-contract.ts --check |
| utility | package.json | mship-tools:generate | bun run scripts/sync-tool-catalog.ts |
| quality | package.json | mship-tools:check | bun run scripts/sync-tool-catalog.ts --check |
| utility | package.json | trace-spans-contract:generate | bun run scripts/sync-trace-spans-contract.ts |
| quality | package.json | trace-spans-contract:check | bun run scripts/sync-trace-spans-contract.ts --check |
| utility | package.json | trace-attributes-contract:generate | bun run scripts/sync-trace-attributes-contract.ts |
| quality | package.json | trace-attributes-contract:check | bun run scripts/sync-trace-attributes-contract.ts --check |
| utility | package.json | trace-attribute-values-contract:generate | bun run scripts/sync-trace-attribute-values-contract.ts |
| quality | package.json | trace-attribute-values-contract:check | bun run scripts/sync-trace-attribute-values-contract.ts --check |
| utility | package.json | trace-events-contract:generate | bun run scripts/sync-trace-events-contract.ts |
| quality | package.json | trace-events-contract:check | bun run scripts/sync-trace-events-contract.ts --check |
| utility | package.json | metrics-contract:generate | bun run scripts/sync-metrics-contract.ts |
| quality | package.json | metrics-contract:check | bun run scripts/sync-metrics-contract.ts --check |
| utility | package.json | mship:generate | bun run scripts/generate-mship-contracts.ts |
| quality | package.json | mship:check | bun run scripts/generate-mship-contracts.ts --check |
| utility | package.json | prepare | bun husky |
| quality | package.json | type-check | turbo run type-check |
| build | package.json | release | bun run scripts/create-single-release.ts |


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
| mcp | [packages/testing/src/mocks/mcp-oauth.mock.ts](../../../../sources/simstudioai__sim/packages/testing/src/mocks/mcp-oauth.mock.ts) | mcp signal |
| mcp | [packages/db/migrations/0210_mcp_oauth.sql](../../../../sources/simstudioai__sim/packages/db/migrations/0210_mcp_oauth.sql) | mcp signal |
| mcp | [apps/sim/public/email/broadcast/v0.5/mcp.png](../../../../sources/simstudioai__sim/apps/sim/public/email/broadcast/v0.5/mcp.png) | mcp signal |
| mcp | [apps/sim/public/blog/v0-5/mcp.png](../../../../sources/simstudioai__sim/apps/sim/public/blog/v0-5/mcp.png) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/simstudioai__sim/AGENTS.md) | agentRuntime signal |
| agentRuntime | [packages/workflow-types/package.json](../../../../sources/simstudioai__sim/packages/workflow-types/package.json) | agentRuntime signal |
| agentRuntime | [packages/workflow-types/tsconfig.json](../../../../sources/simstudioai__sim/packages/workflow-types/tsconfig.json) | agentRuntime signal |
| agentRuntime | [packages/workflow-types/src/blocks.ts](../../../../sources/simstudioai__sim/packages/workflow-types/src/blocks.ts) | agentRuntime signal |
| entrypoints | [packages/workflow-persistence/src/index.ts](../../../../sources/simstudioai__sim/packages/workflow-persistence/src/index.ts) | entrypoints signal |
| entrypoints | [packages/workflow-authz/src/index.ts](../../../../sources/simstudioai__sim/packages/workflow-authz/src/index.ts) | entrypoints signal |
| entrypoints | [packages/utils/src/index.ts](../../../../sources/simstudioai__sim/packages/utils/src/index.ts) | entrypoints signal |
| entrypoints | [packages/ts-sdk/src/index.test.ts](../../../../sources/simstudioai__sim/packages/ts-sdk/src/index.test.ts) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 37 | [packages/workflow-persistence/src/index.ts](../../../../sources/simstudioai__sim/packages/workflow-persistence/src/index.ts)<br>[packages/workflow-authz/src/index.ts](../../../../sources/simstudioai__sim/packages/workflow-authz/src/index.ts)<br>[packages/utils/src/index.ts](../../../../sources/simstudioai__sim/packages/utils/src/index.ts)<br>[packages/ts-sdk/src/index.test.ts](../../../../sources/simstudioai__sim/packages/ts-sdk/src/index.test.ts)<br>[packages/ts-sdk/src/index.ts](../../../../sources/simstudioai__sim/packages/ts-sdk/src/index.ts)<br>[packages/testing/src/index.ts](../../../../sources/simstudioai__sim/packages/testing/src/index.ts)<br>[packages/logger/src/index.test.ts](../../../../sources/simstudioai__sim/packages/logger/src/index.test.ts)<br>[packages/logger/src/index.ts](../../../../sources/simstudioai__sim/packages/logger/src/index.ts) |
| agentRuntime | 6030 | [AGENTS.md](../../../../sources/simstudioai__sim/AGENTS.md)<br>[packages/workflow-types/package.json](../../../../sources/simstudioai__sim/packages/workflow-types/package.json)<br>[packages/workflow-types/tsconfig.json](../../../../sources/simstudioai__sim/packages/workflow-types/tsconfig.json)<br>[packages/workflow-types/src/blocks.ts](../../../../sources/simstudioai__sim/packages/workflow-types/src/blocks.ts)<br>[packages/workflow-types/src/workflow.ts](../../../../sources/simstudioai__sim/packages/workflow-types/src/workflow.ts)<br>[packages/workflow-persistence/package.json](../../../../sources/simstudioai__sim/packages/workflow-persistence/package.json)<br>[packages/workflow-persistence/tsconfig.json](../../../../sources/simstudioai__sim/packages/workflow-persistence/tsconfig.json)<br>[packages/workflow-persistence/src/index.ts](../../../../sources/simstudioai__sim/packages/workflow-persistence/src/index.ts) |
| mcp | 130 | [packages/testing/src/mocks/mcp-oauth.mock.ts](../../../../sources/simstudioai__sim/packages/testing/src/mocks/mcp-oauth.mock.ts)<br>[packages/db/migrations/0210_mcp_oauth.sql](../../../../sources/simstudioai__sim/packages/db/migrations/0210_mcp_oauth.sql)<br>[apps/sim/public/email/broadcast/v0.5/mcp.png](../../../../sources/simstudioai__sim/apps/sim/public/email/broadcast/v0.5/mcp.png)<br>[apps/sim/public/blog/v0-5/mcp.png](../../../../sources/simstudioai__sim/apps/sim/public/blog/v0-5/mcp.png)<br>[apps/sim/lib/mcp/client.test.ts](../../../../sources/simstudioai__sim/apps/sim/lib/mcp/client.test.ts)<br>[apps/sim/lib/mcp/client.ts](../../../../sources/simstudioai__sim/apps/sim/lib/mcp/client.ts)<br>[apps/sim/lib/mcp/connection-manager.test.ts](../../../../sources/simstudioai__sim/apps/sim/lib/mcp/connection-manager.test.ts)<br>[apps/sim/lib/mcp/connection-manager.ts](../../../../sources/simstudioai__sim/apps/sim/lib/mcp/connection-manager.ts) |
| retrieval | 1048 | [scripts/check-realtime-prune-graph.ts](../../../../sources/simstudioai__sim/scripts/check-realtime-prune-graph.ts)<br>[packages/workflow-persistence/src/index.ts](../../../../sources/simstudioai__sim/packages/workflow-persistence/src/index.ts)<br>[packages/workflow-authz/src/index.ts](../../../../sources/simstudioai__sim/packages/workflow-authz/src/index.ts)<br>[packages/utils/src/index.ts](../../../../sources/simstudioai__sim/packages/utils/src/index.ts)<br>[packages/ts-sdk/src/index.test.ts](../../../../sources/simstudioai__sim/packages/ts-sdk/src/index.test.ts)<br>[packages/ts-sdk/src/index.ts](../../../../sources/simstudioai__sim/packages/ts-sdk/src/index.ts)<br>[packages/testing/src/index.ts](../../../../sources/simstudioai__sim/packages/testing/src/index.ts)<br>[packages/testing/src/types/index.ts](../../../../sources/simstudioai__sim/packages/testing/src/types/index.ts) |
| spec | 6 | [apps/sim/lib/guardrails/requirements.txt](../../../../sources/simstudioai__sim/apps/sim/lib/guardrails/requirements.txt)<br>[.cursor/rules/sim-architecture.mdc](../../../../sources/simstudioai__sim/.cursor/rules/sim-architecture.mdc)<br>[.cursor/commands/emcn-design-review.md](../../../../sources/simstudioai__sim/.cursor/commands/emcn-design-review.md)<br>[.claude/rules/sim-architecture.md](../../../../sources/simstudioai__sim/.claude/rules/sim-architecture.md)<br>[.claude/commands/emcn-design-review.md](../../../../sources/simstudioai__sim/.claude/commands/emcn-design-review.md)<br>[.agents/skills/emcn-design-review/SKILL.md](../../../../sources/simstudioai__sim/.agents/skills/emcn-design-review/SKILL.md) |
| eval | 669 | [scripts/check-migrations-safety.test.ts](../../../../sources/simstudioai__sim/scripts/check-migrations-safety.test.ts)<br>[scripts/sync-trace-attribute-values-contract.ts](../../../../sources/simstudioai__sim/scripts/sync-trace-attribute-values-contract.ts)<br>[scripts/sync-trace-attributes-contract.ts](../../../../sources/simstudioai__sim/scripts/sync-trace-attributes-contract.ts)<br>[scripts/sync-trace-events-contract.ts](../../../../sources/simstudioai__sim/scripts/sync-trace-events-contract.ts)<br>[scripts/sync-trace-spans-contract.ts](../../../../sources/simstudioai__sim/scripts/sync-trace-spans-contract.ts)<br>[packages/utils/src/errors.test.ts](../../../../sources/simstudioai__sim/packages/utils/src/errors.test.ts)<br>[packages/utils/src/formatting.test.ts](../../../../sources/simstudioai__sim/packages/utils/src/formatting.test.ts)<br>[packages/utils/src/helpers.test.ts](../../../../sources/simstudioai__sim/packages/utils/src/helpers.test.ts) |
| security | 295 | [packages/testing/src/mocks/audit.mock.ts](../../../../sources/simstudioai__sim/packages/testing/src/mocks/audit.mock.ts)<br>[packages/testing/src/mocks/auth-oauth-utils.mock.ts](../../../../sources/simstudioai__sim/packages/testing/src/mocks/auth-oauth-utils.mock.ts)<br>[packages/testing/src/mocks/auth.mock.ts](../../../../sources/simstudioai__sim/packages/testing/src/mocks/auth.mock.ts)<br>[packages/testing/src/mocks/hybrid-auth.mock.ts](../../../../sources/simstudioai__sim/packages/testing/src/mocks/hybrid-auth.mock.ts)<br>[packages/testing/src/mocks/mcp-oauth.mock.ts](../../../../sources/simstudioai__sim/packages/testing/src/mocks/mcp-oauth.mock.ts)<br>[packages/testing/src/factories/permission.factory.ts](../../../../sources/simstudioai__sim/packages/testing/src/factories/permission.factory.ts)<br>[packages/testing/src/assertions/permission.assertions.ts](../../../../sources/simstudioai__sim/packages/testing/src/assertions/permission.assertions.ts)<br>[packages/security/package.json](../../../../sources/simstudioai__sim/packages/security/package.json) |
| ci | 10 | [.github/workflows/ci.yml](../../../../sources/simstudioai__sim/.github/workflows/ci.yml)<br>[.github/workflows/companion-pr-check.yml](../../../../sources/simstudioai__sim/.github/workflows/companion-pr-check.yml)<br>[.github/workflows/docs-embeddings.yml](../../../../sources/simstudioai__sim/.github/workflows/docs-embeddings.yml)<br>[.github/workflows/i18n.yml](../../../../sources/simstudioai__sim/.github/workflows/i18n.yml)<br>[.github/workflows/images.yml](../../../../sources/simstudioai__sim/.github/workflows/images.yml)<br>[.github/workflows/migrations.yml](../../../../sources/simstudioai__sim/.github/workflows/migrations.yml)<br>[.github/workflows/publish-cli.yml](../../../../sources/simstudioai__sim/.github/workflows/publish-cli.yml)<br>[.github/workflows/publish-python-sdk.yml](../../../../sources/simstudioai__sim/.github/workflows/publish-python-sdk.yml) |
| container | 91 | [docker-compose.local.yml](../../../../sources/simstudioai__sim/docker-compose.local.yml)<br>[docker-compose.ollama.yml](../../../../sources/simstudioai__sim/docker-compose.ollama.yml)<br>[docker-compose.prod.yml](../../../../sources/simstudioai__sim/docker-compose.prod.yml)<br>[helm/sim/.helmignore](../../../../sources/simstudioai__sim/helm/sim/.helmignore)<br>[helm/sim/Chart.yaml](../../../../sources/simstudioai__sim/helm/sim/Chart.yaml)<br>[helm/sim/README.md](../../../../sources/simstudioai__sim/helm/sim/README.md)<br>[helm/sim/values.schema.json](../../../../sources/simstudioai__sim/helm/sim/values.schema.json)<br>[helm/sim/values.yaml](../../../../sources/simstudioai__sim/helm/sim/values.yaml) |
| instruction | 25 | [AGENTS.md](../../../../sources/simstudioai__sim/AGENTS.md)<br>[CLAUDE.md](../../../../sources/simstudioai__sim/CLAUDE.md)<br>[apps/sim/AGENTS.md](../../../../sources/simstudioai__sim/apps/sim/AGENTS.md)<br>[apps/sim/triggers/AGENTS.md](../../../../sources/simstudioai__sim/apps/sim/triggers/AGENTS.md)<br>[apps/sim/tools/AGENTS.md](../../../../sources/simstudioai__sim/apps/sim/tools/AGENTS.md)<br>[apps/sim/stores/AGENTS.md](../../../../sources/simstudioai__sim/apps/sim/stores/AGENTS.md)<br>[apps/sim/hooks/AGENTS.md](../../../../sources/simstudioai__sim/apps/sim/hooks/AGENTS.md)<br>[apps/sim/hooks/queries/AGENTS.md](../../../../sources/simstudioai__sim/apps/sim/hooks/queries/AGENTS.md) |
| docs | 1608 | [README.md](../../../../sources/simstudioai__sim/README.md)<br>[scripts/README.md](../../../../sources/simstudioai__sim/scripts/README.md)<br>[packages/README.md](../../../../sources/simstudioai__sim/packages/README.md)<br>[packages/ts-sdk/README.md](../../../../sources/simstudioai__sim/packages/ts-sdk/README.md)<br>[packages/python-sdk/README.md](../../../../sources/simstudioai__sim/packages/python-sdk/README.md)<br>[packages/cli/README.md](../../../../sources/simstudioai__sim/packages/cli/README.md)<br>[helm/sim/README.md](../../../../sources/simstudioai__sim/helm/sim/README.md)<br>[apps/sim/scripts/load/README.md](../../../../sources/simstudioai__sim/apps/sim/scripts/load/README.md) |
| config | 38 | [package.json](../../../../sources/simstudioai__sim/package.json)<br>[turbo.json](../../../../sources/simstudioai__sim/turbo.json)<br>[scripts/tsconfig.json](../../../../sources/simstudioai__sim/scripts/tsconfig.json)<br>[packages/workflow-types/package.json](../../../../sources/simstudioai__sim/packages/workflow-types/package.json)<br>[packages/workflow-types/tsconfig.json](../../../../sources/simstudioai__sim/packages/workflow-types/tsconfig.json)<br>[packages/workflow-persistence/package.json](../../../../sources/simstudioai__sim/packages/workflow-persistence/package.json)<br>[packages/workflow-persistence/tsconfig.json](../../../../sources/simstudioai__sim/packages/workflow-persistence/tsconfig.json)<br>[packages/workflow-authz/package.json](../../../../sources/simstudioai__sim/packages/workflow-authz/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 669 | [scripts/check-migrations-safety.test.ts](../../../../sources/simstudioai__sim/scripts/check-migrations-safety.test.ts)<br>[scripts/sync-trace-attribute-values-contract.ts](../../../../sources/simstudioai__sim/scripts/sync-trace-attribute-values-contract.ts)<br>[scripts/sync-trace-attributes-contract.ts](../../../../sources/simstudioai__sim/scripts/sync-trace-attributes-contract.ts)<br>[scripts/sync-trace-events-contract.ts](../../../../sources/simstudioai__sim/scripts/sync-trace-events-contract.ts)<br>[scripts/sync-trace-spans-contract.ts](../../../../sources/simstudioai__sim/scripts/sync-trace-spans-contract.ts)<br>[packages/utils/src/errors.test.ts](../../../../sources/simstudioai__sim/packages/utils/src/errors.test.ts) |
| CI workflows | 10 | [.github/workflows/ci.yml](../../../../sources/simstudioai__sim/.github/workflows/ci.yml)<br>[.github/workflows/companion-pr-check.yml](../../../../sources/simstudioai__sim/.github/workflows/companion-pr-check.yml)<br>[.github/workflows/docs-embeddings.yml](../../../../sources/simstudioai__sim/.github/workflows/docs-embeddings.yml)<br>[.github/workflows/i18n.yml](../../../../sources/simstudioai__sim/.github/workflows/i18n.yml)<br>[.github/workflows/images.yml](../../../../sources/simstudioai__sim/.github/workflows/images.yml)<br>[.github/workflows/migrations.yml](../../../../sources/simstudioai__sim/.github/workflows/migrations.yml) |
| Containers / deploy | 91 | [docker-compose.local.yml](../../../../sources/simstudioai__sim/docker-compose.local.yml)<br>[docker-compose.ollama.yml](../../../../sources/simstudioai__sim/docker-compose.ollama.yml)<br>[docker-compose.prod.yml](../../../../sources/simstudioai__sim/docker-compose.prod.yml)<br>[helm/sim/.helmignore](../../../../sources/simstudioai__sim/helm/sim/.helmignore)<br>[helm/sim/Chart.yaml](../../../../sources/simstudioai__sim/helm/sim/Chart.yaml)<br>[helm/sim/README.md](../../../../sources/simstudioai__sim/helm/sim/README.md) |
| Security / policy | 295 | [packages/testing/src/mocks/audit.mock.ts](../../../../sources/simstudioai__sim/packages/testing/src/mocks/audit.mock.ts)<br>[packages/testing/src/mocks/auth-oauth-utils.mock.ts](../../../../sources/simstudioai__sim/packages/testing/src/mocks/auth-oauth-utils.mock.ts)<br>[packages/testing/src/mocks/auth.mock.ts](../../../../sources/simstudioai__sim/packages/testing/src/mocks/auth.mock.ts)<br>[packages/testing/src/mocks/hybrid-auth.mock.ts](../../../../sources/simstudioai__sim/packages/testing/src/mocks/hybrid-auth.mock.ts)<br>[packages/testing/src/mocks/mcp-oauth.mock.ts](../../../../sources/simstudioai__sim/packages/testing/src/mocks/mcp-oauth.mock.ts)<br>[packages/testing/src/factories/permission.factory.ts](../../../../sources/simstudioai__sim/packages/testing/src/factories/permission.factory.ts) |
| Agent instructions | 25 | [AGENTS.md](../../../../sources/simstudioai__sim/AGENTS.md)<br>[CLAUDE.md](../../../../sources/simstudioai__sim/CLAUDE.md)<br>[apps/sim/AGENTS.md](../../../../sources/simstudioai__sim/apps/sim/AGENTS.md)<br>[apps/sim/triggers/AGENTS.md](../../../../sources/simstudioai__sim/apps/sim/triggers/AGENTS.md)<br>[apps/sim/tools/AGENTS.md](../../../../sources/simstudioai__sim/apps/sim/tools/AGENTS.md)<br>[apps/sim/stores/AGENTS.md](../../../../sources/simstudioai__sim/apps/sim/stores/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `packages/testing/src/mocks/mcp-oauth.mock.ts`, `packages/db/migrations/0210_mcp_oauth.sql`, `apps/sim/public/email/broadcast/v0.5/mcp.png`.
2. Trace execution through entrypoints: `packages/workflow-persistence/src/index.ts`, `packages/workflow-authz/src/index.ts`, `packages/utils/src/index.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `packages/workflow-types/package.json`, `packages/workflow-types/tsconfig.json`.
4. Inspect retrieval/memory/indexing through: `scripts/check-realtime-prune-graph.ts`, `packages/workflow-persistence/src/index.ts`, `packages/workflow-authz/src/index.ts`.
5. Verify behavior through test/eval files: `scripts/check-migrations-safety.test.ts`, `scripts/sync-trace-attribute-values-contract.ts`, `scripts/sync-trace-attributes-contract.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Build, deploy, and orchestrate AI agents. Sim is the central intelligence layer for your AI workforce.. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
