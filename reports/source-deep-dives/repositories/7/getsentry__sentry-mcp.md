# getsentry/sentry-mcp Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

An MCP server for interacting with Sentry via LLMs.

## 요약

- 조사 단위: `sources/getsentry__sentry-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 777 files, 135 directories, depth score 127, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

평가/관측/품질 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 eval=benchmark-agent.sh, packages/smoke-tests/package.json, packages/smoke-tests/vitest.config.ts이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 quality and evaluation comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | getsentry/sentry-mcp |
| Topic | Evals, Observability, and Quality / 평가/관측/품질 |
| Region | global |
| Language | TypeScript |
| Stars | 730 |
| Forks | 119 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/getsentry__sentry-mcp](../../../../sources/getsentry__sentry-mcp) |
| Existing report | [reports/global-trending/repositories/getsentry__sentry-mcp.md](../../../global-trending/repositories/getsentry__sentry-mcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 777 / 135 |
| Max observed depth | 8 |
| Top directories | .agents, .claude, .claude-plugin, .codex, .cursor, .cursor-plugin, .github, bin, docs, openspec, packages, plugins, scripts |
| Top extensions | .ts: 399, .json: 174, .tsx: 86, .md: 78, .yml: 9, (none): 5, .png: 4, .toml: 4, .jsonc: 3, .yaml: 3, .css: 2, .example: 2 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/mcp-test-client | packages workspace | 61 |
| packages/mcp-core | packages workspace | 52 |
| docs | documentation surface | 43 |
| packages/mcp-cloudflare | packages workspace | 31 |
| packages/mcp-server-mocks | packages workspace | 17 |
| packages/mcp-server | packages workspace | 15 |
| packages/agent-cli-test | packages workspace | 8 |
| packages/mcp-server-evals | packages workspace | 6 |
| packages/mcp-server-tsconfig | packages workspace | 4 |
| packages/smoke-tests | packages workspace | 4 |
| .codex | top-level component | 1 |
| .github | ci surface | 1 |
| bin | top-level component | 1 |
| openspec | top-level component | 1 |
| packages | source boundary | 1 |
| plugins | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| quality | package.json | docs:check | node scripts/check-doc-links.mjs |
| serve-dev | package.json | dev | dotenv -e .env -e .env.local -- turbo dev --filter=!@sentry/mcp-server |
| serve-dev | package.json | dev:stdio | dotenv -e .env -e .env.local -- turbo dev --filter=!@sentry/mcp-cloudflare |
| build | package.json | build | turbo build after-build |
| utility | package.json | deploy | turbo deploy |
| utility | package.json | eval | dotenv -e .env -e .env.local -- turbo eval |
| utility | package.json | eval:ci | CI=true dotenv -e .env -e .env.local -- pnpm --stream -r run eval:ci |
| quality | package.json | format | biome format --write |
| quality | package.json | lint | biome lint |
| quality | package.json | lint:fix | biome lint --fix |
| test | package.json | inspector | pnpx @modelcontextprotocol/inspector@latest |
| test | package.json | inspector:stdio | pnpx @modelcontextprotocol/inspector@latest -- tsx packages/mcp-server/src/index.ts |
| utility | package.json | measure-tokens | pnpm run --filter ./packages/mcp-core measure-tokens |
| utility | package.json | prepare | simple-git-hooks |
| test | package.json | cli | pnpm run --filter ./packages/mcp-test-client start |
| test | package.json | agent-cli-test | pnpm run --filter ./packages/agent-cli-test start |
| serve-dev | package.json | start:stdio | pnpm --stream run --filter ./packages/mcp-server start |
| test | package.json | test | dotenv -e .env -e .env.local -- turbo test |
| test | package.json | test:ci | CI=true dotenv -e .env -e .env.local -- pnpm --stream -r run test:ci |
| test | package.json | test:watch | dotenv -e .env -e .env.local -- turbo test:watch |
| quality | package.json | tsc | turbo tsc |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | clean | make clean |
| utility | Makefile | setup-env | make setup-env |


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
| eval | [benchmark-agent.sh](../../../../sources/getsentry__sentry-mcp/benchmark-agent.sh) | eval signal |
| eval | [packages/smoke-tests/package.json](../../../../sources/getsentry__sentry-mcp/packages/smoke-tests/package.json) | eval signal |
| eval | [packages/smoke-tests/vitest.config.ts](../../../../sources/getsentry__sentry-mcp/packages/smoke-tests/vitest.config.ts) | eval signal |
| eval | [packages/smoke-tests/src/smoke.test.ts](../../../../sources/getsentry__sentry-mcp/packages/smoke-tests/src/smoke.test.ts) | eval signal |
| entrypoints | [packages/mcp-test-client/src/index.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-test-client/src/index.ts) | entrypoints signal |
| entrypoints | [packages/mcp-server-mocks/src/index.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-server-mocks/src/index.ts) | entrypoints signal |
| entrypoints | [packages/mcp-server-evals/src/bin/start-mock-stdio.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-server-evals/src/bin/start-mock-stdio.ts) | entrypoints signal |
| entrypoints | [packages/mcp-server/src/index.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-server/src/index.ts) | entrypoints signal |
| config | [Makefile](../../../../sources/getsentry__sentry-mcp/Makefile) | config signal |
| config | [package.json](../../../../sources/getsentry__sentry-mcp/package.json) | config signal |
| config | [pnpm-workspace.yaml](../../../../sources/getsentry__sentry-mcp/pnpm-workspace.yaml) | config signal |
| config | [turbo.json](../../../../sources/getsentry__sentry-mcp/turbo.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 10 | [packages/mcp-test-client/src/index.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-test-client/src/index.ts)<br>[packages/mcp-server-mocks/src/index.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-server-mocks/src/index.ts)<br>[packages/mcp-server-evals/src/bin/start-mock-stdio.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-server-evals/src/bin/start-mock-stdio.ts)<br>[packages/mcp-server/src/index.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-server/src/index.ts)<br>[packages/mcp-core/src/server.test.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-core/src/server.test.ts)<br>[packages/mcp-core/src/server.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-core/src/server.ts)<br>[packages/mcp-core/src/internal/agents/tools/data/server.json](../../../../sources/getsentry__sentry-mcp/packages/mcp-core/src/internal/agents/tools/data/server.json)<br>[packages/mcp-cloudflare/src/client/main.tsx](../../../../sources/getsentry__sentry-mcp/packages/mcp-cloudflare/src/client/main.tsx) |
| agentRuntime | 297 | [AGENTS.md](../../../../sources/getsentry__sentry-mcp/AGENTS.md)<br>[agents.toml](../../../../sources/getsentry__sentry-mcp/agents.toml)<br>[plugins/sentry-mcp-experimental/agents/sentry-mcp.md](../../../../sources/getsentry__sentry-mcp/plugins/sentry-mcp-experimental/agents/sentry-mcp.md)<br>[plugins/sentry-mcp/agents/sentry-mcp.md](../../../../sources/getsentry__sentry-mcp/plugins/sentry-mcp/agents/sentry-mcp.md)<br>[packages/mcp-test-client/src/agent.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-test-client/src/agent.ts)<br>[packages/mcp-test-client/src/tool-output-format.test.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-test-client/src/tool-output-format.test.ts)<br>[packages/mcp-test-client/src/tool-output-format.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-test-client/src/tool-output-format.ts)<br>[packages/mcp-server-evals/src/evals/utils/runner.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-server-evals/src/evals/utils/runner.ts) |
| mcp | 667 | [.mcp.json](../../../../sources/getsentry__sentry-mcp/.mcp.json)<br>[plugins/sentry-mcp-experimental/.mcp.json](../../../../sources/getsentry__sentry-mcp/plugins/sentry-mcp-experimental/.mcp.json)<br>[plugins/sentry-mcp-experimental/mcp.json](../../../../sources/getsentry__sentry-mcp/plugins/sentry-mcp-experimental/mcp.json)<br>[plugins/sentry-mcp-experimental/agents/sentry-mcp.md](../../../../sources/getsentry__sentry-mcp/plugins/sentry-mcp-experimental/agents/sentry-mcp.md)<br>[plugins/sentry-mcp-experimental/.cursor-plugin/plugin.json](../../../../sources/getsentry__sentry-mcp/plugins/sentry-mcp-experimental/.cursor-plugin/plugin.json)<br>[plugins/sentry-mcp-experimental/.claude-plugin/plugin.json](../../../../sources/getsentry__sentry-mcp/plugins/sentry-mcp-experimental/.claude-plugin/plugin.json)<br>[plugins/sentry-mcp/.mcp.json](../../../../sources/getsentry__sentry-mcp/plugins/sentry-mcp/.mcp.json)<br>[plugins/sentry-mcp/mcp.json](../../../../sources/getsentry__sentry-mcp/plugins/sentry-mcp/mcp.json) |
| retrieval | 27 | [packages/mcp-test-client/src/index.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-test-client/src/index.ts)<br>[packages/mcp-server-mocks/src/index.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-server-mocks/src/index.ts)<br>[packages/mcp-server-mocks/src/fixtures/profile-chunk.json](../../../../sources/getsentry__sentry-mcp/packages/mcp-server-mocks/src/fixtures/profile-chunk.json)<br>[packages/mcp-server-evals/src/evals/utils/index.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-server-evals/src/evals/utils/index.ts)<br>[packages/mcp-server/src/index.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-server/src/index.ts)<br>[packages/mcp-core/src/tools/index.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-core/src/tools/index.ts)<br>[packages/mcp-core/src/tools/support/search-issues/index.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-core/src/tools/support/search-issues/index.ts)<br>[packages/mcp-core/src/tools/support/search-issue-events/index.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-core/src/tools/support/search-issue-events/index.ts) |
| spec | 4 | [docs/cloudflare/architecture.md](../../../../sources/getsentry__sentry-mcp/docs/cloudflare/architecture.md)<br>[docs/cloudflare/oauth-architecture.md](../../../../sources/getsentry__sentry-mcp/docs/cloudflare/oauth-architecture.md)<br>[docs/architecture/overview.md](../../../../sources/getsentry__sentry-mcp/docs/architecture/overview.md)<br>[.agents/skills/mcp-audit/references/spec-baseline.md](../../../../sources/getsentry__sentry-mcp/.agents/skills/mcp-audit/references/spec-baseline.md) |
| eval | 219 | [benchmark-agent.sh](../../../../sources/getsentry__sentry-mcp/benchmark-agent.sh)<br>[packages/smoke-tests/package.json](../../../../sources/getsentry__sentry-mcp/packages/smoke-tests/package.json)<br>[packages/smoke-tests/vitest.config.ts](../../../../sources/getsentry__sentry-mcp/packages/smoke-tests/vitest.config.ts)<br>[packages/smoke-tests/src/smoke.test.ts](../../../../sources/getsentry__sentry-mcp/packages/smoke-tests/src/smoke.test.ts)<br>[packages/mcp-test-client/.env.test](../../../../sources/getsentry__sentry-mcp/packages/mcp-test-client/.env.test)<br>[packages/mcp-test-client/.gitignore](../../../../sources/getsentry__sentry-mcp/packages/mcp-test-client/.gitignore)<br>[packages/mcp-test-client/package.json](../../../../sources/getsentry__sentry-mcp/packages/mcp-test-client/package.json)<br>[packages/mcp-test-client/README.md](../../../../sources/getsentry__sentry-mcp/packages/mcp-test-client/README.md) |
| security | 46 | [packages/mcp-test-client/src/auth/config.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-test-client/src/auth/config.ts)<br>[packages/mcp-test-client/src/auth/oauth.test.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-test-client/src/auth/oauth.test.ts)<br>[packages/mcp-test-client/src/auth/oauth.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-test-client/src/auth/oauth.ts)<br>[packages/mcp-server/src/cli/commands/auth.test.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-server/src/cli/commands/auth.test.ts)<br>[packages/mcp-server/src/cli/commands/auth.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-server/src/cli/commands/auth.ts)<br>[packages/mcp-server/src/auth/constants.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-server/src/auth/constants.ts)<br>[packages/mcp-server/src/auth/device-code-flow.test.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-server/src/auth/device-code-flow.test.ts)<br>[packages/mcp-server/src/auth/device-code-flow.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-server/src/auth/device-code-flow.ts) |
| ci | 8 | [.github/workflows/deploy.yml](../../../../sources/getsentry__sentry-mcp/.github/workflows/deploy.yml)<br>[.github/workflows/eval.yml](../../../../sources/getsentry__sentry-mcp/.github/workflows/eval.yml)<br>[.github/workflows/mcp-server-package.yml](../../../../sources/getsentry__sentry-mcp/.github/workflows/mcp-server-package.yml)<br>[.github/workflows/merge-jobs.yml](../../../../sources/getsentry__sentry-mcp/.github/workflows/merge-jobs.yml)<br>[.github/workflows/release.yml](../../../../sources/getsentry__sentry-mcp/.github/workflows/release.yml)<br>[.github/workflows/smoke-tests.yml](../../../../sources/getsentry__sentry-mcp/.github/workflows/smoke-tests.yml)<br>[.github/workflows/test.yml](../../../../sources/getsentry__sentry-mcp/.github/workflows/test.yml)<br>[.github/workflows/token-cost.yml](../../../../sources/getsentry__sentry-mcp/.github/workflows/token-cost.yml) |
| container | 0 | not obvious |
| instruction | 9 | [AGENTS.md](../../../../sources/getsentry__sentry-mcp/AGENTS.md)<br>[packages/mcp-core/src/internal/agents/tools/data/CLAUDE.md](../../../../sources/getsentry__sentry-mcp/packages/mcp-core/src/internal/agents/tools/data/CLAUDE.md)<br>[packages/agent-cli-test/projects/stdio/.codex/config.toml](../../../../sources/getsentry__sentry-mcp/packages/agent-cli-test/projects/stdio/.codex/config.toml)<br>[.codex/config.toml](../../../../sources/getsentry__sentry-mcp/.codex/config.toml)<br>[.codex/skills/openspec-sync-specs/SKILL.md](../../../../sources/getsentry__sentry-mcp/.codex/skills/openspec-sync-specs/SKILL.md)<br>[.codex/skills/openspec-propose/SKILL.md](../../../../sources/getsentry__sentry-mcp/.codex/skills/openspec-propose/SKILL.md)<br>[.codex/skills/openspec-explore/SKILL.md](../../../../sources/getsentry__sentry-mcp/.codex/skills/openspec-explore/SKILL.md)<br>[.codex/skills/openspec-archive-change/SKILL.md](../../../../sources/getsentry__sentry-mcp/.codex/skills/openspec-archive-change/SKILL.md) |
| docs | 41 | [README.md](../../../../sources/getsentry__sentry-mcp/README.md)<br>[packages/mcp-test-client/README.md](../../../../sources/getsentry__sentry-mcp/packages/mcp-test-client/README.md)<br>[packages/mcp-server-evals/README.md](../../../../sources/getsentry__sentry-mcp/packages/mcp-server-evals/README.md)<br>[packages/mcp-core/README.md](../../../../sources/getsentry__sentry-mcp/packages/mcp-core/README.md)<br>[packages/mcp-core/src/tools/support/search-issues/README.md](../../../../sources/getsentry__sentry-mcp/packages/mcp-core/src/tools/support/search-issues/README.md)<br>[packages/agent-cli-test/README.md](../../../../sources/getsentry__sentry-mcp/packages/agent-cli-test/README.md)<br>[docs/README.md](../../../../sources/getsentry__sentry-mcp/docs/README.md)<br>[docs/testing/overview.md](../../../../sources/getsentry__sentry-mcp/docs/testing/overview.md) |
| config | 20 | [Makefile](../../../../sources/getsentry__sentry-mcp/Makefile)<br>[package.json](../../../../sources/getsentry__sentry-mcp/package.json)<br>[pnpm-workspace.yaml](../../../../sources/getsentry__sentry-mcp/pnpm-workspace.yaml)<br>[turbo.json](../../../../sources/getsentry__sentry-mcp/turbo.json)<br>[packages/smoke-tests/package.json](../../../../sources/getsentry__sentry-mcp/packages/smoke-tests/package.json)<br>[packages/mcp-test-client/package.json](../../../../sources/getsentry__sentry-mcp/packages/mcp-test-client/package.json)<br>[packages/mcp-test-client/tsconfig.json](../../../../sources/getsentry__sentry-mcp/packages/mcp-test-client/tsconfig.json)<br>[packages/mcp-server-tsconfig/package.json](../../../../sources/getsentry__sentry-mcp/packages/mcp-server-tsconfig/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 219 | [benchmark-agent.sh](../../../../sources/getsentry__sentry-mcp/benchmark-agent.sh)<br>[packages/smoke-tests/package.json](../../../../sources/getsentry__sentry-mcp/packages/smoke-tests/package.json)<br>[packages/smoke-tests/vitest.config.ts](../../../../sources/getsentry__sentry-mcp/packages/smoke-tests/vitest.config.ts)<br>[packages/smoke-tests/src/smoke.test.ts](../../../../sources/getsentry__sentry-mcp/packages/smoke-tests/src/smoke.test.ts)<br>[packages/mcp-test-client/.env.test](../../../../sources/getsentry__sentry-mcp/packages/mcp-test-client/.env.test)<br>[packages/mcp-test-client/.gitignore](../../../../sources/getsentry__sentry-mcp/packages/mcp-test-client/.gitignore) |
| CI workflows | 8 | [.github/workflows/deploy.yml](../../../../sources/getsentry__sentry-mcp/.github/workflows/deploy.yml)<br>[.github/workflows/eval.yml](../../../../sources/getsentry__sentry-mcp/.github/workflows/eval.yml)<br>[.github/workflows/mcp-server-package.yml](../../../../sources/getsentry__sentry-mcp/.github/workflows/mcp-server-package.yml)<br>[.github/workflows/merge-jobs.yml](../../../../sources/getsentry__sentry-mcp/.github/workflows/merge-jobs.yml)<br>[.github/workflows/release.yml](../../../../sources/getsentry__sentry-mcp/.github/workflows/release.yml)<br>[.github/workflows/smoke-tests.yml](../../../../sources/getsentry__sentry-mcp/.github/workflows/smoke-tests.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 46 | [packages/mcp-test-client/src/auth/config.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-test-client/src/auth/config.ts)<br>[packages/mcp-test-client/src/auth/oauth.test.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-test-client/src/auth/oauth.test.ts)<br>[packages/mcp-test-client/src/auth/oauth.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-test-client/src/auth/oauth.ts)<br>[packages/mcp-server/src/cli/commands/auth.test.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-server/src/cli/commands/auth.test.ts)<br>[packages/mcp-server/src/cli/commands/auth.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-server/src/cli/commands/auth.ts)<br>[packages/mcp-server/src/auth/constants.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-server/src/auth/constants.ts) |
| Agent instructions | 9 | [AGENTS.md](../../../../sources/getsentry__sentry-mcp/AGENTS.md)<br>[packages/mcp-core/src/internal/agents/tools/data/CLAUDE.md](../../../../sources/getsentry__sentry-mcp/packages/mcp-core/src/internal/agents/tools/data/CLAUDE.md)<br>[packages/agent-cli-test/projects/stdio/.codex/config.toml](../../../../sources/getsentry__sentry-mcp/packages/agent-cli-test/projects/stdio/.codex/config.toml)<br>[.codex/config.toml](../../../../sources/getsentry__sentry-mcp/.codex/config.toml)<br>[.codex/skills/openspec-sync-specs/SKILL.md](../../../../sources/getsentry__sentry-mcp/.codex/skills/openspec-sync-specs/SKILL.md)<br>[.codex/skills/openspec-propose/SKILL.md](../../../../sources/getsentry__sentry-mcp/.codex/skills/openspec-propose/SKILL.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `benchmark-agent.sh`, `packages/smoke-tests/package.json`, `packages/smoke-tests/vitest.config.ts`.
2. Trace execution through entrypoints: `packages/mcp-test-client/src/index.ts`, `packages/mcp-server-mocks/src/index.ts`, `packages/mcp-server-evals/src/bin/start-mock-stdio.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `agents.toml`, `plugins/sentry-mcp-experimental/agents/sentry-mcp.md`.
4. Inspect retrieval/memory/indexing through: `packages/mcp-test-client/src/index.ts`, `packages/mcp-server-mocks/src/index.ts`, `packages/mcp-server-mocks/src/fixtures/profile-chunk.json`.
5. Verify behavior through test/eval files: `benchmark-agent.sh`, `packages/smoke-tests/package.json`, `packages/smoke-tests/vitest.config.ts`.

## Existing Repository Insight

평가/관측/품질 관점에서 An MCP server for interacting with Sentry via LLMs.. 핵심 구조 신호는 TypeScript, package.json, Makefile, README.md, AGENTS.md, tests이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 평가/관측/품질 레포입니다. 활용 관점은 quality and evaluation comparison point이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
