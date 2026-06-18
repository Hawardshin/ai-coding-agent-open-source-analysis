# docfork/docfork Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 149 files, 44 directories.

## 요약

- 조사 단위: `sources/docfork__docfork` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 149 files, 44 directories, depth score 123, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=plugins/cursor/docfork/.mcp.json, plugins/claude/docfork/.mcp.json, packages/mcp/.npmrc이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | docfork/docfork |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/docfork__docfork](../../../../sources/docfork__docfork) |
| Existing report | [reports/clone-structures/docfork__docfork.md](../../../clone-structures/docfork__docfork.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 149 / 44 |
| Max observed depth | 6 |
| Top directories | .claude-plugin, .cursor-plugin, .dgrep, .github, packages, plugins, scripts |
| Top extensions | .ts: 75, .json: 21, .md: 21, (none): 14, .mjs: 3, .yaml: 3, .yml: 3, .mdc: 2, .png: 2, .svg: 2, .gif: 1, .sh: 1 |
| Source patterns | monorepo/workspace, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/mcp | packages workspace | 31 |
| packages/dgrep | packages workspace | 30 |
| packages/sdk | packages workspace | 8 |
| .github | ci surface | 1 |
| packages | source boundary | 1 |
| plugins | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | package.json | preinstall | npx only-allow pnpm |
| build | package.json | build | turbo run build |
| serve-dev | package.json | dev | turbo run dev |
| serve-dev | package.json | start | turbo run start |
| serve-dev | package.json | start:stdio | turbo run start:stdio |
| quality | package.json | lint | turbo run lint |
| quality | package.json | lint:check | turbo run lint:check |
| quality | package.json | format | turbo run format |
| quality | package.json | format:check | turbo run format:check |
| quality | package.json | typecheck | turbo run typecheck |
| test | package.json | test | turbo run test |
| utility | package.json | clean | turbo run clean && rm -rf node_modules |


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
| mcp | [plugins/cursor/docfork/.mcp.json](../../../../sources/docfork__docfork/plugins/cursor/docfork/.mcp.json) | mcp signal |
| mcp | [plugins/claude/docfork/.mcp.json](../../../../sources/docfork__docfork/plugins/claude/docfork/.mcp.json) | mcp signal |
| mcp | [packages/mcp/.npmrc](../../../../sources/docfork__docfork/packages/mcp/.npmrc) | mcp signal |
| mcp | [packages/mcp/.prettierignore](../../../../sources/docfork__docfork/packages/mcp/.prettierignore) | mcp signal |
| agentRuntime | [plugins/cursor/docfork/skills/docfork-docs/SKILL.md](../../../../sources/docfork__docfork/plugins/cursor/docfork/skills/docfork-docs/SKILL.md) | agentRuntime signal |
| agentRuntime | [plugins/cursor/docfork/agents/docs-researcher.md](../../../../sources/docfork__docfork/plugins/cursor/docfork/agents/docs-researcher.md) | agentRuntime signal |
| agentRuntime | [plugins/claude/docfork/skills/docfork-docs/SKILL.md](../../../../sources/docfork__docfork/plugins/claude/docfork/skills/docfork-docs/SKILL.md) | agentRuntime signal |
| agentRuntime | [plugins/claude/docfork/agents/docs-researcher.md](../../../../sources/docfork__docfork/plugins/claude/docfork/agents/docs-researcher.md) | agentRuntime signal |
| entrypoints | [packages/sdk/src/index.ts](../../../../sources/docfork__docfork/packages/sdk/src/index.ts) | entrypoints signal |
| entrypoints | [packages/mcp/server.json](../../../../sources/docfork__docfork/packages/mcp/server.json) | entrypoints signal |
| entrypoints | [packages/mcp/src/index.ts](../../../../sources/docfork__docfork/packages/mcp/src/index.ts) | entrypoints signal |
| entrypoints | [packages/dgrep/src/index.ts](../../../../sources/docfork__docfork/packages/dgrep/src/index.ts) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 4 | [packages/sdk/src/index.ts](../../../../sources/docfork__docfork/packages/sdk/src/index.ts)<br>[packages/mcp/server.json](../../../../sources/docfork__docfork/packages/mcp/server.json)<br>[packages/mcp/src/index.ts](../../../../sources/docfork__docfork/packages/mcp/src/index.ts)<br>[packages/dgrep/src/index.ts](../../../../sources/docfork__docfork/packages/dgrep/src/index.ts) |
| agentRuntime | 6 | [plugins/cursor/docfork/skills/docfork-docs/SKILL.md](../../../../sources/docfork__docfork/plugins/cursor/docfork/skills/docfork-docs/SKILL.md)<br>[plugins/cursor/docfork/agents/docs-researcher.md](../../../../sources/docfork__docfork/plugins/cursor/docfork/agents/docs-researcher.md)<br>[plugins/claude/docfork/skills/docfork-docs/SKILL.md](../../../../sources/docfork__docfork/plugins/claude/docfork/skills/docfork-docs/SKILL.md)<br>[plugins/claude/docfork/agents/docs-researcher.md](../../../../sources/docfork__docfork/plugins/claude/docfork/agents/docs-researcher.md)<br>[packages/dgrep/test/lib/agents.test.ts](../../../../sources/docfork__docfork/packages/dgrep/test/lib/agents.test.ts)<br>[packages/dgrep/src/lib/agents.ts](../../../../sources/docfork__docfork/packages/dgrep/src/lib/agents.ts) |
| mcp | 25 | [plugins/cursor/docfork/.mcp.json](../../../../sources/docfork__docfork/plugins/cursor/docfork/.mcp.json)<br>[plugins/claude/docfork/.mcp.json](../../../../sources/docfork__docfork/plugins/claude/docfork/.mcp.json)<br>[packages/mcp/.npmrc](../../../../sources/docfork__docfork/packages/mcp/.npmrc)<br>[packages/mcp/.prettierignore](../../../../sources/docfork__docfork/packages/mcp/.prettierignore)<br>[packages/mcp/CHANGELOG.md](../../../../sources/docfork__docfork/packages/mcp/CHANGELOG.md)<br>[packages/mcp/Dockerfile](../../../../sources/docfork__docfork/packages/mcp/Dockerfile)<br>[packages/mcp/gemini-extension.json](../../../../sources/docfork__docfork/packages/mcp/gemini-extension.json)<br>[packages/mcp/glama.json](../../../../sources/docfork__docfork/packages/mcp/glama.json) |
| retrieval | 4 | [packages/sdk/src/index.ts](../../../../sources/docfork__docfork/packages/sdk/src/index.ts)<br>[packages/mcp/src/index.ts](../../../../sources/docfork__docfork/packages/mcp/src/index.ts)<br>[packages/mcp/src/api/index.ts](../../../../sources/docfork__docfork/packages/mcp/src/api/index.ts)<br>[packages/dgrep/src/index.ts](../../../../sources/docfork__docfork/packages/dgrep/src/index.ts) |
| spec | 0 | not obvious |
| eval | 23 | [packages/sdk/smoke.test.ts](../../../../sources/docfork__docfork/packages/sdk/smoke.test.ts)<br>[packages/sdk/src/errors.test.ts](../../../../sources/docfork__docfork/packages/sdk/src/errors.test.ts)<br>[packages/sdk/src/pagination.test.ts](../../../../sources/docfork__docfork/packages/sdk/src/pagination.test.ts)<br>[packages/dgrep/test/setup.ts](../../../../sources/docfork__docfork/packages/dgrep/test/setup.ts)<br>[packages/dgrep/test/mocks/handlers.ts](../../../../sources/docfork__docfork/packages/dgrep/test/mocks/handlers.ts)<br>[packages/dgrep/test/lib/agents.test.ts](../../../../sources/docfork__docfork/packages/dgrep/test/lib/agents.test.ts)<br>[packages/dgrep/test/lib/api-client.test.ts](../../../../sources/docfork__docfork/packages/dgrep/test/lib/api-client.test.ts)<br>[packages/dgrep/test/lib/auth.test.ts](../../../../sources/docfork__docfork/packages/dgrep/test/lib/auth.test.ts) |
| security | 3 | [SECURITY.md](../../../../sources/docfork__docfork/SECURITY.md)<br>[packages/dgrep/test/lib/auth.test.ts](../../../../sources/docfork__docfork/packages/dgrep/test/lib/auth.test.ts)<br>[packages/dgrep/src/lib/auth.ts](../../../../sources/docfork__docfork/packages/dgrep/src/lib/auth.ts) |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/docfork__docfork/.github/workflows/ci.yml)<br>[.github/workflows/release-please.yml](../../../../sources/docfork__docfork/.github/workflows/release-please.yml)<br>[.github/workflows/release.yml](../../../../sources/docfork__docfork/.github/workflows/release.yml) |
| container | 1 | [packages/mcp/Dockerfile](../../../../sources/docfork__docfork/packages/mcp/Dockerfile) |
| instruction | 1 | [CLAUDE.md](../../../../sources/docfork__docfork/CLAUDE.md) |
| docs | 7 | [README.md](../../../../sources/docfork__docfork/README.md)<br>[plugins/cursor/docfork/README.md](../../../../sources/docfork__docfork/plugins/cursor/docfork/README.md)<br>[plugins/claude/docfork/README.md](../../../../sources/docfork__docfork/plugins/claude/docfork/README.md)<br>[packages/sdk/README.md](../../../../sources/docfork__docfork/packages/sdk/README.md)<br>[packages/mcp/README.md](../../../../sources/docfork__docfork/packages/mcp/README.md)<br>[packages/dgrep/README.md](../../../../sources/docfork__docfork/packages/dgrep/README.md)<br>[packages/dgrep/docs/testing-strategy.md](../../../../sources/docfork__docfork/packages/dgrep/docs/testing-strategy.md) |
| config | 9 | [package.json](../../../../sources/docfork__docfork/package.json)<br>[pnpm-workspace.yaml](../../../../sources/docfork__docfork/pnpm-workspace.yaml)<br>[turbo.json](../../../../sources/docfork__docfork/turbo.json)<br>[packages/sdk/package.json](../../../../sources/docfork__docfork/packages/sdk/package.json)<br>[packages/sdk/tsconfig.json](../../../../sources/docfork__docfork/packages/sdk/tsconfig.json)<br>[packages/mcp/package.json](../../../../sources/docfork__docfork/packages/mcp/package.json)<br>[packages/mcp/tsconfig.json](../../../../sources/docfork__docfork/packages/mcp/tsconfig.json)<br>[packages/dgrep/package.json](../../../../sources/docfork__docfork/packages/dgrep/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 23 | [packages/sdk/smoke.test.ts](../../../../sources/docfork__docfork/packages/sdk/smoke.test.ts)<br>[packages/sdk/src/errors.test.ts](../../../../sources/docfork__docfork/packages/sdk/src/errors.test.ts)<br>[packages/sdk/src/pagination.test.ts](../../../../sources/docfork__docfork/packages/sdk/src/pagination.test.ts)<br>[packages/dgrep/test/setup.ts](../../../../sources/docfork__docfork/packages/dgrep/test/setup.ts)<br>[packages/dgrep/test/mocks/handlers.ts](../../../../sources/docfork__docfork/packages/dgrep/test/mocks/handlers.ts)<br>[packages/dgrep/test/lib/agents.test.ts](../../../../sources/docfork__docfork/packages/dgrep/test/lib/agents.test.ts) |
| CI workflows | 3 | [.github/workflows/ci.yml](../../../../sources/docfork__docfork/.github/workflows/ci.yml)<br>[.github/workflows/release-please.yml](../../../../sources/docfork__docfork/.github/workflows/release-please.yml)<br>[.github/workflows/release.yml](../../../../sources/docfork__docfork/.github/workflows/release.yml) |
| Containers / deploy | 1 | [packages/mcp/Dockerfile](../../../../sources/docfork__docfork/packages/mcp/Dockerfile) |
| Security / policy | 3 | [SECURITY.md](../../../../sources/docfork__docfork/SECURITY.md)<br>[packages/dgrep/test/lib/auth.test.ts](../../../../sources/docfork__docfork/packages/dgrep/test/lib/auth.test.ts)<br>[packages/dgrep/src/lib/auth.ts](../../../../sources/docfork__docfork/packages/dgrep/src/lib/auth.ts) |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/docfork__docfork/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `plugins/cursor/docfork/.mcp.json`, `plugins/claude/docfork/.mcp.json`, `packages/mcp/.npmrc`.
2. Trace execution through entrypoints: `packages/sdk/src/index.ts`, `packages/mcp/server.json`, `packages/mcp/src/index.ts`.
3. Map agent/tool runtime through: `plugins/cursor/docfork/skills/docfork-docs/SKILL.md`, `plugins/cursor/docfork/agents/docs-researcher.md`, `plugins/claude/docfork/skills/docfork-docs/SKILL.md`.
4. Inspect retrieval/memory/indexing through: `packages/sdk/src/index.ts`, `packages/mcp/src/index.ts`, `packages/mcp/src/api/index.ts`.
5. Verify behavior through test/eval files: `packages/sdk/smoke.test.ts`, `packages/sdk/src/errors.test.ts`, `packages/sdk/src/pagination.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 149 files, 44 directories.. 핵심 구조 신호는 package.json, README.md, CLAUDE.md, LICENSE, tests, ci이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing입니다.
