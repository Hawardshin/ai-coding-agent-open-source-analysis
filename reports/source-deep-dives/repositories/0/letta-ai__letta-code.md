# letta-ai/letta-code Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

The memory-first coding agent

## 요약

- 조사 단위: `sources/letta-ai__letta-code` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,321 files, 105 directories, depth score 125, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=src/skills/builtin/converting-mcps-to-skills/scripts/mcp-http.ts, src/skills/builtin/converting-mcps-to-skills/scripts/mcp-stdio.ts, src/mods/tool-registry.ts이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | letta-ai/letta-code |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 2743 |
| Forks | 307 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/letta-ai__letta-code](../../../../sources/letta-ai__letta-code) |
| Existing report | [reports/global-trending/repositories/letta-ai__letta-code.md](../../../global-trending/repositories/letta-ai__letta-code.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1321 / 105 |
| Max observed depth | 6 |
| Top directories | .cursor, .github, .husky, .skills, assets, bin, docs, hooks, nix, scripts, src |
| Top extensions | .ts: 981, .tsx: 111, .md: 106, .json: 52, .mdx: 14, .js: 11, .sh: 10, .yml: 10, (none): 6, .nix: 4, .py: 4, .txt: 4 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 162 |
| docs | documentation surface | 5 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| bin | top-level component | 1 |
| hooks | top-level component | 1 |
| nix | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | package.json | prepare | node .husky/install.mjs |
| quality | package.json | lint | bunx --bun @biomejs/biome@2.2.5 check src |
| quality | package.json | fix | bunx --bun @biomejs/biome@2.2.5 check --write src |
| quality | package.json | typecheck | tsc --noEmit |
| quality | package.json | check:cycles | madge --circular --extensions ts,tsx src/ |
| quality | package.json | check:boundaries | node scripts/check-layer-boundaries.js |
| quality | package.json | check:exported-functions | node scripts/check-exported-functions.js |
| quality | package.json | check:filename-casing | node scripts/check-filename-casing.js |
| test | package.json | check:test-mock-isolation | bun run scripts/check-test-mock-isolation.js |
| test | package.json | check:test-coverage | node scripts/check-test-coverage.cjs |
| build | package.json | check:bundled-skill-scripts | node scripts/check-bundled-skill-scripts.js |
| quality | package.json | check | bun run scripts/check.js |
| serve-dev | package.json | dev | LETTA_DEBUG=${LETTA_DEBUG:-1} LETTA_RESPONSES_WS=${LETTA_RESPONSES_WS:-1} bun --loader=.md:text --loader=.mdx:text --loader=.txt:text run src/index.ts |
| build | package.json | build | node scripts/postinstall-patches.js && bun run build.js |
| test | package.json | test:update-chain:manual | bun run src/test-utils/update-chain-smoke.ts --mode manual |
| test | package.json | test:update-chain:startup | bun run src/test-utils/update-chain-smoke.ts --mode startup |
| build | package.json | prepublishOnly | bun run build |
| build | package.json | postinstall | node scripts/postinstall-patches.js \|\| echo letta: vendor patches skipped && node -e "try{require('fs').chmodSync(require('path').join(require.resolve('node-pty/package.json'),'../prebuilds/darwin-arm64/spawn-helper'),0o |
| entrypoint | package.json bin | letta.js | letta.js |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | react |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [src/skills/builtin/converting-mcps-to-skills/scripts/mcp-http.ts](../../../../sources/letta-ai__letta-code/src/skills/builtin/converting-mcps-to-skills/scripts/mcp-http.ts) | mcp signal |
| mcp | [src/skills/builtin/converting-mcps-to-skills/scripts/mcp-stdio.ts](../../../../sources/letta-ai__letta-code/src/skills/builtin/converting-mcps-to-skills/scripts/mcp-stdio.ts) | mcp signal |
| mcp | [src/mods/tool-registry.ts](../../../../sources/letta-ai__letta-code/src/mods/tool-registry.ts) | mcp signal |
| mcp | [src/cli/helpers/mcp-oauth.ts](../../../../sources/letta-ai__letta-code/src/cli/helpers/mcp-oauth.ts) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/letta-ai__letta-code/AGENTS.md) | agentRuntime signal |
| agentRuntime | [src/websocket/listener/skill-injection.ts](../../../../sources/letta-ai__letta-code/src/websocket/listener/skill-injection.ts) | agentRuntime signal |
| agentRuntime | [src/websocket/listener/commands/agents-conversations.ts](../../../../sources/letta-ai__letta-code/src/websocket/listener/commands/agents-conversations.ts) | agentRuntime signal |
| agentRuntime | [src/websocket/listener/commands/memory.ts](../../../../sources/letta-ai__letta-code/src/websocket/listener/commands/memory.ts) | agentRuntime signal |
| entrypoints | [src/index.ts](../../../../sources/letta-ai__letta-code/src/index.ts) | entrypoints signal |
| entrypoints | [bin/letta.js](../../../../sources/letta-ai__letta-code/bin/letta.js) | entrypoints signal |
| config | [package.json](../../../../sources/letta-ai__letta-code/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/letta-ai__letta-code/tsconfig.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [src/index.ts](../../../../sources/letta-ai__letta-code/src/index.ts)<br>[bin/letta.js](../../../../sources/letta-ai__letta-code/bin/letta.js) |
| agentRuntime | 474 | [AGENTS.md](../../../../sources/letta-ai__letta-code/AGENTS.md)<br>[src/websocket/listener/skill-injection.ts](../../../../sources/letta-ai__letta-code/src/websocket/listener/skill-injection.ts)<br>[src/websocket/listener/commands/agents-conversations.ts](../../../../sources/letta-ai__letta-code/src/websocket/listener/commands/agents-conversations.ts)<br>[src/websocket/listener/commands/memory.ts](../../../../sources/letta-ai__letta-code/src/websocket/listener/commands/memory.ts)<br>[src/websocket/listener/commands/skills-agents.ts](../../../../sources/letta-ai__letta-code/src/websocket/listener/commands/skills-agents.ts)<br>[src/web/context-usage.test.ts](../../../../sources/letta-ai__letta-code/src/web/context-usage.test.ts)<br>[src/web/context-usage.ts](../../../../sources/letta-ai__letta-code/src/web/context-usage.ts)<br>[src/web/memory-viewer-template.txt](../../../../sources/letta-ai__letta-code/src/web/memory-viewer-template.txt) |
| mcp | 6 | [src/skills/builtin/converting-mcps-to-skills/scripts/mcp-http.ts](../../../../sources/letta-ai__letta-code/src/skills/builtin/converting-mcps-to-skills/scripts/mcp-http.ts)<br>[src/skills/builtin/converting-mcps-to-skills/scripts/mcp-stdio.ts](../../../../sources/letta-ai__letta-code/src/skills/builtin/converting-mcps-to-skills/scripts/mcp-stdio.ts)<br>[src/mods/tool-registry.ts](../../../../sources/letta-ai__letta-code/src/mods/tool-registry.ts)<br>[src/cli/helpers/mcp-oauth.ts](../../../../sources/letta-ai__letta-code/src/cli/helpers/mcp-oauth.ts)<br>[src/cli/components/mcp-selector.test.ts](../../../../sources/letta-ai__letta-code/src/cli/components/mcp-selector.test.ts)<br>[src/cli/commands/mcp.ts](../../../../sources/letta-ai__letta-code/src/cli/commands/mcp.ts) |
| retrieval | 60 | [src/index.ts](../../../../sources/letta-ai__letta-code/src/index.ts)<br>[src/websocket/listener/commands/memory.ts](../../../../sources/letta-ai__letta-code/src/websocket/listener/commands/memory.ts)<br>[src/web/generate-memory-viewer.ts](../../../../sources/letta-ai__letta-code/src/web/generate-memory-viewer.ts)<br>[src/web/local-memory-context.ts](../../../../sources/letta-ai__letta-code/src/web/local-memory-context.ts)<br>[src/web/memory-viewer-template.txt](../../../../sources/letta-ai__letta-code/src/web/memory-viewer-template.txt)<br>[src/tools/memory-apply-patch.test.ts](../../../../sources/letta-ai__letta-code/src/tools/memory-apply-patch.test.ts)<br>[src/tools/memory-tool.test.ts](../../../../sources/letta-ai__letta-code/src/tools/memory-tool.test.ts)<br>[src/tools/schemas/Memory.json](../../../../sources/letta-ai__letta-code/src/tools/schemas/Memory.json) |
| spec | 1 | [src/skills/builtin/creating-mods/references/architecture.md](../../../../sources/letta-ai__letta-code/src/skills/builtin/creating-mods/references/architecture.md) |
| eval | 432 | [src/app-server-client.test.ts](../../../../sources/letta-ai__letta-code/src/app-server-client.test.ts)<br>[src/backend-switch.test.ts](../../../../sources/letta-ai__letta-code/src/backend-switch.test.ts)<br>[src/dev-backend-smoke.test.ts](../../../../sources/letta-ai__letta-code/src/dev-backend-smoke.test.ts)<br>[src/discord-debounce.test.ts](../../../../sources/letta-ai__letta-code/src/discord-debounce.test.ts)<br>[src/goal-loop-mode.test.ts](../../../../sources/letta-ai__letta-code/src/goal-loop-mode.test.ts)<br>[src/headless-approval-recovery.test.ts](../../../../sources/letta-ai__letta-code/src/headless-approval-recovery.test.ts)<br>[src/headless-backend-lifecycle.test.ts](../../../../sources/letta-ai__letta-code/src/headless-backend-lifecycle.test.ts)<br>[src/headless-bidirectional-reflection.test.ts](../../../../sources/letta-ai__letta-code/src/headless-bidirectional-reflection.test.ts) |
| security | 31 | [src/websocket/listener-permission-mode.test.ts](../../../../sources/letta-ai__letta-code/src/websocket/listener-permission-mode.test.ts)<br>[src/websocket/listener/permission-mode.ts](../../../../sources/letta-ai__letta-code/src/websocket/listener/permission-mode.ts)<br>[src/tools/interactive-policy.ts](../../../../sources/letta-ai__letta-code/src/tools/interactive-policy.ts)<br>[src/tools/secret-substitution.test.ts](../../../../sources/letta-ai__letta-code/src/tools/secret-substitution.test.ts)<br>[src/tools/secret-substitution.ts](../../../../sources/letta-ai__letta-code/src/tools/secret-substitution.ts)<br>[src/telemetry/flush-auth.test.ts](../../../../sources/letta-ai__letta-code/src/telemetry/flush-auth.test.ts)<br>[src/skills/builtin/modifying-the-harness/scripts/add_permission.py](../../../../sources/letta-ai__letta-code/src/skills/builtin/modifying-the-harness/scripts/add_permission.py)<br>[src/reminders/permission-mode.test.ts](../../../../sources/letta-ai__letta-code/src/reminders/permission-mode.test.ts) |
| ci | 10 | [.github/workflows/ci.yml](../../../../sources/letta-ai__letta-code/.github/workflows/ci.yml)<br>[.github/workflows/codex-release-watch.yml](../../../../sources/letta-ai__letta-code/.github/workflows/codex-release-watch.yml)<br>[.github/workflows/letta.yml](../../../../sources/letta-ai__letta-code/.github/workflows/letta.yml)<br>[.github/workflows/nightly-update-smoke.yml](../../../../sources/letta-ai__letta-code/.github/workflows/nightly-update-smoke.yml)<br>[.github/workflows/pr-title.yml](../../../../sources/letta-ai__letta-code/.github/workflows/pr-title.yml)<br>[.github/workflows/prepare-release.yml](../../../../sources/letta-ai__letta-code/.github/workflows/prepare-release.yml)<br>[.github/workflows/release.yml](../../../../sources/letta-ai__letta-code/.github/workflows/release.yml)<br>[.github/workflows/review.yml](../../../../sources/letta-ai__letta-code/.github/workflows/review.yml) |
| container | 0 | not obvious |
| instruction | 1 | [AGENTS.md](../../../../sources/letta-ai__letta-code/AGENTS.md) |
| docs | 8 | [README.md](../../../../sources/letta-ai__letta-code/README.md)<br>[src/tools/README.md](../../../../sources/letta-ai__letta-code/src/tools/README.md)<br>[src/cli/app/README.md](../../../../sources/letta-ai__letta-code/src/cli/app/README.md)<br>[src/channels/README.md](../../../../sources/letta-ai__letta-code/src/channels/README.md)<br>[src/agent/prompts/README.md](../../../../sources/letta-ai__letta-code/src/agent/prompts/README.md)<br>[docs/nix.md](../../../../sources/letta-ai__letta-code/docs/nix.md)<br>[docs/plans/discord-channel-policy-consolidation.md](../../../../sources/letta-ai__letta-code/docs/plans/discord-channel-policy-consolidation.md)<br>[docs/plans/resume-tail-fast-path.md](../../../../sources/letta-ai__letta-code/docs/plans/resume-tail-fast-path.md) |
| config | 2 | [package.json](../../../../sources/letta-ai__letta-code/package.json)<br>[tsconfig.json](../../../../sources/letta-ai__letta-code/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 432 | [src/app-server-client.test.ts](../../../../sources/letta-ai__letta-code/src/app-server-client.test.ts)<br>[src/backend-switch.test.ts](../../../../sources/letta-ai__letta-code/src/backend-switch.test.ts)<br>[src/dev-backend-smoke.test.ts](../../../../sources/letta-ai__letta-code/src/dev-backend-smoke.test.ts)<br>[src/discord-debounce.test.ts](../../../../sources/letta-ai__letta-code/src/discord-debounce.test.ts)<br>[src/goal-loop-mode.test.ts](../../../../sources/letta-ai__letta-code/src/goal-loop-mode.test.ts)<br>[src/headless-approval-recovery.test.ts](../../../../sources/letta-ai__letta-code/src/headless-approval-recovery.test.ts) |
| CI workflows | 10 | [.github/workflows/ci.yml](../../../../sources/letta-ai__letta-code/.github/workflows/ci.yml)<br>[.github/workflows/codex-release-watch.yml](../../../../sources/letta-ai__letta-code/.github/workflows/codex-release-watch.yml)<br>[.github/workflows/letta.yml](../../../../sources/letta-ai__letta-code/.github/workflows/letta.yml)<br>[.github/workflows/nightly-update-smoke.yml](../../../../sources/letta-ai__letta-code/.github/workflows/nightly-update-smoke.yml)<br>[.github/workflows/pr-title.yml](../../../../sources/letta-ai__letta-code/.github/workflows/pr-title.yml)<br>[.github/workflows/prepare-release.yml](../../../../sources/letta-ai__letta-code/.github/workflows/prepare-release.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 31 | [src/websocket/listener-permission-mode.test.ts](../../../../sources/letta-ai__letta-code/src/websocket/listener-permission-mode.test.ts)<br>[src/websocket/listener/permission-mode.ts](../../../../sources/letta-ai__letta-code/src/websocket/listener/permission-mode.ts)<br>[src/tools/interactive-policy.ts](../../../../sources/letta-ai__letta-code/src/tools/interactive-policy.ts)<br>[src/tools/secret-substitution.test.ts](../../../../sources/letta-ai__letta-code/src/tools/secret-substitution.test.ts)<br>[src/tools/secret-substitution.ts](../../../../sources/letta-ai__letta-code/src/tools/secret-substitution.ts)<br>[src/telemetry/flush-auth.test.ts](../../../../sources/letta-ai__letta-code/src/telemetry/flush-auth.test.ts) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/letta-ai__letta-code/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/skills/builtin/converting-mcps-to-skills/scripts/mcp-http.ts`, `src/skills/builtin/converting-mcps-to-skills/scripts/mcp-stdio.ts`, `src/mods/tool-registry.ts`.
2. Trace execution through entrypoints: `src/index.ts`, `bin/letta.js`.
3. Map agent/tool runtime through: `AGENTS.md`, `src/websocket/listener/skill-injection.ts`, `src/websocket/listener/commands/agents-conversations.ts`.
4. Inspect retrieval/memory/indexing through: `src/index.ts`, `src/websocket/listener/commands/memory.ts`, `src/web/generate-memory-viewer.ts`.
5. Verify behavior through test/eval files: `src/app-server-client.test.ts`, `src/backend-switch.test.ts`, `src/dev-backend-smoke.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 The memory first coding agent. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, LICENSE, react이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
