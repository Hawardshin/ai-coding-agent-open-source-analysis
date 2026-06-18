# bitbonsai/mcpvault Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

A lightweight Model Context Protocol (MCP) server for safe Obsidian vault access

## 요약

- 조사 단위: `sources/bitbonsai__mcpvault` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 107 files, 19 directories, depth score 108, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=website/public/mcp-obsidian-1-min.mp4이고, 의존성 단서는 modelcontextprotocol, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | bitbonsai/mcpvault |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Astro |
| Stars | 1429 |
| Forks | 111 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/bitbonsai__mcpvault](../../../../sources/bitbonsai__mcpvault) |
| Existing report | [reports/global-trending/repositories/bitbonsai__mcpvault.md](../../../global-trending/repositories/bitbonsai__mcpvault.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 107 / 19 |
| Max observed depth | 5 |
| Top directories | .github, scripts, skills, src, website |
| Top extensions | .md: 24, .ts: 22, .astro: 20, .json: 6, .yml: 5, (none): 5, .tsx: 4, .png: 3, .html: 2, .jpg: 2, .mjs: 2, .sh: 2 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 10 |
| .github | ci surface | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |
| website | documentation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | package.json | start | tsx server.ts |
| serve-dev | package.json | website | cd website && bun dev |
| build | package.json | build | tsc --project tsconfig.build.json |
| test | package.json | test | vitest run |
| test | package.json | test:watch | vitest |
| test | package.json | prepublishOnly | npm run build && npm test |
| utility | package.json | prepack | npm install |
| utility | package.json | publish:dry | npm publish --dry-run |
| utility | package.json | publish:beta | npm publish --tag beta |
| test | package.json | publish:latest | npm publish |
| entrypoint | package.json bin | server.js | dist/server.js |


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
| mcp | [website/public/mcp-obsidian-1-min.mp4](../../../../sources/bitbonsai__mcpvault/website/public/mcp-obsidian-1-min.mp4) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/bitbonsai__mcpvault/AGENTS.md) | agentRuntime signal |
| agentRuntime | [website/AGENTS.md](../../../../sources/bitbonsai__mcpvault/website/AGENTS.md) | agentRuntime signal |
| agentRuntime | [website/src/pages/skill.astro](../../../../sources/bitbonsai__mcpvault/website/src/pages/skill.astro) | agentRuntime signal |
| agentRuntime | [website/public/skill.md](../../../../sources/bitbonsai__mcpvault/website/public/skill.md) | agentRuntime signal |
| entrypoints | [server.ts](../../../../sources/bitbonsai__mcpvault/server.ts) | entrypoints signal |
| entrypoints | [src/index.ts](../../../../sources/bitbonsai__mcpvault/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/bitbonsai__mcpvault/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/bitbonsai__mcpvault/tsconfig.json) | config signal |
| config | [website/package.json](../../../../sources/bitbonsai__mcpvault/website/package.json) | config signal |
| config | [website/tsconfig.json](../../../../sources/bitbonsai__mcpvault/website/tsconfig.json) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/bitbonsai__mcpvault/.github/workflows/ci.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [server.ts](../../../../sources/bitbonsai__mcpvault/server.ts)<br>[src/index.ts](../../../../sources/bitbonsai__mcpvault/src/index.ts) |
| agentRuntime | 12 | [AGENTS.md](../../../../sources/bitbonsai__mcpvault/AGENTS.md)<br>[website/AGENTS.md](../../../../sources/bitbonsai__mcpvault/website/AGENTS.md)<br>[website/src/pages/skill.astro](../../../../sources/bitbonsai__mcpvault/website/src/pages/skill.astro)<br>[website/public/skill.md](../../../../sources/bitbonsai__mcpvault/website/public/skill.md)<br>[skills/triage/SKILL.md](../../../../sources/bitbonsai__mcpvault/skills/triage/SKILL.md)<br>[skills/triage/resources/comment-policy.md](../../../../sources/bitbonsai__mcpvault/skills/triage/resources/comment-policy.md)<br>[skills/triage/resources/finding-rules.md](../../../../sources/bitbonsai__mcpvault/skills/triage/resources/finding-rules.md)<br>[skills/triage/resources/state-schema.md](../../../../sources/bitbonsai__mcpvault/skills/triage/resources/state-schema.md) |
| mcp | 1 | [website/public/mcp-obsidian-1-min.mp4](../../../../sources/bitbonsai__mcpvault/website/public/mcp-obsidian-1-min.mp4) |
| retrieval | 3 | [website/src/pages/index.astro](../../../../sources/bitbonsai__mcpvault/website/src/pages/index.astro)<br>[website/public/index.md](../../../../sources/bitbonsai__mcpvault/website/public/index.md)<br>[src/index.ts](../../../../sources/bitbonsai__mcpvault/src/index.ts) |
| spec | 0 | not obvious |
| eval | 7 | [src/createServer.test.ts](../../../../sources/bitbonsai__mcpvault/src/createServer.test.ts)<br>[src/filesystem.test.ts](../../../../sources/bitbonsai__mcpvault/src/filesystem.test.ts)<br>[src/frontmatter.test.ts](../../../../sources/bitbonsai__mcpvault/src/frontmatter.test.ts)<br>[src/integration.test.ts](../../../../sources/bitbonsai__mcpvault/src/integration.test.ts)<br>[src/pathfilter.test.ts](../../../../sources/bitbonsai__mcpvault/src/pathfilter.test.ts)<br>[src/search.test.ts](../../../../sources/bitbonsai__mcpvault/src/search.test.ts)<br>[src/uri.test.ts](../../../../sources/bitbonsai__mcpvault/src/uri.test.ts) |
| security | 2 | [SECURITY.md](../../../../sources/bitbonsai__mcpvault/SECURITY.md)<br>[skills/triage/resources/comment-policy.md](../../../../sources/bitbonsai__mcpvault/skills/triage/resources/comment-policy.md) |
| ci | 4 | [.github/workflows/ci.yml](../../../../sources/bitbonsai__mcpvault/.github/workflows/ci.yml)<br>[.github/workflows/codeql.yml](../../../../sources/bitbonsai__mcpvault/.github/workflows/codeql.yml)<br>[.github/workflows/publish.yml](../../../../sources/bitbonsai__mcpvault/.github/workflows/publish.yml)<br>[.github/workflows/scorecard.yml](../../../../sources/bitbonsai__mcpvault/.github/workflows/scorecard.yml) |
| container | 0 | not obvious |
| instruction | 2 | [AGENTS.md](../../../../sources/bitbonsai__mcpvault/AGENTS.md)<br>[website/AGENTS.md](../../../../sources/bitbonsai__mcpvault/website/AGENTS.md) |
| docs | 61 | [README.md](../../../../sources/bitbonsai__mcpvault/README.md)<br>[website/.gitignore](../../../../sources/bitbonsai__mcpvault/website/.gitignore)<br>[website/AGENTS.md](../../../../sources/bitbonsai__mcpvault/website/AGENTS.md)<br>[website/astro.config.mjs](../../../../sources/bitbonsai__mcpvault/website/astro.config.mjs)<br>[website/package.json](../../../../sources/bitbonsai__mcpvault/website/package.json)<br>[website/README.md](../../../../sources/bitbonsai__mcpvault/website/README.md)<br>[website/tailwind.config.mjs](../../../../sources/bitbonsai__mcpvault/website/tailwind.config.mjs)<br>[website/tsconfig.json](../../../../sources/bitbonsai__mcpvault/website/tsconfig.json) |
| config | 4 | [package.json](../../../../sources/bitbonsai__mcpvault/package.json)<br>[tsconfig.json](../../../../sources/bitbonsai__mcpvault/tsconfig.json)<br>[website/package.json](../../../../sources/bitbonsai__mcpvault/website/package.json)<br>[website/tsconfig.json](../../../../sources/bitbonsai__mcpvault/website/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 7 | [src/createServer.test.ts](../../../../sources/bitbonsai__mcpvault/src/createServer.test.ts)<br>[src/filesystem.test.ts](../../../../sources/bitbonsai__mcpvault/src/filesystem.test.ts)<br>[src/frontmatter.test.ts](../../../../sources/bitbonsai__mcpvault/src/frontmatter.test.ts)<br>[src/integration.test.ts](../../../../sources/bitbonsai__mcpvault/src/integration.test.ts)<br>[src/pathfilter.test.ts](../../../../sources/bitbonsai__mcpvault/src/pathfilter.test.ts)<br>[src/search.test.ts](../../../../sources/bitbonsai__mcpvault/src/search.test.ts) |
| CI workflows | 4 | [.github/workflows/ci.yml](../../../../sources/bitbonsai__mcpvault/.github/workflows/ci.yml)<br>[.github/workflows/codeql.yml](../../../../sources/bitbonsai__mcpvault/.github/workflows/codeql.yml)<br>[.github/workflows/publish.yml](../../../../sources/bitbonsai__mcpvault/.github/workflows/publish.yml)<br>[.github/workflows/scorecard.yml](../../../../sources/bitbonsai__mcpvault/.github/workflows/scorecard.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 2 | [SECURITY.md](../../../../sources/bitbonsai__mcpvault/SECURITY.md)<br>[skills/triage/resources/comment-policy.md](../../../../sources/bitbonsai__mcpvault/skills/triage/resources/comment-policy.md) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/bitbonsai__mcpvault/AGENTS.md)<br>[website/AGENTS.md](../../../../sources/bitbonsai__mcpvault/website/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `website/public/mcp-obsidian-1-min.mp4`, `AGENTS.md`, `website/AGENTS.md`.
2. Trace execution through entrypoints: `server.ts`, `src/index.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `website/AGENTS.md`, `website/src/pages/skill.astro`.
4. Inspect retrieval/memory/indexing through: `website/src/pages/index.astro`, `website/public/index.md`, `src/index.ts`.
5. Verify behavior through test/eval files: `src/createServer.test.ts`, `src/filesystem.test.ts`, `src/frontmatter.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 A lightweight Model Context Protocol MCP server for safe Obsidian vault access. 핵심 구조 신호는 Astro, package.json, README.md, AGENTS.md, LICENSE, modelcontextprotocol이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
