# upstash/context7 Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 322 files, 103 directories.

## 요약

- 조사 단위: `sources/upstash__context7` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 322 files, 103 directories, depth score 129, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=skills/context7-mcp/SKILL.md, rules/context7-mcp.md, plugins/cursor/context7/mcp.json이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | upstash/context7 |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 57572 |
| Forks | 2714 |
| License | MIT |
| Maturity | high-signal |
| Evidence | deep-source+report |
| Source | [sources/upstash__context7](../../../../sources/upstash__context7) |
| Existing report | [reports/global-trending/repositories/upstash__context7.md](../../../global-trending/repositories/upstash__context7.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 322 / 103 |
| Max observed depth | 6 |
| Top directories | .changeset, .claude-plugin, .github, docs, i18n, packages, plugins, public, rules, skills |
| Top extensions | .ts: 92, .md: 57, .mdx: 55, .png: 48, .json: 29, (none): 11, .yml: 9, .js: 6, .svg: 5, .mjs: 3, .yaml: 3, .example: 1 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 38 |
| packages/mcp | packages workspace | 37 |
| packages/tools-ai-sdk | packages workspace | 28 |
| packages/cli | packages workspace | 24 |
| packages/sdk | packages workspace | 16 |
| packages/pi | packages workspace | 7 |
| .github | ci surface | 1 |
| i18n | top-level component | 1 |
| packages | source boundary | 1 |
| plugins | top-level component | 1 |
| public | top-level component | 1 |
| rules | top-level component | 1 |
| skills | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | pnpm -r run build |
| build | package.json | build:sdk | pnpm --filter @upstash/context7-sdk build |
| build | package.json | build:mcp | pnpm --filter @upstash/context7-mcp build |
| build | package.json | build:ai-sdk | pnpm --filter @upstash/context7-tools-ai-sdk build |
| quality | package.json | typecheck | pnpm -r run typecheck |
| test | package.json | test | pnpm -r run test |
| test | package.json | test:sdk | pnpm --filter @upstash/context7-sdk test |
| test | package.json | test:tools-ai-sdk | pnpm --filter @upstash/context7-tools-ai-sdk test |
| utility | package.json | clean | pnpm -r run clean && rm -rf node_modules |
| quality | package.json | lint | pnpm -r run lint |
| quality | package.json | lint:check | pnpm -r run lint:check |
| quality | package.json | format | pnpm -r run format |
| quality | package.json | format:check | pnpm -r run format:check |
| build | package.json | release | pnpm build && changeset publish |
| build | package.json | release:snapshot | changeset version --snapshot canary && pnpm build && changeset publish --tag canary --no-git-tag |


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
| mcp | [skills/context7-mcp/SKILL.md](../../../../sources/upstash__context7/skills/context7-mcp/SKILL.md) | mcp signal |
| mcp | [rules/context7-mcp.md](../../../../sources/upstash__context7/rules/context7-mcp.md) | mcp signal |
| mcp | [plugins/cursor/context7/mcp.json](../../../../sources/upstash__context7/plugins/cursor/context7/mcp.json) | mcp signal |
| mcp | [plugins/cursor/context7/skills/context7-mcp/SKILL.md](../../../../sources/upstash__context7/plugins/cursor/context7/skills/context7-mcp/SKILL.md) | mcp signal |
| agentRuntime | [skills/find-docs/SKILL.md](../../../../sources/upstash__context7/skills/find-docs/SKILL.md) | agentRuntime signal |
| agentRuntime | [skills/context7-cli/SKILL.md](../../../../sources/upstash__context7/skills/context7-cli/SKILL.md) | agentRuntime signal |
| agentRuntime | [skills/context7-cli/references/docs.md](../../../../sources/upstash__context7/skills/context7-cli/references/docs.md) | agentRuntime signal |
| entrypoints | [server.json](../../../../sources/upstash__context7/server.json) | entrypoints signal |
| entrypoints | [packages/tools-ai-sdk/src/index.test.ts](../../../../sources/upstash__context7/packages/tools-ai-sdk/src/index.test.ts) | entrypoints signal |
| entrypoints | [packages/tools-ai-sdk/src/index.ts](../../../../sources/upstash__context7/packages/tools-ai-sdk/src/index.ts) | entrypoints signal |
| entrypoints | [packages/mcp/src/index.ts](../../../../sources/upstash__context7/packages/mcp/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/upstash__context7/package.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 5 | [server.json](../../../../sources/upstash__context7/server.json)<br>[packages/tools-ai-sdk/src/index.test.ts](../../../../sources/upstash__context7/packages/tools-ai-sdk/src/index.test.ts)<br>[packages/tools-ai-sdk/src/index.ts](../../../../sources/upstash__context7/packages/tools-ai-sdk/src/index.ts)<br>[packages/mcp/src/index.ts](../../../../sources/upstash__context7/packages/mcp/src/index.ts)<br>[packages/cli/src/index.ts](../../../../sources/upstash__context7/packages/cli/src/index.ts) |
| agentRuntime | 40 | [skills/find-docs/SKILL.md](../../../../sources/upstash__context7/skills/find-docs/SKILL.md)<br>[skills/context7-mcp/SKILL.md](../../../../sources/upstash__context7/skills/context7-mcp/SKILL.md)<br>[skills/context7-cli/SKILL.md](../../../../sources/upstash__context7/skills/context7-cli/SKILL.md)<br>[skills/context7-cli/references/docs.md](../../../../sources/upstash__context7/skills/context7-cli/references/docs.md)<br>[skills/context7-cli/references/setup.md](../../../../sources/upstash__context7/skills/context7-cli/references/setup.md)<br>[skills/context7-cli/references/skills.md](../../../../sources/upstash__context7/skills/context7-cli/references/skills.md)<br>[plugins/cursor/context7/skills/context7-mcp/SKILL.md](../../../../sources/upstash__context7/plugins/cursor/context7/skills/context7-mcp/SKILL.md)<br>[plugins/cursor/context7/agents/docs-researcher.md](../../../../sources/upstash__context7/plugins/cursor/context7/agents/docs-researcher.md) |
| mcp | 44 | [skills/context7-mcp/SKILL.md](../../../../sources/upstash__context7/skills/context7-mcp/SKILL.md)<br>[rules/context7-mcp.md](../../../../sources/upstash__context7/rules/context7-mcp.md)<br>[plugins/cursor/context7/mcp.json](../../../../sources/upstash__context7/plugins/cursor/context7/mcp.json)<br>[plugins/cursor/context7/skills/context7-mcp/SKILL.md](../../../../sources/upstash__context7/plugins/cursor/context7/skills/context7-mcp/SKILL.md)<br>[plugins/copilot/context7/.mcp.json](../../../../sources/upstash__context7/plugins/copilot/context7/.mcp.json)<br>[plugins/copilot/context7/skills/context7-mcp/SKILL.md](../../../../sources/upstash__context7/plugins/copilot/context7/skills/context7-mcp/SKILL.md)<br>[plugins/context7-power/mcp.json](../../../../sources/upstash__context7/plugins/context7-power/mcp.json)<br>[plugins/claude/context7/.mcp.json](../../../../sources/upstash__context7/plugins/claude/context7/.mcp.json) |
| retrieval | 15 | [packages/tools-ai-sdk/src/index.test.ts](../../../../sources/upstash__context7/packages/tools-ai-sdk/src/index.test.ts)<br>[packages/tools-ai-sdk/src/index.ts](../../../../sources/upstash__context7/packages/tools-ai-sdk/src/index.ts)<br>[packages/tools-ai-sdk/src/tools/index.ts](../../../../sources/upstash__context7/packages/tools-ai-sdk/src/tools/index.ts)<br>[packages/tools-ai-sdk/src/prompts/index.ts](../../../../sources/upstash__context7/packages/tools-ai-sdk/src/prompts/index.ts)<br>[packages/tools-ai-sdk/src/agents/index.ts](../../../../sources/upstash__context7/packages/tools-ai-sdk/src/agents/index.ts)<br>[packages/sdk/src/http/index.test.ts](../../../../sources/upstash__context7/packages/sdk/src/http/index.test.ts)<br>[packages/sdk/src/http/index.ts](../../../../sources/upstash__context7/packages/sdk/src/http/index.ts)<br>[packages/sdk/src/error/index.ts](../../../../sources/upstash__context7/packages/sdk/src/error/index.ts) |
| spec | 1 | [docs/images/on-premise-architecture.png](../../../../sources/upstash__context7/docs/images/on-premise-architecture.png) |
| eval | 21 | [packages/tools-ai-sdk/src/index.test.ts](../../../../sources/upstash__context7/packages/tools-ai-sdk/src/index.test.ts)<br>[packages/sdk/src/client.test.ts](../../../../sources/upstash__context7/packages/sdk/src/client.test.ts)<br>[packages/sdk/src/utils/test-utils.ts](../../../../sources/upstash__context7/packages/sdk/src/utils/test-utils.ts)<br>[packages/sdk/src/http/index.test.ts](../../../../sources/upstash__context7/packages/sdk/src/http/index.test.ts)<br>[packages/sdk/src/commands/search-library/index.test.ts](../../../../sources/upstash__context7/packages/sdk/src/commands/search-library/index.test.ts)<br>[packages/sdk/src/commands/get-context/index.test.ts](../../../../sources/upstash__context7/packages/sdk/src/commands/get-context/index.test.ts)<br>[packages/pi/__tests__/extension.test.ts](../../../../sources/upstash__context7/packages/pi/__tests__/extension.test.ts)<br>[packages/mcp/tsconfig.test.json](../../../../sources/upstash__context7/packages/mcp/tsconfig.test.json) |
| security | 17 | [SECURITY.md](../../../../sources/upstash__context7/SECURITY.md)<br>[packages/mcp/src/lib/auth/auth-prompt.ts](../../../../sources/upstash__context7/packages/mcp/src/lib/auth/auth-prompt.ts)<br>[packages/cli/src/utils/auth.ts](../../../../sources/upstash__context7/packages/cli/src/utils/auth.ts)<br>[packages/cli/src/commands/auth.ts](../../../../sources/upstash__context7/packages/cli/src/commands/auth.ts)<br>[packages/cli/src/__tests__/auth-commands.test.ts](../../../../sources/upstash__context7/packages/cli/src/__tests__/auth-commands.test.ts)<br>[packages/cli/src/__tests__/auth-utils.test.ts](../../../../sources/upstash__context7/packages/cli/src/__tests__/auth-utils.test.ts)<br>[docs/security/auth-and-access-control.mdx](../../../../sources/upstash__context7/docs/security/auth-and-access-control.mdx)<br>[docs/security/best-practices.mdx](../../../../sources/upstash__context7/docs/security/best-practices.mdx) |
| ci | 5 | [.github/workflows/canary-release.yml](../../../../sources/upstash__context7/.github/workflows/canary-release.yml)<br>[.github/workflows/ecr-deploy.yml](../../../../sources/upstash__context7/.github/workflows/ecr-deploy.yml)<br>[.github/workflows/mcp-registry.yml](../../../../sources/upstash__context7/.github/workflows/mcp-registry.yml)<br>[.github/workflows/release.yml](../../../../sources/upstash__context7/.github/workflows/release.yml)<br>[.github/workflows/test.yml](../../../../sources/upstash__context7/.github/workflows/test.yml) |
| container | 3 | [packages/mcp/Dockerfile](../../../../sources/upstash__context7/packages/mcp/Dockerfile)<br>[docs/enterprise/deployment/docker.mdx](../../../../sources/upstash__context7/docs/enterprise/deployment/docker.mdx)<br>[docs/enterprise/deployment/kubernetes.mdx](../../../../sources/upstash__context7/docs/enterprise/deployment/kubernetes.mdx) |
| instruction | 0 | not obvious |
| docs | 132 | [README.md](../../../../sources/upstash__context7/README.md)<br>[plugins/cursor/context7/README.md](../../../../sources/upstash__context7/plugins/cursor/context7/README.md)<br>[plugins/copilot/context7/README.md](../../../../sources/upstash__context7/plugins/copilot/context7/README.md)<br>[plugins/claude/context7/README.md](../../../../sources/upstash__context7/plugins/claude/context7/README.md)<br>[packages/tools-ai-sdk/README.md](../../../../sources/upstash__context7/packages/tools-ai-sdk/README.md)<br>[packages/sdk/README.md](../../../../sources/upstash__context7/packages/sdk/README.md)<br>[packages/pi/README.md](../../../../sources/upstash__context7/packages/pi/README.md)<br>[packages/mcp/README.md](../../../../sources/upstash__context7/packages/mcp/README.md) |
| config | 13 | [package.json](../../../../sources/upstash__context7/package.json)<br>[pnpm-workspace.yaml](../../../../sources/upstash__context7/pnpm-workspace.yaml)<br>[tsconfig.json](../../../../sources/upstash__context7/tsconfig.json)<br>[packages/tools-ai-sdk/package.json](../../../../sources/upstash__context7/packages/tools-ai-sdk/package.json)<br>[packages/tools-ai-sdk/tsconfig.json](../../../../sources/upstash__context7/packages/tools-ai-sdk/tsconfig.json)<br>[packages/sdk/package.json](../../../../sources/upstash__context7/packages/sdk/package.json)<br>[packages/sdk/tsconfig.json](../../../../sources/upstash__context7/packages/sdk/tsconfig.json)<br>[packages/pi/package.json](../../../../sources/upstash__context7/packages/pi/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 21 | [packages/tools-ai-sdk/src/index.test.ts](../../../../sources/upstash__context7/packages/tools-ai-sdk/src/index.test.ts)<br>[packages/sdk/src/client.test.ts](../../../../sources/upstash__context7/packages/sdk/src/client.test.ts)<br>[packages/sdk/src/utils/test-utils.ts](../../../../sources/upstash__context7/packages/sdk/src/utils/test-utils.ts)<br>[packages/sdk/src/http/index.test.ts](../../../../sources/upstash__context7/packages/sdk/src/http/index.test.ts)<br>[packages/sdk/src/commands/search-library/index.test.ts](../../../../sources/upstash__context7/packages/sdk/src/commands/search-library/index.test.ts)<br>[packages/sdk/src/commands/get-context/index.test.ts](../../../../sources/upstash__context7/packages/sdk/src/commands/get-context/index.test.ts) |
| CI workflows | 5 | [.github/workflows/canary-release.yml](../../../../sources/upstash__context7/.github/workflows/canary-release.yml)<br>[.github/workflows/ecr-deploy.yml](../../../../sources/upstash__context7/.github/workflows/ecr-deploy.yml)<br>[.github/workflows/mcp-registry.yml](../../../../sources/upstash__context7/.github/workflows/mcp-registry.yml)<br>[.github/workflows/release.yml](../../../../sources/upstash__context7/.github/workflows/release.yml)<br>[.github/workflows/test.yml](../../../../sources/upstash__context7/.github/workflows/test.yml) |
| Containers / deploy | 3 | [packages/mcp/Dockerfile](../../../../sources/upstash__context7/packages/mcp/Dockerfile)<br>[docs/enterprise/deployment/docker.mdx](../../../../sources/upstash__context7/docs/enterprise/deployment/docker.mdx)<br>[docs/enterprise/deployment/kubernetes.mdx](../../../../sources/upstash__context7/docs/enterprise/deployment/kubernetes.mdx) |
| Security / policy | 17 | [SECURITY.md](../../../../sources/upstash__context7/SECURITY.md)<br>[packages/mcp/src/lib/auth/auth-prompt.ts](../../../../sources/upstash__context7/packages/mcp/src/lib/auth/auth-prompt.ts)<br>[packages/cli/src/utils/auth.ts](../../../../sources/upstash__context7/packages/cli/src/utils/auth.ts)<br>[packages/cli/src/commands/auth.ts](../../../../sources/upstash__context7/packages/cli/src/commands/auth.ts)<br>[packages/cli/src/__tests__/auth-commands.test.ts](../../../../sources/upstash__context7/packages/cli/src/__tests__/auth-commands.test.ts)<br>[packages/cli/src/__tests__/auth-utils.test.ts](../../../../sources/upstash__context7/packages/cli/src/__tests__/auth-utils.test.ts) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | agent instruction files not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `skills/context7-mcp/SKILL.md`, `rules/context7-mcp.md`, `plugins/cursor/context7/mcp.json`.
2. Trace execution through entrypoints: `server.json`, `packages/tools-ai-sdk/src/index.test.ts`, `packages/tools-ai-sdk/src/index.ts`.
3. Map agent/tool runtime through: `skills/find-docs/SKILL.md`, `skills/context7-mcp/SKILL.md`, `skills/context7-cli/SKILL.md`.
4. Inspect retrieval/memory/indexing through: `packages/tools-ai-sdk/src/index.test.ts`, `packages/tools-ai-sdk/src/index.ts`, `packages/tools-ai-sdk/src/tools/index.ts`.
5. Verify behavior through test/eval files: `packages/tools-ai-sdk/src/index.test.ts`, `packages/sdk/src/client.test.ts`, `packages/sdk/src/utils/test-utils.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 322 files, 103 directories.. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, tests, ci이며, deep-source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 major metadata risk not obvious입니다.
