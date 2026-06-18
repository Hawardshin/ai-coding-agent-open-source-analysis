# cline/cline Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 3383 files, 687 directories.

## 요약

- 조사 단위: `sources/cline__cline` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 3,366 files, 683 directories, depth score 134, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=sdk/packages/core/src/extensions/mcp/client.ts, sdk/packages/core/src/extensions/mcp/config-loader.test.ts, sdk/packages/core/src/extensions/mcp/config-loader.ts이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | cline/cline |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 63454 |
| Forks | 6712 |
| License | none |
| Maturity | high-signal |
| Evidence | deep-source+report |
| Source | [sources/cline__cline](../../../../sources/cline__cline) |
| Existing report | [reports/global-trending/repositories/cline__cline.md](../../../global-trending/repositories/cline__cline.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 3366 / 683 |
| Max observed depth | 11 |
| Top directories | .agents, .changeset, .claude, .cline, .clinerules, .codex, .github, .greptile, .husky, .kanban, apps, assets, docs, evals, sdk |
| Top extensions | .ts: 1957, .tsx: 574, .md: 160, .json: 156, .png: 122, .mdx: 109, .snap: 57, (none): 55, .mjs: 21, .proto: 21, .sh: 16, .py: 15 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| apps/vscode | apps workspace | 82 |
| docs | documentation surface | 28 |
| apps/examples | apps workspace | 11 |
| .codex | top-level component | 1 |
| .github | ci surface | 1 |
| apps | source boundary | 1 |
| assets | top-level component | 1 |
| evals | top-level component | 1 |
| sdk | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | package.json | prepare | husky |
| build | package.json | build | bun run clean && bun install && bun run build:sdk && bun -F @cline/cli build |
| build | package.json | build:sdk | bun --production -F './sdk/packages/*' build |
| build | package.json | build:apps | bun -F './apps/**' --production build |
| build | package.json | build:models | bun -F @cline/llms generate:models && bun format --write |
| serve-dev | package.json | dev | bun --conditions=development run build:sdk && bun run cli && bun run cli hub stop |
| serve-dev | package.json | cli | bun --conditions=development --cwd apps/cli dev |
| serve-dev | package.json | code | bun --conditions=development -F @cline/code dev |
| utility | package.json | clean | bun run sdk/scripts/clean.ts |
| quality | package.json | types | bun --parallel -F '*' typecheck |
| test | package.json | test | bun --parallel -F './sdk/packages/**' -F @cline/cli test |
| test | package.json | test:unit | bash -lc 'set -euo pipefail; bun -F @cline/agents test & p1=$!; bun -F @cline/llms test & p2=$!; bun -F @cline/core test:unit & p3=$!; bun -F @cline/cli test:unit & p4=$!; wait $p1; wait $p2; wait $p3; wait $p4' |
| test | package.json | test:e2e | bun -F @cline/core test:e2e && bun -F @cline/cli test:e2e |
| test | package.json | test:e2e:interactive | bun -F @cline/cli test:e2e:interactive |
| test | package.json | verify:routines | zsh -lc 'cd sdk/packages/core && bunx vitest run src/cron/schedule-service.test.ts --config vitest.config.ts' |
| serve-dev | package.json | verify:workos-device-auth | bun sdk/scripts/verify-workos-device-auth.ts |
| utility | package.json | biome | bunx --bun @biomejs/biome |
| quality | package.json | format | bun biome format sdk/ apps/cli/ apps/cline-hub/ apps/examples/ |
| quality | package.json | lint | bun biome lint sdk/ apps/cli/ apps/cline-hub/ apps/examples/ |
| quality | package.json | fix | bun biome check --write --unsafe --diagnostic-level=error sdk/ apps/cli/ apps/cline-hub/ apps/examples/ |
| build | package.json | check | bun biome check --diagnostic-level=error sdk/ apps/cli/ apps/cline-hub/ apps/examples/ && bun run build:sdk && bun run -F @cline/cli build && bun --parallel -F './sdk/packages/**' -F @cline/cli typecheck && bun sdk/scrip |
| quality | package.json | version | bun run types && bun sdk/scripts/version.ts |
| build | package.json | release | bun sdk/scripts/release.ts |


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
| mcp | [sdk/packages/core/src/extensions/mcp/client.ts](../../../../sources/cline__cline/sdk/packages/core/src/extensions/mcp/client.ts) | mcp signal |
| mcp | [sdk/packages/core/src/extensions/mcp/config-loader.test.ts](../../../../sources/cline__cline/sdk/packages/core/src/extensions/mcp/config-loader.test.ts) | mcp signal |
| mcp | [sdk/packages/core/src/extensions/mcp/config-loader.ts](../../../../sources/cline__cline/sdk/packages/core/src/extensions/mcp/config-loader.ts) | mcp signal |
| mcp | [sdk/packages/core/src/extensions/mcp/index.ts](../../../../sources/cline__cline/sdk/packages/core/src/extensions/mcp/index.ts) | mcp signal |
| agentRuntime | [sdk/AGENTS.md](../../../../sources/cline__cline/sdk/AGENTS.md) | agentRuntime signal |
| agentRuntime | [sdk/packages/shared/src/agent.ts](../../../../sources/cline__cline/sdk/packages/shared/src/agent.ts) | agentRuntime signal |
| agentRuntime | [sdk/packages/shared/src/tools/create.test.ts](../../../../sources/cline__cline/sdk/packages/shared/src/tools/create.test.ts) | agentRuntime signal |
| agentRuntime | [sdk/packages/shared/src/tools/create.ts](../../../../sources/cline__cline/sdk/packages/shared/src/tools/create.ts) | agentRuntime signal |
| entrypoints | [sdk/packages/shared/src/index.browser.ts](../../../../sources/cline__cline/sdk/packages/shared/src/index.browser.ts) | entrypoints signal |
| entrypoints | [sdk/packages/shared/src/index.ts](../../../../sources/cline__cline/sdk/packages/shared/src/index.ts) | entrypoints signal |
| entrypoints | [sdk/packages/sdk/src/index.ts](../../../../sources/cline__cline/sdk/packages/sdk/src/index.ts) | entrypoints signal |
| entrypoints | [sdk/packages/llms/src/index.browser.ts](../../../../sources/cline__cline/sdk/packages/llms/src/index.browser.ts) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1596 | [sdk/packages/shared/src/index.browser.ts](../../../../sources/cline__cline/sdk/packages/shared/src/index.browser.ts)<br>[sdk/packages/shared/src/index.ts](../../../../sources/cline__cline/sdk/packages/shared/src/index.ts)<br>[sdk/packages/sdk/src/index.ts](../../../../sources/cline__cline/sdk/packages/sdk/src/index.ts)<br>[sdk/packages/llms/src/index.browser.ts](../../../../sources/cline__cline/sdk/packages/llms/src/index.browser.ts)<br>[sdk/packages/llms/src/index.ts](../../../../sources/cline__cline/sdk/packages/llms/src/index.ts)<br>[sdk/packages/core/src/index.ts](../../../../sources/cline__cline/sdk/packages/core/src/index.ts)<br>[sdk/packages/core/src/auth/server.test.ts](../../../../sources/cline__cline/sdk/packages/core/src/auth/server.test.ts)<br>[sdk/packages/core/src/auth/server.ts](../../../../sources/cline__cline/sdk/packages/core/src/auth/server.ts) |
| agentRuntime | 464 | [sdk/AGENTS.md](../../../../sources/cline__cline/sdk/AGENTS.md)<br>[sdk/packages/shared/src/agent.ts](../../../../sources/cline__cline/sdk/packages/shared/src/agent.ts)<br>[sdk/packages/shared/src/tools/create.test.ts](../../../../sources/cline__cline/sdk/packages/shared/src/tools/create.test.ts)<br>[sdk/packages/shared/src/tools/create.ts](../../../../sources/cline__cline/sdk/packages/shared/src/tools/create.ts)<br>[sdk/packages/shared/src/session/hook-context.ts](../../../../sources/cline__cline/sdk/packages/shared/src/session/hook-context.ts)<br>[sdk/packages/shared/src/llms/tools.ts](../../../../sources/cline__cline/sdk/packages/shared/src/llms/tools.ts)<br>[sdk/packages/shared/src/hooks/contracts.ts](../../../../sources/cline__cline/sdk/packages/shared/src/hooks/contracts.ts)<br>[sdk/packages/shared/src/hooks/events.ts](../../../../sources/cline__cline/sdk/packages/shared/src/hooks/events.ts) |
| mcp | 89 | [sdk/packages/core/src/extensions/mcp/client.ts](../../../../sources/cline__cline/sdk/packages/core/src/extensions/mcp/client.ts)<br>[sdk/packages/core/src/extensions/mcp/config-loader.test.ts](../../../../sources/cline__cline/sdk/packages/core/src/extensions/mcp/config-loader.test.ts)<br>[sdk/packages/core/src/extensions/mcp/config-loader.ts](../../../../sources/cline__cline/sdk/packages/core/src/extensions/mcp/config-loader.ts)<br>[sdk/packages/core/src/extensions/mcp/index.ts](../../../../sources/cline__cline/sdk/packages/core/src/extensions/mcp/index.ts)<br>[sdk/packages/core/src/extensions/mcp/manager.test.ts](../../../../sources/cline__cline/sdk/packages/core/src/extensions/mcp/manager.test.ts)<br>[sdk/packages/core/src/extensions/mcp/manager.ts](../../../../sources/cline__cline/sdk/packages/core/src/extensions/mcp/manager.ts)<br>[sdk/packages/core/src/extensions/mcp/name-transform.ts](../../../../sources/cline__cline/sdk/packages/core/src/extensions/mcp/name-transform.ts)<br>[sdk/packages/core/src/extensions/mcp/oauth.test.ts](../../../../sources/cline__cline/sdk/packages/core/src/extensions/mcp/oauth.test.ts) |
| retrieval | 130 | [sdk/packages/shared/src/index.browser.ts](../../../../sources/cline__cline/sdk/packages/shared/src/index.browser.ts)<br>[sdk/packages/shared/src/index.ts](../../../../sources/cline__cline/sdk/packages/shared/src/index.ts)<br>[sdk/packages/shared/src/types/index.ts](../../../../sources/cline__cline/sdk/packages/shared/src/types/index.ts)<br>[sdk/packages/shared/src/team/index.ts](../../../../sources/cline__cline/sdk/packages/shared/src/team/index.ts)<br>[sdk/packages/shared/src/storage/index.ts](../../../../sources/cline__cline/sdk/packages/shared/src/storage/index.ts)<br>[sdk/packages/shared/src/session/index.ts](../../../../sources/cline__cline/sdk/packages/shared/src/session/index.ts)<br>[sdk/packages/shared/src/rpc/index.ts](../../../../sources/cline__cline/sdk/packages/shared/src/rpc/index.ts)<br>[sdk/packages/shared/src/remote-config/index.ts](../../../../sources/cline__cline/sdk/packages/shared/src/remote-config/index.ts) |
| spec | 18 | [sdk/ARCHITECTURE.md](../../../../sources/cline__cline/sdk/ARCHITECTURE.md)<br>[sdk/packages/shared/src/cron/cron-spec-types.ts](../../../../sources/cline__cline/sdk/packages/shared/src/cron/cron-spec-types.ts)<br>[sdk/packages/core/src/cron/specs/cron-spec-parser.test.ts](../../../../sources/cline__cline/sdk/packages/core/src/cron/specs/cron-spec-parser.test.ts)<br>[sdk/packages/core/src/cron/specs/cron-spec-parser.ts](../../../../sources/cline__cline/sdk/packages/core/src/cron/specs/cron-spec-parser.ts)<br>[sdk/examples/plugins/agents-squad/skills/api-design.md](../../../../sources/cline__cline/sdk/examples/plugins/agents-squad/skills/api-design.md)<br>[evals/ARCHITECTURE.md](../../../../sources/cline__cline/evals/ARCHITECTURE.md)<br>[docs/sdk/architecture/hub-spoke.mdx](../../../../sources/cline__cline/docs/sdk/architecture/hub-spoke.mdx)<br>[docs/sdk/architecture/overview.mdx](../../../../sources/cline__cline/docs/sdk/architecture/overview.mdx) |
| eval | 671 | [sdk/packages/shared/src/vcr.test.ts](../../../../sources/cline__cline/sdk/packages/shared/src/vcr.test.ts)<br>[sdk/packages/shared/src/tools/create.test.ts](../../../../sources/cline__cline/sdk/packages/shared/src/tools/create.test.ts)<br>[sdk/packages/shared/src/storage/path-resolution.test.ts](../../../../sources/cline__cline/sdk/packages/shared/src/storage/path-resolution.test.ts)<br>[sdk/packages/shared/src/storage/paths.home-dir.test.ts](../../../../sources/cline__cline/sdk/packages/shared/src/storage/paths.home-dir.test.ts)<br>[sdk/packages/shared/src/storage/paths.test.ts](../../../../sources/cline__cline/sdk/packages/shared/src/storage/paths.test.ts)<br>[sdk/packages/shared/src/services/telemetry.test.ts](../../../../sources/cline__cline/sdk/packages/shared/src/services/telemetry.test.ts)<br>[sdk/packages/shared/src/runtime/build-env.test.ts](../../../../sources/cline__cline/sdk/packages/shared/src/runtime/build-env.test.ts)<br>[sdk/packages/shared/src/runtime/cline-environment.test.ts](../../../../sources/cline__cline/sdk/packages/shared/src/runtime/cline-environment.test.ts) |
| security | 56 | [SECURITY.md](../../../../sources/cline__cline/SECURITY.md)<br>[sdk/packages/shared/src/types/auth.ts](../../../../sources/cline__cline/sdk/packages/shared/src/types/auth.ts)<br>[sdk/packages/core/src/runtime/tools/subprocess-sandbox.test.ts](../../../../sources/cline__cline/sdk/packages/core/src/runtime/tools/subprocess-sandbox.test.ts)<br>[sdk/packages/core/src/runtime/tools/subprocess-sandbox.ts](../../../../sources/cline__cline/sdk/packages/core/src/runtime/tools/subprocess-sandbox.ts)<br>[sdk/packages/core/src/runtime/orchestration/runtime-oauth-token-manager.test.ts](../../../../sources/cline__cline/sdk/packages/core/src/runtime/orchestration/runtime-oauth-token-manager.test.ts)<br>[sdk/packages/core/src/runtime/orchestration/runtime-oauth-token-manager.ts](../../../../sources/cline__cline/sdk/packages/core/src/runtime/orchestration/runtime-oauth-token-manager.ts)<br>[sdk/packages/core/src/extensions/plugin/plugin-sandbox-bootstrap.ts](../../../../sources/cline__cline/sdk/packages/core/src/extensions/plugin/plugin-sandbox-bootstrap.ts)<br>[sdk/packages/core/src/extensions/plugin/plugin-sandbox.test.ts](../../../../sources/cline__cline/sdk/packages/core/src/extensions/plugin/plugin-sandbox.test.ts) |
| ci | 10 | [.github/workflows/cli-publish.yml](../../../../sources/cline__cline/.github/workflows/cli-publish.yml)<br>[.github/workflows/ext-jb-test-integration.yml](../../../../sources/cline__cline/.github/workflows/ext-jb-test-integration.yml)<br>[.github/workflows/ext-vscode-publish-nightly.yml](../../../../sources/cline__cline/.github/workflows/ext-vscode-publish-nightly.yml)<br>[.github/workflows/ext-vscode-publish-stable.yml](../../../../sources/cline__cline/.github/workflows/ext-vscode-publish-stable.yml)<br>[.github/workflows/ext-vscode-test-e2e.yml](../../../../sources/cline__cline/.github/workflows/ext-vscode-test-e2e.yml)<br>[.github/workflows/ext-vscode-test.yml](../../../../sources/cline__cline/.github/workflows/ext-vscode-test.yml)<br>[.github/workflows/repo-label-issues.yml](../../../../sources/cline__cline/.github/workflows/repo-label-issues.yml)<br>[.github/workflows/repo-stale-issues.yml](../../../../sources/cline__cline/.github/workflows/repo-stale-issues.yml) |
| container | 0 | not obvious |
| instruction | 5 | [CLAUDE.md](../../../../sources/cline__cline/CLAUDE.md)<br>[sdk/AGENTS.md](../../../../sources/cline__cline/sdk/AGENTS.md)<br>[sdk/packages/llms/AGENTS.md](../../../../sources/cline__cline/sdk/packages/llms/AGENTS.md)<br>[.github/copilot-instructions.md](../../../../sources/cline__cline/.github/copilot-instructions.md)<br>[.codex/environments/environment.toml](../../../../sources/cline__cline/.codex/environments/environment.toml) |
| docs | 180 | [README.md](../../../../sources/cline__cline/README.md)<br>[sdk/README.md](../../../../sources/cline__cline/sdk/README.md)<br>[sdk/packages/README.md](../../../../sources/cline__cline/sdk/packages/README.md)<br>[sdk/packages/shared/README.md](../../../../sources/cline__cline/sdk/packages/shared/README.md)<br>[sdk/packages/llms/README.md](../../../../sources/cline__cline/sdk/packages/llms/README.md)<br>[sdk/packages/llms/src/tests/provider-vcr/README.md](../../../../sources/cline__cline/sdk/packages/llms/src/tests/provider-vcr/README.md)<br>[sdk/packages/llms/src/catalog/README.md](../../../../sources/cline__cline/sdk/packages/llms/src/catalog/README.md)<br>[sdk/packages/core/README.md](../../../../sources/cline__cline/sdk/packages/core/README.md) |
| config | 60 | [package.json](../../../../sources/cline__cline/package.json)<br>[sdk/tsconfig.json](../../../../sources/cline__cline/sdk/tsconfig.json)<br>[sdk/packages/shared/package.json](../../../../sources/cline__cline/sdk/packages/shared/package.json)<br>[sdk/packages/shared/tsconfig.json](../../../../sources/cline__cline/sdk/packages/shared/tsconfig.json)<br>[sdk/packages/sdk/package.json](../../../../sources/cline__cline/sdk/packages/sdk/package.json)<br>[sdk/packages/sdk/tsconfig.json](../../../../sources/cline__cline/sdk/packages/sdk/tsconfig.json)<br>[sdk/packages/llms/package.json](../../../../sources/cline__cline/sdk/packages/llms/package.json)<br>[sdk/packages/llms/tsconfig.json](../../../../sources/cline__cline/sdk/packages/llms/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 671 | [sdk/packages/shared/src/vcr.test.ts](../../../../sources/cline__cline/sdk/packages/shared/src/vcr.test.ts)<br>[sdk/packages/shared/src/tools/create.test.ts](../../../../sources/cline__cline/sdk/packages/shared/src/tools/create.test.ts)<br>[sdk/packages/shared/src/storage/path-resolution.test.ts](../../../../sources/cline__cline/sdk/packages/shared/src/storage/path-resolution.test.ts)<br>[sdk/packages/shared/src/storage/paths.home-dir.test.ts](../../../../sources/cline__cline/sdk/packages/shared/src/storage/paths.home-dir.test.ts)<br>[sdk/packages/shared/src/storage/paths.test.ts](../../../../sources/cline__cline/sdk/packages/shared/src/storage/paths.test.ts)<br>[sdk/packages/shared/src/services/telemetry.test.ts](../../../../sources/cline__cline/sdk/packages/shared/src/services/telemetry.test.ts) |
| CI workflows | 10 | [.github/workflows/cli-publish.yml](../../../../sources/cline__cline/.github/workflows/cli-publish.yml)<br>[.github/workflows/ext-jb-test-integration.yml](../../../../sources/cline__cline/.github/workflows/ext-jb-test-integration.yml)<br>[.github/workflows/ext-vscode-publish-nightly.yml](../../../../sources/cline__cline/.github/workflows/ext-vscode-publish-nightly.yml)<br>[.github/workflows/ext-vscode-publish-stable.yml](../../../../sources/cline__cline/.github/workflows/ext-vscode-publish-stable.yml)<br>[.github/workflows/ext-vscode-test-e2e.yml](../../../../sources/cline__cline/.github/workflows/ext-vscode-test-e2e.yml)<br>[.github/workflows/ext-vscode-test.yml](../../../../sources/cline__cline/.github/workflows/ext-vscode-test.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 56 | [SECURITY.md](../../../../sources/cline__cline/SECURITY.md)<br>[sdk/packages/shared/src/types/auth.ts](../../../../sources/cline__cline/sdk/packages/shared/src/types/auth.ts)<br>[sdk/packages/core/src/runtime/tools/subprocess-sandbox.test.ts](../../../../sources/cline__cline/sdk/packages/core/src/runtime/tools/subprocess-sandbox.test.ts)<br>[sdk/packages/core/src/runtime/tools/subprocess-sandbox.ts](../../../../sources/cline__cline/sdk/packages/core/src/runtime/tools/subprocess-sandbox.ts)<br>[sdk/packages/core/src/runtime/orchestration/runtime-oauth-token-manager.test.ts](../../../../sources/cline__cline/sdk/packages/core/src/runtime/orchestration/runtime-oauth-token-manager.test.ts)<br>[sdk/packages/core/src/runtime/orchestration/runtime-oauth-token-manager.ts](../../../../sources/cline__cline/sdk/packages/core/src/runtime/orchestration/runtime-oauth-token-manager.ts) |
| Agent instructions | 5 | [CLAUDE.md](../../../../sources/cline__cline/CLAUDE.md)<br>[sdk/AGENTS.md](../../../../sources/cline__cline/sdk/AGENTS.md)<br>[sdk/packages/llms/AGENTS.md](../../../../sources/cline__cline/sdk/packages/llms/AGENTS.md)<br>[.github/copilot-instructions.md](../../../../sources/cline__cline/.github/copilot-instructions.md)<br>[.codex/environments/environment.toml](../../../../sources/cline__cline/.codex/environments/environment.toml) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `sdk/packages/core/src/extensions/mcp/client.ts`, `sdk/packages/core/src/extensions/mcp/config-loader.test.ts`, `sdk/packages/core/src/extensions/mcp/config-loader.ts`.
2. Trace execution through entrypoints: `sdk/packages/shared/src/index.browser.ts`, `sdk/packages/shared/src/index.ts`, `sdk/packages/sdk/src/index.ts`.
3. Map agent/tool runtime through: `sdk/AGENTS.md`, `sdk/packages/shared/src/agent.ts`, `sdk/packages/shared/src/tools/create.test.ts`.
4. Inspect retrieval/memory/indexing through: `sdk/packages/shared/src/index.browser.ts`, `sdk/packages/shared/src/index.ts`, `sdk/packages/shared/src/types/index.ts`.
5. Verify behavior through test/eval files: `sdk/packages/shared/src/vcr.test.ts`, `sdk/packages/shared/src/tools/create.test.ts`, `sdk/packages/shared/src/storage/path-resolution.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 3383 files, 687 directories.. 핵심 구조 신호는 TypeScript, package.json, README.md, CLAUDE.md, LICENSE, tests이며, deep-source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing입니다.
