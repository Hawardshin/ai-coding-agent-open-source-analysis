# spences10/mcpick Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Claude Code extension manager — MCP servers, plugins (skills, hooks, agents), and marketplaces

## 요약

- 조사 단위: `sources/spences10__mcpick` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 81 files, 12 directories, depth score 107, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=docs/adr/0001-vendor-neutral-mcp-core.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | spences10/mcpick |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 85 |
| Forks | 12 |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/spences10__mcpick](../../../../sources/spences10__mcpick) |
| Existing report | [reports/global-trending/repositories/spences10__mcpick.md](../../../global-trending/repositories/spences10__mcpick.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 81 / 12 |
| Max observed depth | 4 |
| Top directories | .changeset, .github, .zed, docs, src |
| Top extensions | .ts: 63, .md: 7, .json: 5, (none): 3, .yaml: 2, .yml: 1 |
| Source patterns | monorepo/workspace, cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 23 |
| docs | documentation surface | 6 |
| .github | ci surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | vp pack |
| serve-dev | package.json | dev | vp pack --watch |
| serve-dev | package.json | start | node ./dist/index.js |
| quality | package.json | check | vp check |
| quality | package.json | format | vp check --fix |
| test | package.json | test | vp test |
| utility | package.json | changeset | changeset |
| utility | package.json | version | changeset version |
| build | package.json | release | pnpm run build && changeset publish |
| entrypoint | package.json bin | index.js | ./dist/index.js |


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
| mcp | [docs/adr/0001-vendor-neutral-mcp-core.md](../../../../sources/spences10__mcpick/docs/adr/0001-vendor-neutral-mcp-core.md) | mcp signal |
| agentRuntime | [CONTEXT.md](../../../../sources/spences10__mcpick/CONTEXT.md) | agentRuntime signal |
| agentRuntime | [src/utils/skills-cli.ts](../../../../sources/spences10__mcpick/src/utils/skills-cli.ts) | agentRuntime signal |
| agentRuntime | [src/core/hook-state.ts](../../../../sources/spences10__mcpick/src/core/hook-state.ts) | agentRuntime signal |
| agentRuntime | [src/cli/commands/hooks.ts](../../../../sources/spences10__mcpick/src/cli/commands/hooks.ts) | agentRuntime signal |
| entrypoints | [src/index.test.ts](../../../../sources/spences10__mcpick/src/index.test.ts) | entrypoints signal |
| entrypoints | [src/index.ts](../../../../sources/spences10__mcpick/src/index.ts) | entrypoints signal |
| instruction | [.github/copilot-instructions.md](../../../../sources/spences10__mcpick/.github/copilot-instructions.md) | instruction signal |
| config | [package.json](../../../../sources/spences10__mcpick/package.json) | config signal |
| config | [pnpm-workspace.yaml](../../../../sources/spences10__mcpick/pnpm-workspace.yaml) | config signal |
| config | [tsconfig.json](../../../../sources/spences10__mcpick/tsconfig.json) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/spences10__mcpick/.github/workflows/ci.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [src/index.test.ts](../../../../sources/spences10__mcpick/src/index.test.ts)<br>[src/index.ts](../../../../sources/spences10__mcpick/src/index.ts) |
| agentRuntime | 5 | [CONTEXT.md](../../../../sources/spences10__mcpick/CONTEXT.md)<br>[src/utils/skills-cli.ts](../../../../sources/spences10__mcpick/src/utils/skills-cli.ts)<br>[src/core/hook-state.ts](../../../../sources/spences10__mcpick/src/core/hook-state.ts)<br>[src/cli/commands/hooks.ts](../../../../sources/spences10__mcpick/src/cli/commands/hooks.ts)<br>[src/cli/commands/skills.ts](../../../../sources/spences10__mcpick/src/cli/commands/skills.ts) |
| mcp | 1 | [docs/adr/0001-vendor-neutral-mcp-core.md](../../../../sources/spences10__mcpick/docs/adr/0001-vendor-neutral-mcp-core.md) |
| retrieval | 3 | [src/index.test.ts](../../../../sources/spences10__mcpick/src/index.test.ts)<br>[src/index.ts](../../../../sources/spences10__mcpick/src/index.ts)<br>[src/cli/index.ts](../../../../sources/spences10__mcpick/src/cli/index.ts) |
| spec | 2 | [docs/VENDOR_NEUTRAL_ARCHITECTURE.md](../../../../sources/spences10__mcpick/docs/VENDOR_NEUTRAL_ARCHITECTURE.md)<br>[docs/adr/0001-vendor-neutral-mcp-core.md](../../../../sources/spences10__mcpick/docs/adr/0001-vendor-neutral-mcp-core.md) |
| eval | 13 | [src/index.test.ts](../../../../sources/spences10__mcpick/src/index.test.ts)<br>[src/utils/claude-cli.test.ts](../../../../sources/spences10__mcpick/src/utils/claude-cli.test.ts)<br>[src/utils/paths.test.ts](../../../../sources/spences10__mcpick/src/utils/paths.test.ts)<br>[src/utils/redact.test.ts](../../../../sources/spences10__mcpick/src/utils/redact.test.ts)<br>[src/utils/safe-apply.test.ts](../../../../sources/spences10__mcpick/src/utils/safe-apply.test.ts)<br>[src/core/client-config.test.ts](../../../../sources/spences10__mcpick/src/core/client-config.test.ts)<br>[src/core/config.test.ts](../../../../sources/spences10__mcpick/src/core/config.test.ts)<br>[src/core/plugin-cache.test.ts](../../../../sources/spences10__mcpick/src/core/plugin-cache.test.ts) |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/ci.yml](../../../../sources/spences10__mcpick/.github/workflows/ci.yml) |
| container | 0 | not obvious |
| instruction | 1 | [.github/copilot-instructions.md](../../../../sources/spences10__mcpick/.github/copilot-instructions.md) |
| docs | 4 | [README.md](../../../../sources/spences10__mcpick/README.md)<br>[docs/VENDOR_NEUTRAL_ARCHITECTURE.md](../../../../sources/spences10__mcpick/docs/VENDOR_NEUTRAL_ARCHITECTURE.md)<br>[docs/adr/0001-vendor-neutral-mcp-core.md](../../../../sources/spences10__mcpick/docs/adr/0001-vendor-neutral-mcp-core.md)<br>[.changeset/README.md](../../../../sources/spences10__mcpick/.changeset/README.md) |
| config | 3 | [package.json](../../../../sources/spences10__mcpick/package.json)<br>[pnpm-workspace.yaml](../../../../sources/spences10__mcpick/pnpm-workspace.yaml)<br>[tsconfig.json](../../../../sources/spences10__mcpick/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 13 | [src/index.test.ts](../../../../sources/spences10__mcpick/src/index.test.ts)<br>[src/utils/claude-cli.test.ts](../../../../sources/spences10__mcpick/src/utils/claude-cli.test.ts)<br>[src/utils/paths.test.ts](../../../../sources/spences10__mcpick/src/utils/paths.test.ts)<br>[src/utils/redact.test.ts](../../../../sources/spences10__mcpick/src/utils/redact.test.ts)<br>[src/utils/safe-apply.test.ts](../../../../sources/spences10__mcpick/src/utils/safe-apply.test.ts)<br>[src/core/client-config.test.ts](../../../../sources/spences10__mcpick/src/core/client-config.test.ts) |
| CI workflows | 1 | [.github/workflows/ci.yml](../../../../sources/spences10__mcpick/.github/workflows/ci.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 1 | [.github/copilot-instructions.md](../../../../sources/spences10__mcpick/.github/copilot-instructions.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `docs/adr/0001-vendor-neutral-mcp-core.md`, `CONTEXT.md`, `src/utils/skills-cli.ts`.
2. Trace execution through entrypoints: `src/index.test.ts`, `src/index.ts`.
3. Map agent/tool runtime through: `CONTEXT.md`, `src/utils/skills-cli.ts`, `src/core/hook-state.ts`.
4. Inspect retrieval/memory/indexing through: `src/index.test.ts`, `src/index.ts`, `src/cli/index.ts`.
5. Verify behavior through test/eval files: `src/index.test.ts`, `src/utils/claude-cli.test.ts`, `src/utils/paths.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Claude Code extension manager — MCP servers, plugins skills, hooks, agents , and marketplaces. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
