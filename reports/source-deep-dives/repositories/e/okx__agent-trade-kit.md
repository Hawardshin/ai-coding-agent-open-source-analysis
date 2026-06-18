# okx/agent-trade-kit Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

OKX trading MCP server — connect AI agents to spot, swap, futures, options & grid bots via the Model Context Protocol.

## 요약

- 조사 단위: `sources/okx__agent-trade-kit` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 339 files, 56 directories, depth score 119, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=test/mcp-e2e.mjs, packages/mcp/package.json, packages/mcp/README.md이고, 의존성 단서는 modelcontextprotocol, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | okx/agent-trade-kit |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 335 |
| Forks | 56 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/okx__agent-trade-kit](../../../../sources/okx__agent-trade-kit) |
| Existing report | [reports/global-trending/repositories/okx__agent-trade-kit.md](../../../global-trending/repositories/okx__agent-trade-kit.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 339 / 56 |
| Max observed depth | 6 |
| Top directories | .github, docs, packages, scripts, skills, test |
| Top extensions | .ts: 203, .md: 97, .json: 15, .sh: 5, .yml: 5, .mjs: 3, (none): 3, .example: 2, .js: 2, .yaml: 2, .ps1: 1, .txt: 1 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/core | packages workspace | 49 |
| docs | documentation surface | 27 |
| packages/mcp | packages workspace | 23 |
| packages/cli | packages workspace | 13 |
| .github | ci surface | 1 |
| packages | source boundary | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |
| test | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | pnpm --filter @agent-tradekit/core build && pnpm --filter @okx_ai/okx-trade-mcp build && pnpm --filter @okx_ai/okx-trade-cli build |
| quality | package.json | typecheck | pnpm -r typecheck |
| utility | package.json | clean | pnpm -r clean |
| test | package.json | test:unit | pnpm --filter @agent-tradekit/core test:unit && pnpm --filter @okx_ai/okx-trade-cli test:unit && pnpm --filter @okx_ai/okx-trade-mcp test:unit |
| test | package.json | test:coverage | c8 --reporter=lcov --reporter=text --src=packages/core/src --src=packages/cli/src node_modules/.bin/tsx --test packages/core/test/*.test.ts packages/cli/test/*.test.ts packages/mcp/test/*.test.ts |
| test | package.json | test | c8 --reporter=lcov --reporter=text --src=packages/core/src --src=packages/cli/src node_modules/.bin/tsx --test packages/core/test/*.test.ts packages/cli/test/*.test.ts packages/mcp/test/*.test.ts |
| test | package.json | pretest | npm run build -w packages/core && npm run build -w packages/cli |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | modelcontextprotocol |
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
| mcp | [test/mcp-e2e.mjs](../../../../sources/okx__agent-trade-kit/test/mcp-e2e.mjs) | mcp signal |
| mcp | [packages/mcp/package.json](../../../../sources/okx__agent-trade-kit/packages/mcp/package.json) | mcp signal |
| mcp | [packages/mcp/README.md](../../../../sources/okx__agent-trade-kit/packages/mcp/README.md) | mcp signal |
| mcp | [packages/mcp/README.zh-CN.md](../../../../sources/okx__agent-trade-kit/packages/mcp/README.zh-CN.md) | mcp signal |
| agentRuntime | [skills/README.md](../../../../sources/okx__agent-trade-kit/skills/README.md) | agentRuntime signal |
| agentRuntime | [skills/README.zh-CN.md](../../../../sources/okx__agent-trade-kit/skills/README.zh-CN.md) | agentRuntime signal |
| agentRuntime | [skills/okx-sentiment-tracker/SKILL.md](../../../../sources/okx__agent-trade-kit/skills/okx-sentiment-tracker/SKILL.md) | agentRuntime signal |
| agentRuntime | [skills/okx-sentiment-tracker/references/workflows.md](../../../../sources/okx__agent-trade-kit/skills/okx-sentiment-tracker/references/workflows.md) | agentRuntime signal |
| entrypoints | [packages/mcp/test/server.test.ts](../../../../sources/okx__agent-trade-kit/packages/mcp/test/server.test.ts) | entrypoints signal |
| entrypoints | [packages/mcp/src/index.ts](../../../../sources/okx__agent-trade-kit/packages/mcp/src/index.ts) | entrypoints signal |
| entrypoints | [packages/mcp/src/server.ts](../../../../sources/okx__agent-trade-kit/packages/mcp/src/server.ts) | entrypoints signal |
| entrypoints | [packages/core/src/index.ts](../../../../sources/okx__agent-trade-kit/packages/core/src/index.ts) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 5 | [packages/mcp/test/server.test.ts](../../../../sources/okx__agent-trade-kit/packages/mcp/test/server.test.ts)<br>[packages/mcp/src/index.ts](../../../../sources/okx__agent-trade-kit/packages/mcp/src/index.ts)<br>[packages/mcp/src/server.ts](../../../../sources/okx__agent-trade-kit/packages/mcp/src/server.ts)<br>[packages/core/src/index.ts](../../../../sources/okx__agent-trade-kit/packages/core/src/index.ts)<br>[packages/cli/src/index.ts](../../../../sources/okx__agent-trade-kit/packages/cli/src/index.ts) |
| agentRuntime | 111 | [skills/README.md](../../../../sources/okx__agent-trade-kit/skills/README.md)<br>[skills/README.zh-CN.md](../../../../sources/okx__agent-trade-kit/skills/README.zh-CN.md)<br>[skills/okx-sentiment-tracker/SKILL.md](../../../../sources/okx__agent-trade-kit/skills/okx-sentiment-tracker/SKILL.md)<br>[skills/okx-sentiment-tracker/references/workflows.md](../../../../sources/okx__agent-trade-kit/skills/okx-sentiment-tracker/references/workflows.md)<br>[skills/okx-outcomes/SKILL.md](../../../../sources/okx__agent-trade-kit/skills/okx-outcomes/SKILL.md)<br>[skills/okx-outcomes/references/account-commands.md](../../../../sources/okx__agent-trade-kit/skills/okx-outcomes/references/account-commands.md)<br>[skills/okx-outcomes/references/clob-commands.md](../../../../sources/okx__agent-trade-kit/skills/okx-outcomes/references/clob-commands.md)<br>[skills/okx-outcomes/references/ctf-commands.md](../../../../sources/okx__agent-trade-kit/skills/okx-outcomes/references/ctf-commands.md) |
| mcp | 15 | [test/mcp-e2e.mjs](../../../../sources/okx__agent-trade-kit/test/mcp-e2e.mjs)<br>[packages/mcp/package.json](../../../../sources/okx__agent-trade-kit/packages/mcp/package.json)<br>[packages/mcp/README.md](../../../../sources/okx__agent-trade-kit/packages/mcp/README.md)<br>[packages/mcp/README.zh-CN.md](../../../../sources/okx__agent-trade-kit/packages/mcp/README.zh-CN.md)<br>[packages/mcp/tsconfig.json](../../../../sources/okx__agent-trade-kit/packages/mcp/tsconfig.json)<br>[packages/mcp/tsup.config.ts](../../../../sources/okx__agent-trade-kit/packages/mcp/tsup.config.ts)<br>[packages/mcp/test/bundle.test.ts](../../../../sources/okx__agent-trade-kit/packages/mcp/test/bundle.test.ts)<br>[packages/mcp/test/server.test.ts](../../../../sources/okx__agent-trade-kit/packages/mcp/test/server.test.ts) |
| retrieval | 8 | [packages/mcp/src/index.ts](../../../../sources/okx__agent-trade-kit/packages/mcp/src/index.ts)<br>[packages/core/src/index.ts](../../../../sources/okx__agent-trade-kit/packages/core/src/index.ts)<br>[packages/core/src/tools/index.ts](../../../../sources/okx__agent-trade-kit/packages/core/src/tools/index.ts)<br>[packages/core/src/tools/earn/index.ts](../../../../sources/okx__agent-trade-kit/packages/core/src/tools/earn/index.ts)<br>[packages/core/src/tools/bot/index.ts](../../../../sources/okx__agent-trade-kit/packages/core/src/tools/bot/index.ts)<br>[packages/core/src/skills/index.ts](../../../../sources/okx__agent-trade-kit/packages/core/src/skills/index.ts)<br>[packages/cli/test/index.test.ts](../../../../sources/okx__agent-trade-kit/packages/cli/test/index.test.ts)<br>[packages/cli/src/index.ts](../../../../sources/okx__agent-trade-kit/packages/cli/src/index.ts) |
| spec | 3 | [ARCHITECTURE.md](../../../../sources/okx__agent-trade-kit/ARCHITECTURE.md)<br>[ARCHITECTURE.zh-CN.md](../../../../sources/okx__agent-trade-kit/ARCHITECTURE.zh-CN.md)<br>[docs/mcp-design-guideline.md](../../../../sources/okx__agent-trade-kit/docs/mcp-design-guideline.md) |
| eval | 101 | [test/mcp-e2e.mjs](../../../../sources/okx__agent-trade-kit/test/mcp-e2e.mjs)<br>[test/smoke.sh](../../../../sources/okx__agent-trade-kit/test/smoke.sh)<br>[test/test-indicators.sh](../../../../sources/okx__agent-trade-kit/test/test-indicators.sh)<br>[scripts/smoke-test/README.md](../../../../sources/okx__agent-trade-kit/scripts/smoke-test/README.md)<br>[scripts/smoke-test/run.ts](../../../../sources/okx__agent-trade-kit/scripts/smoke-test/run.ts)<br>[scripts/scenario-test/run.ts](../../../../sources/okx__agent-trade-kit/scripts/scenario-test/run.ts)<br>[scripts/scenario-test/spot-flow.ts](../../../../sources/okx__agent-trade-kit/scripts/scenario-test/spot-flow.ts)<br>[scripts/scenario-test/stateless.ts](../../../../sources/okx__agent-trade-kit/scripts/scenario-test/stateless.ts) |
| security | 20 | [SECURITY.md](../../../../sources/okx__agent-trade-kit/SECURITY.md)<br>[skills/okx-outcomes/references/setup-auth.md](../../../../sources/okx__agent-trade-kit/skills/okx-outcomes/references/setup-auth.md)<br>[skills/okx-cex-auth/SKILL.md](../../../../sources/okx__agent-trade-kit/skills/okx-cex-auth/SKILL.md)<br>[packages/core/test/audit.test.ts](../../../../sources/okx__agent-trade-kit/packages/core/test/audit.test.ts)<br>[packages/core/test/auth-binary.test.ts](../../../../sources/okx__agent-trade-kit/packages/core/test/auth-binary.test.ts)<br>[packages/core/test/auth-installer.test.ts](../../../../sources/okx__agent-trade-kit/packages/core/test/auth-installer.test.ts)<br>[packages/core/test/auth-update-check.test.ts](../../../../sources/okx__agent-trade-kit/packages/core/test/auth-update-check.test.ts)<br>[packages/core/test/fixtures/mock-auth-binary.mjs](../../../../sources/okx__agent-trade-kit/packages/core/test/fixtures/mock-auth-binary.mjs) |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/okx__agent-trade-kit/.github/workflows/ci.yml)<br>[.github/workflows/opensource-guard.yml](../../../../sources/okx__agent-trade-kit/.github/workflows/opensource-guard.yml)<br>[.github/workflows/smoke-test.yml](../../../../sources/okx__agent-trade-kit/.github/workflows/smoke-test.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 33 | [README.md](../../../../sources/okx__agent-trade-kit/README.md)<br>[README.zh-CN.md](../../../../sources/okx__agent-trade-kit/README.zh-CN.md)<br>[skills/README.md](../../../../sources/okx__agent-trade-kit/skills/README.md)<br>[skills/README.zh-CN.md](../../../../sources/okx__agent-trade-kit/skills/README.zh-CN.md)<br>[scripts/smoke-test/README.md](../../../../sources/okx__agent-trade-kit/scripts/smoke-test/README.md)<br>[packages/mcp/README.md](../../../../sources/okx__agent-trade-kit/packages/mcp/README.md)<br>[packages/mcp/README.zh-CN.md](../../../../sources/okx__agent-trade-kit/packages/mcp/README.zh-CN.md)<br>[packages/cli/README.md](../../../../sources/okx__agent-trade-kit/packages/cli/README.md) |
| config | 11 | [package.json](../../../../sources/okx__agent-trade-kit/package.json)<br>[pnpm-workspace.yaml](../../../../sources/okx__agent-trade-kit/pnpm-workspace.yaml)<br>[packages/mcp/package.json](../../../../sources/okx__agent-trade-kit/packages/mcp/package.json)<br>[packages/mcp/tsconfig.json](../../../../sources/okx__agent-trade-kit/packages/mcp/tsconfig.json)<br>[packages/mcp/test/tsconfig.json](../../../../sources/okx__agent-trade-kit/packages/mcp/test/tsconfig.json)<br>[packages/core/package.json](../../../../sources/okx__agent-trade-kit/packages/core/package.json)<br>[packages/core/tsconfig.json](../../../../sources/okx__agent-trade-kit/packages/core/tsconfig.json)<br>[packages/core/test/tsconfig.json](../../../../sources/okx__agent-trade-kit/packages/core/test/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 101 | [test/mcp-e2e.mjs](../../../../sources/okx__agent-trade-kit/test/mcp-e2e.mjs)<br>[test/smoke.sh](../../../../sources/okx__agent-trade-kit/test/smoke.sh)<br>[test/test-indicators.sh](../../../../sources/okx__agent-trade-kit/test/test-indicators.sh)<br>[scripts/smoke-test/README.md](../../../../sources/okx__agent-trade-kit/scripts/smoke-test/README.md)<br>[scripts/smoke-test/run.ts](../../../../sources/okx__agent-trade-kit/scripts/smoke-test/run.ts)<br>[scripts/scenario-test/run.ts](../../../../sources/okx__agent-trade-kit/scripts/scenario-test/run.ts) |
| CI workflows | 3 | [.github/workflows/ci.yml](../../../../sources/okx__agent-trade-kit/.github/workflows/ci.yml)<br>[.github/workflows/opensource-guard.yml](../../../../sources/okx__agent-trade-kit/.github/workflows/opensource-guard.yml)<br>[.github/workflows/smoke-test.yml](../../../../sources/okx__agent-trade-kit/.github/workflows/smoke-test.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 20 | [SECURITY.md](../../../../sources/okx__agent-trade-kit/SECURITY.md)<br>[skills/okx-outcomes/references/setup-auth.md](../../../../sources/okx__agent-trade-kit/skills/okx-outcomes/references/setup-auth.md)<br>[skills/okx-cex-auth/SKILL.md](../../../../sources/okx__agent-trade-kit/skills/okx-cex-auth/SKILL.md)<br>[packages/core/test/audit.test.ts](../../../../sources/okx__agent-trade-kit/packages/core/test/audit.test.ts)<br>[packages/core/test/auth-binary.test.ts](../../../../sources/okx__agent-trade-kit/packages/core/test/auth-binary.test.ts)<br>[packages/core/test/auth-installer.test.ts](../../../../sources/okx__agent-trade-kit/packages/core/test/auth-installer.test.ts) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `test/mcp-e2e.mjs`, `packages/mcp/package.json`, `packages/mcp/README.md`.
2. Trace execution through entrypoints: `packages/mcp/test/server.test.ts`, `packages/mcp/src/index.ts`, `packages/mcp/src/server.ts`.
3. Map agent/tool runtime through: `skills/README.md`, `skills/README.zh-CN.md`, `skills/okx-sentiment-tracker/SKILL.md`.
4. Inspect retrieval/memory/indexing through: `packages/mcp/src/index.ts`, `packages/core/src/index.ts`, `packages/core/src/tools/index.ts`.
5. Verify behavior through test/eval files: `test/mcp-e2e.mjs`, `test/smoke.sh`, `test/test-indicators.sh`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 OKX trading MCP server — connect AI agents to spot, swap, futures, options & grid bots via the Model Context Protocol.. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, modelcontextprotocol, tests이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
