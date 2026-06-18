# nanocoai/nanoclaw Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

A lightweight alternative to OpenClaw that runs in containers for security. Connects to WhatsApp, Telegram, Slack, Discord, Gmail and other messaging apps,, has memory, scheduled jobs, and runs directly on Anthropic's Agents SDK

## 요약

- 조사 단위: `sources/nanocoai__nanoclaw` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 560 files, 116 directories, depth score 129, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=.mcp.json, container/agent-runner/src/mcp-tools/agents.instructions.md, container/agent-runner/src/mcp-tools/agents.ts이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | nanocoai/nanoclaw |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 29904 |
| Forks | 12880 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/nanocoai__nanoclaw](../../../../sources/nanocoai__nanoclaw) |
| Existing report | [reports/global-trending/repositories/nanocoai__nanoclaw.md](../../../global-trending/repositories/nanocoai__nanoclaw.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 560 / 116 |
| Max observed depth | 6 |
| Top directories | .claude, .github, .husky, assets, bin, config-examples, container, docs, groups, launchd, repo-tokens, scripts, setup, src |
| Top extensions | .ts: 323, .md: 151, .sh: 40, (none): 10, .json: 9, .png: 5, .svg: 5, .yml: 5, .lock: 2, .yaml: 2, .example: 1, .html: 1 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 71 |
| docs | documentation surface | 39 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| bin | top-level component | 1 |
| config-examples | top-level component | 1 |
| container | top-level component | 1 |
| groups | top-level component | 1 |
| launchd | top-level component | 1 |
| repo-tokens | top-level component | 1 |
| scripts | top-level component | 1 |
| setup | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | tsc |
| serve-dev | package.json | start | node dist/index.js |
| serve-dev | package.json | dev | tsx src/index.ts |
| quality | package.json | typecheck | tsc --noEmit |
| quality | package.json | format | prettier --write "src/**/*.ts" |
| quality | package.json | format:fix | prettier --write "src/**/*.ts" |
| quality | package.json | format:check | prettier --check "src/**/*.ts" |
| utility | package.json | prepare | husky |
| utility | package.json | setup | tsx setup/index.ts |
| utility | package.json | setup:auto | tsx setup/auto.ts |
| utility | package.json | ncl | tsx src/cli/client.ts |
| utility | package.json | chat | tsx scripts/chat.ts |
| utility | package.json | auth | tsx src/whatsapp-auth.ts |
| quality | package.json | lint | eslint src/ |
| quality | package.json | lint:fix | eslint src/ --fix |
| test | package.json | test | vitest run |
| test | package.json | test:watch | vitest |
| entrypoint | package.json bin | ncl | bin/ncl |


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
| mcp | [.mcp.json](../../../../sources/nanocoai__nanoclaw/.mcp.json) | mcp signal |
| mcp | [container/agent-runner/src/mcp-tools/agents.instructions.md](../../../../sources/nanocoai__nanoclaw/container/agent-runner/src/mcp-tools/agents.instructions.md) | mcp signal |
| mcp | [container/agent-runner/src/mcp-tools/agents.ts](../../../../sources/nanocoai__nanoclaw/container/agent-runner/src/mcp-tools/agents.ts) | mcp signal |
| mcp | [container/agent-runner/src/mcp-tools/cli.instructions.md](../../../../sources/nanocoai__nanoclaw/container/agent-runner/src/mcp-tools/cli.instructions.md) | mcp signal |
| agentRuntime | [src/modules/self-mod/agent.md](../../../../sources/nanocoai__nanoclaw/src/modules/self-mod/agent.md) | agentRuntime signal |
| agentRuntime | [src/modules/permissions/db/agent-group-members.ts](../../../../sources/nanocoai__nanoclaw/src/modules/permissions/db/agent-group-members.ts) | agentRuntime signal |
| agentRuntime | [src/modules/interactive/agent.md](../../../../sources/nanocoai__nanoclaw/src/modules/interactive/agent.md) | agentRuntime signal |
| agentRuntime | [src/modules/approvals/agent.md](../../../../sources/nanocoai__nanoclaw/src/modules/approvals/agent.md) | agentRuntime signal |
| entrypoints | [src/index.ts](../../../../sources/nanocoai__nanoclaw/src/index.ts) | entrypoints signal |
| entrypoints | [container/agent-runner/src/index.ts](../../../../sources/nanocoai__nanoclaw/container/agent-runner/src/index.ts) | entrypoints signal |
| entrypoints | [container/agent-runner/src/mcp-tools/server.ts](../../../../sources/nanocoai__nanoclaw/container/agent-runner/src/mcp-tools/server.ts) | entrypoints signal |
| entrypoints | [bin/ncl](../../../../sources/nanocoai__nanoclaw/bin/ncl) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 4 | [src/index.ts](../../../../sources/nanocoai__nanoclaw/src/index.ts)<br>[container/agent-runner/src/index.ts](../../../../sources/nanocoai__nanoclaw/container/agent-runner/src/index.ts)<br>[container/agent-runner/src/mcp-tools/server.ts](../../../../sources/nanocoai__nanoclaw/container/agent-runner/src/mcp-tools/server.ts)<br>[bin/ncl](../../../../sources/nanocoai__nanoclaw/bin/ncl) |
| agentRuntime | 198 | [src/modules/self-mod/agent.md](../../../../sources/nanocoai__nanoclaw/src/modules/self-mod/agent.md)<br>[src/modules/permissions/db/agent-group-members.ts](../../../../sources/nanocoai__nanoclaw/src/modules/permissions/db/agent-group-members.ts)<br>[src/modules/interactive/agent.md](../../../../sources/nanocoai__nanoclaw/src/modules/interactive/agent.md)<br>[src/modules/approvals/agent.md](../../../../sources/nanocoai__nanoclaw/src/modules/approvals/agent.md)<br>[src/modules/agent-to-agent/agent-route.test.ts](../../../../sources/nanocoai__nanoclaw/src/modules/agent-to-agent/agent-route.test.ts)<br>[src/modules/agent-to-agent/agent-route.ts](../../../../sources/nanocoai__nanoclaw/src/modules/agent-to-agent/agent-route.ts)<br>[src/modules/agent-to-agent/create-agent.test.ts](../../../../sources/nanocoai__nanoclaw/src/modules/agent-to-agent/create-agent.test.ts)<br>[src/modules/agent-to-agent/create-agent.ts](../../../../sources/nanocoai__nanoclaw/src/modules/agent-to-agent/create-agent.ts) |
| mcp | 18 | [.mcp.json](../../../../sources/nanocoai__nanoclaw/.mcp.json)<br>[container/agent-runner/src/mcp-tools/agents.instructions.md](../../../../sources/nanocoai__nanoclaw/container/agent-runner/src/mcp-tools/agents.instructions.md)<br>[container/agent-runner/src/mcp-tools/agents.ts](../../../../sources/nanocoai__nanoclaw/container/agent-runner/src/mcp-tools/agents.ts)<br>[container/agent-runner/src/mcp-tools/cli.instructions.md](../../../../sources/nanocoai__nanoclaw/container/agent-runner/src/mcp-tools/cli.instructions.md)<br>[container/agent-runner/src/mcp-tools/core.instructions.md](../../../../sources/nanocoai__nanoclaw/container/agent-runner/src/mcp-tools/core.instructions.md)<br>[container/agent-runner/src/mcp-tools/core.test.ts](../../../../sources/nanocoai__nanoclaw/container/agent-runner/src/mcp-tools/core.test.ts)<br>[container/agent-runner/src/mcp-tools/core.ts](../../../../sources/nanocoai__nanoclaw/container/agent-runner/src/mcp-tools/core.ts)<br>[container/agent-runner/src/mcp-tools/index.ts](../../../../sources/nanocoai__nanoclaw/container/agent-runner/src/mcp-tools/index.ts) |
| retrieval | 32 | [src/index.ts](../../../../sources/nanocoai__nanoclaw/src/index.ts)<br>[src/providers/index.ts](../../../../sources/nanocoai__nanoclaw/src/providers/index.ts)<br>[src/modules/index.ts](../../../../sources/nanocoai__nanoclaw/src/modules/index.ts)<br>[src/modules/typing/index.test.ts](../../../../sources/nanocoai__nanoclaw/src/modules/typing/index.test.ts)<br>[src/modules/typing/index.ts](../../../../sources/nanocoai__nanoclaw/src/modules/typing/index.ts)<br>[src/modules/self-mod/index.ts](../../../../sources/nanocoai__nanoclaw/src/modules/self-mod/index.ts)<br>[src/modules/scheduling/index.ts](../../../../sources/nanocoai__nanoclaw/src/modules/scheduling/index.ts)<br>[src/modules/permissions/index.ts](../../../../sources/nanocoai__nanoclaw/src/modules/permissions/index.ts) |
| spec | 5 | [docs/architecture-diagram.html](../../../../sources/nanocoai__nanoclaw/docs/architecture-diagram.html)<br>[docs/architecture-diagram.md](../../../../sources/nanocoai__nanoclaw/docs/architecture-diagram.md)<br>[docs/architecture.md](../../../../sources/nanocoai__nanoclaw/docs/architecture.md)<br>[docs/REQUIREMENTS.md](../../../../sources/nanocoai__nanoclaw/docs/REQUIREMENTS.md)<br>[docs/SPEC.md](../../../../sources/nanocoai__nanoclaw/docs/SPEC.md) |
| eval | 89 | [src/attachment-naming.test.ts](../../../../sources/nanocoai__nanoclaw/src/attachment-naming.test.ts)<br>[src/circuit-breaker.test.ts](../../../../sources/nanocoai__nanoclaw/src/circuit-breaker.test.ts)<br>[src/container-restart.test.ts](../../../../sources/nanocoai__nanoclaw/src/container-restart.test.ts)<br>[src/container-runner.test.ts](../../../../sources/nanocoai__nanoclaw/src/container-runner.test.ts)<br>[src/container-runtime.test.ts](../../../../sources/nanocoai__nanoclaw/src/container-runtime.test.ts)<br>[src/delivery-actions.test.ts](../../../../sources/nanocoai__nanoclaw/src/delivery-actions.test.ts)<br>[src/delivery.test.ts](../../../../sources/nanocoai__nanoclaw/src/delivery.test.ts)<br>[src/group-folder.test.ts](../../../../sources/nanocoai__nanoclaw/src/group-folder.test.ts) |
| security | 7 | [src/modules/mount-security/index.ts](../../../../sources/nanocoai__nanoclaw/src/modules/mount-security/index.ts)<br>[setup/auth.ts](../../../../sources/nanocoai__nanoclaw/setup/auth.ts)<br>[setup/provider-auth.ts](../../../../sources/nanocoai__nanoclaw/setup/provider-auth.ts)<br>[setup/signal-auth.ts](../../../../sources/nanocoai__nanoclaw/setup/signal-auth.ts)<br>[setup/whatsapp-auth.ts](../../../../sources/nanocoai__nanoclaw/setup/whatsapp-auth.ts)<br>[setup/migrate-v2/channel-auth.ts](../../../../sources/nanocoai__nanoclaw/setup/migrate-v2/channel-auth.ts)<br>[docs/SECURITY.md](../../../../sources/nanocoai__nanoclaw/docs/SECURITY.md) |
| ci | 4 | [.github/workflows/bump-version.yml](../../../../sources/nanocoai__nanoclaw/.github/workflows/bump-version.yml)<br>[.github/workflows/ci.yml](../../../../sources/nanocoai__nanoclaw/.github/workflows/ci.yml)<br>[.github/workflows/label-pr.yml](../../../../sources/nanocoai__nanoclaw/.github/workflows/label-pr.yml)<br>[.github/workflows/update-tokens.yml](../../../../sources/nanocoai__nanoclaw/.github/workflows/update-tokens.yml) |
| container | 1 | [container/Dockerfile](../../../../sources/nanocoai__nanoclaw/container/Dockerfile) |
| instruction | 4 | [CLAUDE.md](../../../../sources/nanocoai__nanoclaw/CLAUDE.md)<br>[groups/main/CLAUDE.md](../../../../sources/nanocoai__nanoclaw/groups/main/CLAUDE.md)<br>[groups/global/CLAUDE.md](../../../../sources/nanocoai__nanoclaw/groups/global/CLAUDE.md)<br>[container/CLAUDE.md](../../../../sources/nanocoai__nanoclaw/container/CLAUDE.md) |
| docs | 33 | [README_ja.md](../../../../sources/nanocoai__nanoclaw/README_ja.md)<br>[README_zh.md](../../../../sources/nanocoai__nanoclaw/README_zh.md)<br>[README.md](../../../../sources/nanocoai__nanoclaw/README.md)<br>[repo-tokens/README.md](../../../../sources/nanocoai__nanoclaw/repo-tokens/README.md)<br>[docs/agent-runner-details.md](../../../../sources/nanocoai__nanoclaw/docs/agent-runner-details.md)<br>[docs/api-details.md](../../../../sources/nanocoai__nanoclaw/docs/api-details.md)<br>[docs/APPLE-CONTAINER-NETWORKING.md](../../../../sources/nanocoai__nanoclaw/docs/APPLE-CONTAINER-NETWORKING.md)<br>[docs/architecture-diagram.html](../../../../sources/nanocoai__nanoclaw/docs/architecture-diagram.html) |
| config | 5 | [package.json](../../../../sources/nanocoai__nanoclaw/package.json)<br>[pnpm-workspace.yaml](../../../../sources/nanocoai__nanoclaw/pnpm-workspace.yaml)<br>[tsconfig.json](../../../../sources/nanocoai__nanoclaw/tsconfig.json)<br>[container/agent-runner/package.json](../../../../sources/nanocoai__nanoclaw/container/agent-runner/package.json)<br>[container/agent-runner/tsconfig.json](../../../../sources/nanocoai__nanoclaw/container/agent-runner/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 89 | [src/attachment-naming.test.ts](../../../../sources/nanocoai__nanoclaw/src/attachment-naming.test.ts)<br>[src/circuit-breaker.test.ts](../../../../sources/nanocoai__nanoclaw/src/circuit-breaker.test.ts)<br>[src/container-restart.test.ts](../../../../sources/nanocoai__nanoclaw/src/container-restart.test.ts)<br>[src/container-runner.test.ts](../../../../sources/nanocoai__nanoclaw/src/container-runner.test.ts)<br>[src/container-runtime.test.ts](../../../../sources/nanocoai__nanoclaw/src/container-runtime.test.ts)<br>[src/delivery-actions.test.ts](../../../../sources/nanocoai__nanoclaw/src/delivery-actions.test.ts) |
| CI workflows | 4 | [.github/workflows/bump-version.yml](../../../../sources/nanocoai__nanoclaw/.github/workflows/bump-version.yml)<br>[.github/workflows/ci.yml](../../../../sources/nanocoai__nanoclaw/.github/workflows/ci.yml)<br>[.github/workflows/label-pr.yml](../../../../sources/nanocoai__nanoclaw/.github/workflows/label-pr.yml)<br>[.github/workflows/update-tokens.yml](../../../../sources/nanocoai__nanoclaw/.github/workflows/update-tokens.yml) |
| Containers / deploy | 1 | [container/Dockerfile](../../../../sources/nanocoai__nanoclaw/container/Dockerfile) |
| Security / policy | 7 | [src/modules/mount-security/index.ts](../../../../sources/nanocoai__nanoclaw/src/modules/mount-security/index.ts)<br>[setup/auth.ts](../../../../sources/nanocoai__nanoclaw/setup/auth.ts)<br>[setup/provider-auth.ts](../../../../sources/nanocoai__nanoclaw/setup/provider-auth.ts)<br>[setup/signal-auth.ts](../../../../sources/nanocoai__nanoclaw/setup/signal-auth.ts)<br>[setup/whatsapp-auth.ts](../../../../sources/nanocoai__nanoclaw/setup/whatsapp-auth.ts)<br>[setup/migrate-v2/channel-auth.ts](../../../../sources/nanocoai__nanoclaw/setup/migrate-v2/channel-auth.ts) |
| Agent instructions | 4 | [CLAUDE.md](../../../../sources/nanocoai__nanoclaw/CLAUDE.md)<br>[groups/main/CLAUDE.md](../../../../sources/nanocoai__nanoclaw/groups/main/CLAUDE.md)<br>[groups/global/CLAUDE.md](../../../../sources/nanocoai__nanoclaw/groups/global/CLAUDE.md)<br>[container/CLAUDE.md](../../../../sources/nanocoai__nanoclaw/container/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `.mcp.json`, `container/agent-runner/src/mcp-tools/agents.instructions.md`, `container/agent-runner/src/mcp-tools/agents.ts`.
2. Trace execution through entrypoints: `src/index.ts`, `container/agent-runner/src/index.ts`, `container/agent-runner/src/mcp-tools/server.ts`.
3. Map agent/tool runtime through: `src/modules/self-mod/agent.md`, `src/modules/permissions/db/agent-group-members.ts`, `src/modules/interactive/agent.md`.
4. Inspect retrieval/memory/indexing through: `src/index.ts`, `src/providers/index.ts`, `src/modules/index.ts`.
5. Verify behavior through test/eval files: `src/attachment-naming.test.ts`, `src/circuit-breaker.test.ts`, `src/container-restart.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 A lightweight alternative to OpenClaw that runs in containers for security. Connects to WhatsApp, Telegram, Slack, Disco. 핵심 구조 신호는 TypeScript, package.json, README.md, CLAUDE.md, LICENSE, ci이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
