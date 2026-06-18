# madappgang/claudish Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local clone structure analysis: 354 files, 64 directories.

## 요약

- 조사 단위: `sources/MadAppGang__claudish` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 354 files, 64 directories, depth score 129, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

평가/관측/품질 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 eval=test-mcp-e2e.ts, packages/macos-bridge/src/bridge.test.ts, packages/macos-bridge/scripts/full-test.js이고, 의존성 단서는 modelcontextprotocol, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 quality and evaluation comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | madappgang/claudish |
| Topic | Evals, Observability, and Quality / 평가/관측/품질 |
| Region | mixed |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/MadAppGang__claudish](../../../../sources/MadAppGang__claudish) |
| Existing report | [reports/clone-structures/madappgang__claudish.md](../../../clone-structures/madappgang__claudish.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 354 / 64 |
| Max observed depth | 7 |
| Top directories | .claude, .github, apps, design-references, docs, experiments, packages, scripts, skills |
| Top extensions | .ts: 225, .md: 42, .swift: 16, .json: 14, .tsx: 14, (none): 12, .sse: 9, .yml: 5, .ndjson: 4, .sh: 4, .cjs: 2, .js: 2 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/cli | packages workspace | 61 |
| docs | documentation surface | 24 |
| packages/macos-bridge | packages workspace | 14 |
| packages/magmux-darwin-arm64 | packages workspace | 2 |
| packages/magmux-darwin-x64 | packages workspace | 2 |
| packages/magmux-linux-arm64 | packages workspace | 2 |
| packages/magmux-linux-x64 | packages workspace | 2 |
| .github | ci surface | 1 |
| apps | source boundary | 1 |
| design-references | top-level component | 1 |
| experiments | top-level component | 1 |
| packages | source boundary | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | package.json | dev | cd packages/cli && exec bun run src/index.ts |
| serve-dev | package.json | dev:mcp | bun run --cwd packages/cli dev:mcp |
| serve-dev | package.json | dev:grok | bun run --cwd packages/cli dev:grok |
| serve-dev | package.json | dev:grok:debug | bun run --cwd packages/cli dev:grok:debug |
| serve-dev | package.json | dev:info | bun run --cwd packages/cli dev:info |
| serve-dev | package.json | dev:bridge | bun --cwd packages/macos-bridge run dev |
| build | package.json | build | bun run build:cli && bun run build:bridge |
| build | package.json | build:cli | cd packages/cli && bun run build |
| build | package.json | build:bridge | cd packages/macos-bridge && bun run build |
| quality | package.json | typecheck | bun run --cwd packages/cli typecheck && bun --cwd packages/macos-bridge run typecheck |
| quality | package.json | lint | bun run --cwd packages/cli lint && bun --cwd packages/macos-bridge run lint |
| quality | package.json | format | bun run --cwd packages/cli format && bun --cwd packages/macos-bridge run format |
| test | package.json | test | bun run --cwd packages/cli test && bun --cwd packages/macos-bridge run test |
| build | package.json | clean | rm -rf packages/*/dist packages/*/node_modules node_modules |
| utility | package.json | postinstall | node scripts/postinstall.cjs |


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
| eval | [test-mcp-e2e.ts](../../../../sources/MadAppGang__claudish/test-mcp-e2e.ts) | eval signal |
| eval | [packages/macos-bridge/src/bridge.test.ts](../../../../sources/MadAppGang__claudish/packages/macos-bridge/src/bridge.test.ts) | eval signal |
| eval | [packages/macos-bridge/scripts/full-test.js](../../../../sources/MadAppGang__claudish/packages/macos-bridge/scripts/full-test.js) | eval signal |
| eval | [packages/macos-bridge/scripts/simple-test.js](../../../../sources/MadAppGang__claudish/packages/macos-bridge/scripts/simple-test.js) | eval signal |
| entrypoints | [packages/magmux-linux-x64/bin/.gitkeep](../../../../sources/MadAppGang__claudish/packages/magmux-linux-x64/bin/.gitkeep) | entrypoints signal |
| entrypoints | [packages/magmux-linux-arm64/bin/.gitkeep](../../../../sources/MadAppGang__claudish/packages/magmux-linux-arm64/bin/.gitkeep) | entrypoints signal |
| entrypoints | [packages/magmux-darwin-x64/bin/.gitkeep](../../../../sources/MadAppGang__claudish/packages/magmux-darwin-x64/bin/.gitkeep) | entrypoints signal |
| entrypoints | [packages/magmux-darwin-arm64/bin/.gitkeep](../../../../sources/MadAppGang__claudish/packages/magmux-darwin-arm64/bin/.gitkeep) | entrypoints signal |
| config | [package.json](../../../../sources/MadAppGang__claudish/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/MadAppGang__claudish/tsconfig.json) | config signal |
| config | [packages/magmux-linux-x64/package.json](../../../../sources/MadAppGang__claudish/packages/magmux-linux-x64/package.json) | config signal |
| config | [packages/magmux-linux-arm64/package.json](../../../../sources/MadAppGang__claudish/packages/magmux-linux-arm64/package.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 10 | [packages/magmux-linux-x64/bin/.gitkeep](../../../../sources/MadAppGang__claudish/packages/magmux-linux-x64/bin/.gitkeep)<br>[packages/magmux-linux-arm64/bin/.gitkeep](../../../../sources/MadAppGang__claudish/packages/magmux-linux-arm64/bin/.gitkeep)<br>[packages/magmux-darwin-x64/bin/.gitkeep](../../../../sources/MadAppGang__claudish/packages/magmux-darwin-x64/bin/.gitkeep)<br>[packages/magmux-darwin-arm64/bin/.gitkeep](../../../../sources/MadAppGang__claudish/packages/magmux-darwin-arm64/bin/.gitkeep)<br>[packages/macos-bridge/src/index.ts](../../../../sources/MadAppGang__claudish/packages/macos-bridge/src/index.ts)<br>[packages/macos-bridge/src/server.ts](../../../../sources/MadAppGang__claudish/packages/macos-bridge/src/server.ts)<br>[packages/cli/src/cli.test.ts](../../../../sources/MadAppGang__claudish/packages/cli/src/cli.test.ts)<br>[packages/cli/src/cli.ts](../../../../sources/MadAppGang__claudish/packages/cli/src/cli.ts) |
| agentRuntime | 31 | [skills/claudish-usage/SKILL.md](../../../../sources/MadAppGang__claudish/skills/claudish-usage/SKILL.md)<br>[packages/cli/src/tui/hooks/useProfileWizard.ts](../../../../sources/MadAppGang__claudish/packages/cli/src/tui/hooks/useProfileWizard.ts)<br>[packages/cli/src/tui/hooks/useRouteProbe.ts](../../../../sources/MadAppGang__claudish/packages/cli/src/tui/hooks/useRouteProbe.ts)<br>[packages/cli/src/handlers/shared/tool-call-recovery.ts](../../../../sources/MadAppGang__claudish/packages/cli/src/handlers/shared/tool-call-recovery.ts)<br>[packages/cli/src/adapters/tool-name-utils.ts](../../../../sources/MadAppGang__claudish/packages/cli/src/adapters/tool-name-utils.ts)<br>[packages/cli/skills/claudish-usage/SKILL.md](../../../../sources/MadAppGang__claudish/packages/cli/skills/claudish-usage/SKILL.md)<br>[experiments/tool-replacement-proxy-2026-04/README.md](../../../../sources/MadAppGang__claudish/experiments/tool-replacement-proxy-2026-04/README.md)<br>[experiments/tool-replacement-proxy-2026-04/research/01-advisor-pattern-research.md](../../../../sources/MadAppGang__claudish/experiments/tool-replacement-proxy-2026-04/research/01-advisor-pattern-research.md) |
| mcp | 4 | [test-mcp-e2e.ts](../../../../sources/MadAppGang__claudish/test-mcp-e2e.ts)<br>[packages/cli/src/mcp-server.test.ts](../../../../sources/MadAppGang__claudish/packages/cli/src/mcp-server.test.ts)<br>[packages/cli/src/mcp-server.ts](../../../../sources/MadAppGang__claudish/packages/cli/src/mcp-server.ts)<br>[docs/usage/mcp-server.md](../../../../sources/MadAppGang__claudish/docs/usage/mcp-server.md) |
| retrieval | 10 | [packages/macos-bridge/src/index.ts](../../../../sources/MadAppGang__claudish/packages/macos-bridge/src/index.ts)<br>[packages/cli/src/index.ts](../../../../sources/MadAppGang__claudish/packages/cli/src/index.ts)<br>[packages/cli/src/tui/index.tsx](../../../../sources/MadAppGang__claudish/packages/cli/src/tui/index.tsx)<br>[packages/cli/src/providers/index.ts](../../../../sources/MadAppGang__claudish/packages/cli/src/providers/index.ts)<br>[packages/cli/src/middleware/index.ts](../../../../sources/MadAppGang__claudish/packages/cli/src/middleware/index.ts)<br>[packages/cli/src/handlers/shared/stream-parsers/index.ts](../../../../sources/MadAppGang__claudish/packages/cli/src/handlers/shared/stream-parsers/index.ts)<br>[packages/cli/src/channel/index.ts](../../../../sources/MadAppGang__claudish/packages/cli/src/channel/index.ts)<br>[packages/cli/src/adapters/index.ts](../../../../sources/MadAppGang__claudish/packages/cli/src/adapters/index.ts) |
| spec | 6 | [ROADMAP.md](../../../../sources/MadAppGang__claudish/ROADMAP.md)<br>[experiments/tool-replacement-proxy-2026-04/research/02-proxy-replacement-architecture.md](../../../../sources/MadAppGang__claudish/experiments/tool-replacement-proxy-2026-04/research/02-proxy-replacement-architecture.md)<br>[docs/api-key-architecture.md](../../../../sources/MadAppGang__claudish/docs/api-key-architecture.md)<br>[docs/three-layer-architecture.md](../../../../sources/MadAppGang__claudish/docs/three-layer-architecture.md)<br>[design-references/stat_panel.jpeg](../../../../sources/MadAppGang__claudish/design-references/stat_panel.jpeg)<br>[design-references/stats-panel-style.md](../../../../sources/MadAppGang__claudish/design-references/stats-panel-style.md) |
| eval | 73 | [test-mcp-e2e.ts](../../../../sources/MadAppGang__claudish/test-mcp-e2e.ts)<br>[packages/macos-bridge/src/bridge.test.ts](../../../../sources/MadAppGang__claudish/packages/macos-bridge/src/bridge.test.ts)<br>[packages/macos-bridge/scripts/full-test.js](../../../../sources/MadAppGang__claudish/packages/macos-bridge/scripts/full-test.js)<br>[packages/macos-bridge/scripts/simple-test.js](../../../../sources/MadAppGang__claudish/packages/macos-bridge/scripts/simple-test.js)<br>[packages/macos-bridge/scripts/test-claude-desktop.sh](../../../../sources/MadAppGang__claudish/packages/macos-bridge/scripts/test-claude-desktop.sh)<br>[packages/macos-bridge/scripts/test-cycletls.ts](../../../../sources/MadAppGang__claudish/packages/macos-bridge/scripts/test-cycletls.ts)<br>[packages/macos-bridge/scripts/test-full-interception.sh](../../../../sources/MadAppGang__claudish/packages/macos-bridge/scripts/test-full-interception.sh)<br>[packages/macos-bridge/scripts/test-proxy.sh](../../../../sources/MadAppGang__claudish/packages/macos-bridge/scripts/test-proxy.sh) |
| security | 10 | [packages/macos-bridge/src/auth.ts](../../../../sources/MadAppGang__claudish/packages/macos-bridge/src/auth.ts)<br>[packages/cli/src/providers/transport/vertex-oauth.ts](../../../../sources/MadAppGang__claudish/packages/cli/src/providers/transport/vertex-oauth.ts)<br>[packages/cli/src/auth/auth-commands.ts](../../../../sources/MadAppGang__claudish/packages/cli/src/auth/auth-commands.ts)<br>[packages/cli/src/auth/codex-oauth.ts](../../../../sources/MadAppGang__claudish/packages/cli/src/auth/codex-oauth.ts)<br>[packages/cli/src/auth/gemini-oauth.ts](../../../../sources/MadAppGang__claudish/packages/cli/src/auth/gemini-oauth.ts)<br>[packages/cli/src/auth/kimi-oauth.ts](../../../../sources/MadAppGang__claudish/packages/cli/src/auth/kimi-oauth.ts)<br>[packages/cli/src/auth/oauth-manager.ts](../../../../sources/MadAppGang__claudish/packages/cli/src/auth/oauth-manager.ts)<br>[packages/cli/src/auth/oauth-registry.ts](../../../../sources/MadAppGang__claudish/packages/cli/src/auth/oauth-registry.ts) |
| ci | 4 | [.github/workflows/claude-code.yml](../../../../sources/MadAppGang__claudish/.github/workflows/claude-code.yml)<br>[.github/workflows/issue-triage.yml](../../../../sources/MadAppGang__claudish/.github/workflows/issue-triage.yml)<br>[.github/workflows/release.yml](../../../../sources/MadAppGang__claudish/.github/workflows/release.yml)<br>[.github/workflows/smoke-test.yml](../../../../sources/MadAppGang__claudish/.github/workflows/smoke-test.yml) |
| container | 0 | not obvious |
| instruction | 1 | [CLAUDE.md](../../../../sources/MadAppGang__claudish/CLAUDE.md) |
| docs | 23 | [README.md](../../../../sources/MadAppGang__claudish/README.md)<br>[packages/macos-bridge/docs/PROXY_TRAFFIC_FLOW.md](../../../../sources/MadAppGang__claudish/packages/macos-bridge/docs/PROXY_TRAFFIC_FLOW.md)<br>[experiments/tool-replacement-proxy-2026-04/README.md](../../../../sources/MadAppGang__claudish/experiments/tool-replacement-proxy-2026-04/README.md)<br>[experiments/tool-replacement-proxy-2026-04/poc/README.md](../../../../sources/MadAppGang__claudish/experiments/tool-replacement-proxy-2026-04/poc/README.md)<br>[docs/api-key-architecture.md](../../../../sources/MadAppGang__claudish/docs/api-key-architecture.md)<br>[docs/index.md](../../../../sources/MadAppGang__claudish/docs/index.md)<br>[docs/serve-gateway.md](../../../../sources/MadAppGang__claudish/docs/serve-gateway.md)<br>[docs/settings-reference.md](../../../../sources/MadAppGang__claudish/docs/settings-reference.md) |
| config | 10 | [package.json](../../../../sources/MadAppGang__claudish/package.json)<br>[tsconfig.json](../../../../sources/MadAppGang__claudish/tsconfig.json)<br>[packages/magmux-linux-x64/package.json](../../../../sources/MadAppGang__claudish/packages/magmux-linux-x64/package.json)<br>[packages/magmux-linux-arm64/package.json](../../../../sources/MadAppGang__claudish/packages/magmux-linux-arm64/package.json)<br>[packages/magmux-darwin-x64/package.json](../../../../sources/MadAppGang__claudish/packages/magmux-darwin-x64/package.json)<br>[packages/magmux-darwin-arm64/package.json](../../../../sources/MadAppGang__claudish/packages/magmux-darwin-arm64/package.json)<br>[packages/macos-bridge/package.json](../../../../sources/MadAppGang__claudish/packages/macos-bridge/package.json)<br>[packages/macos-bridge/tsconfig.json](../../../../sources/MadAppGang__claudish/packages/macos-bridge/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 73 | [test-mcp-e2e.ts](../../../../sources/MadAppGang__claudish/test-mcp-e2e.ts)<br>[packages/macos-bridge/src/bridge.test.ts](../../../../sources/MadAppGang__claudish/packages/macos-bridge/src/bridge.test.ts)<br>[packages/macos-bridge/scripts/full-test.js](../../../../sources/MadAppGang__claudish/packages/macos-bridge/scripts/full-test.js)<br>[packages/macos-bridge/scripts/simple-test.js](../../../../sources/MadAppGang__claudish/packages/macos-bridge/scripts/simple-test.js)<br>[packages/macos-bridge/scripts/test-claude-desktop.sh](../../../../sources/MadAppGang__claudish/packages/macos-bridge/scripts/test-claude-desktop.sh)<br>[packages/macos-bridge/scripts/test-cycletls.ts](../../../../sources/MadAppGang__claudish/packages/macos-bridge/scripts/test-cycletls.ts) |
| CI workflows | 4 | [.github/workflows/claude-code.yml](../../../../sources/MadAppGang__claudish/.github/workflows/claude-code.yml)<br>[.github/workflows/issue-triage.yml](../../../../sources/MadAppGang__claudish/.github/workflows/issue-triage.yml)<br>[.github/workflows/release.yml](../../../../sources/MadAppGang__claudish/.github/workflows/release.yml)<br>[.github/workflows/smoke-test.yml](../../../../sources/MadAppGang__claudish/.github/workflows/smoke-test.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 10 | [packages/macos-bridge/src/auth.ts](../../../../sources/MadAppGang__claudish/packages/macos-bridge/src/auth.ts)<br>[packages/cli/src/providers/transport/vertex-oauth.ts](../../../../sources/MadAppGang__claudish/packages/cli/src/providers/transport/vertex-oauth.ts)<br>[packages/cli/src/auth/auth-commands.ts](../../../../sources/MadAppGang__claudish/packages/cli/src/auth/auth-commands.ts)<br>[packages/cli/src/auth/codex-oauth.ts](../../../../sources/MadAppGang__claudish/packages/cli/src/auth/codex-oauth.ts)<br>[packages/cli/src/auth/gemini-oauth.ts](../../../../sources/MadAppGang__claudish/packages/cli/src/auth/gemini-oauth.ts)<br>[packages/cli/src/auth/kimi-oauth.ts](../../../../sources/MadAppGang__claudish/packages/cli/src/auth/kimi-oauth.ts) |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/MadAppGang__claudish/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `test-mcp-e2e.ts`, `packages/macos-bridge/src/bridge.test.ts`, `packages/macos-bridge/scripts/full-test.js`.
2. Trace execution through entrypoints: `packages/magmux-linux-x64/bin/.gitkeep`, `packages/magmux-linux-arm64/bin/.gitkeep`, `packages/magmux-darwin-x64/bin/.gitkeep`.
3. Map agent/tool runtime through: `skills/claudish-usage/SKILL.md`, `packages/cli/src/tui/hooks/useProfileWizard.ts`, `packages/cli/src/tui/hooks/useRouteProbe.ts`.
4. Inspect retrieval/memory/indexing through: `packages/macos-bridge/src/index.ts`, `packages/cli/src/index.ts`, `packages/cli/src/tui/index.tsx`.
5. Verify behavior through test/eval files: `test-mcp-e2e.ts`, `packages/macos-bridge/src/bridge.test.ts`, `packages/macos-bridge/scripts/full-test.js`.

## Existing Repository Insight

평가/관측/품질 관점에서 Local clone structure analysis 354 files, 64 directories.. 핵심 구조 신호는 package.json, README.md, CLAUDE.md, modelcontextprotocol, tests, ci이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 평가/관측/품질 레포입니다. 활용 관점은 quality and evaluation comparison point이고, 후속 확인 포인트는 license metadata missing입니다.
