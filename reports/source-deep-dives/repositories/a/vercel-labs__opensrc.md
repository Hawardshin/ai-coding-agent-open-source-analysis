# vercel-labs/opensrc Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 84 files, 32 directories.

## 요약

- 조사 단위: `sources/vercel-labs__opensrc` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 84 files, 32 directories, depth score 112, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, skills/opensrc/SKILL.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | vercel-labs/opensrc |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/vercel-labs__opensrc](../../../../sources/vercel-labs__opensrc) |
| Existing report | [reports/clone-structures/vercel-labs__opensrc.md](../../../clone-structures/vercel-labs__opensrc.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 84 / 32 |
| Max observed depth | 7 |
| Top directories | .github, apps, packages, skills |
| Top extensions | .rs: 18, .tsx: 18, .ts: 10, .js: 5, .json: 5, .md: 5, .mdx: 5, .lock: 3, .yaml: 3, .mjs: 2, .ttf: 2, .yml: 2 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| apps/docs | apps workspace | 78 |
| packages/opensrc | packages workspace | 9 |
| .github | ci surface | 1 |
| apps | source boundary | 1 |
| packages | source boundary | 1 |
| skills | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | turbo build |
| serve-dev | package.json | dev | turbo dev |
| test | package.json | test | turbo test |
| quality | package.json | lint | turbo lint |
| quality | package.json | lint:fix | turbo lint:fix |
| quality | package.json | type-check | turbo type-check |
| quality | package.json | format | prettier --write . |
| quality | package.json | format:check | prettier --check . |


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
| agentRuntime | [AGENTS.md](../../../../sources/vercel-labs__opensrc/AGENTS.md) | agentRuntime signal |
| agentRuntime | [skills/opensrc/SKILL.md](../../../../sources/vercel-labs__opensrc/skills/opensrc/SKILL.md) | agentRuntime signal |
| entrypoints | [packages/opensrc/cli/src/main.rs](../../../../sources/vercel-labs__opensrc/packages/opensrc/cli/src/main.rs) | entrypoints signal |
| entrypoints | [packages/opensrc/bin/opensrc.js](../../../../sources/vercel-labs__opensrc/packages/opensrc/bin/opensrc.js) | entrypoints signal |
| entrypoints | [apps/docs/src/mdx-components.tsx](../../../../sources/vercel-labs__opensrc/apps/docs/src/mdx-components.tsx) | entrypoints signal |
| entrypoints | [apps/docs/src/lib/docs-navigation.ts](../../../../sources/vercel-labs__opensrc/apps/docs/src/lib/docs-navigation.ts) | entrypoints signal |
| config | [package.json](../../../../sources/vercel-labs__opensrc/package.json) | config signal |
| config | [pnpm-workspace.yaml](../../../../sources/vercel-labs__opensrc/pnpm-workspace.yaml) | config signal |
| config | [turbo.json](../../../../sources/vercel-labs__opensrc/turbo.json) | config signal |
| config | [packages/opensrc/package.json](../../../../sources/vercel-labs__opensrc/packages/opensrc/package.json) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/vercel-labs__opensrc/.github/workflows/ci.yml) | ci support |
| ci | [.github/workflows/release.yml](../../../../sources/vercel-labs__opensrc/.github/workflows/release.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 37 | [packages/opensrc/cli/src/main.rs](../../../../sources/vercel-labs__opensrc/packages/opensrc/cli/src/main.rs)<br>[packages/opensrc/bin/opensrc.js](../../../../sources/vercel-labs__opensrc/packages/opensrc/bin/opensrc.js)<br>[apps/docs/src/mdx-components.tsx](../../../../sources/vercel-labs__opensrc/apps/docs/src/mdx-components.tsx)<br>[apps/docs/src/lib/docs-navigation.ts](../../../../sources/vercel-labs__opensrc/apps/docs/src/lib/docs-navigation.ts)<br>[apps/docs/src/lib/github.ts](../../../../sources/vercel-labs__opensrc/apps/docs/src/lib/github.ts)<br>[apps/docs/src/lib/mdx-to-markdown.ts](../../../../sources/vercel-labs__opensrc/apps/docs/src/lib/mdx-to-markdown.ts)<br>[apps/docs/src/lib/page-metadata.ts](../../../../sources/vercel-labs__opensrc/apps/docs/src/lib/page-metadata.ts)<br>[apps/docs/src/lib/page-titles.ts](../../../../sources/vercel-labs__opensrc/apps/docs/src/lib/page-titles.ts) |
| agentRuntime | 2 | [AGENTS.md](../../../../sources/vercel-labs__opensrc/AGENTS.md)<br>[skills/opensrc/SKILL.md](../../../../sources/vercel-labs__opensrc/skills/opensrc/SKILL.md) |
| mcp | 0 | not obvious |
| retrieval | 1 | [apps/docs/src/lib/search-index.ts](../../../../sources/vercel-labs__opensrc/apps/docs/src/lib/search-index.ts) |
| spec | 0 | not obvious |
| eval | 3 | [packages/opensrc/cli/tests/fixtures/pnpm-v9-workspace.yaml](../../../../sources/vercel-labs__opensrc/packages/opensrc/cli/tests/fixtures/pnpm-v9-workspace.yaml)<br>[packages/opensrc/cli/tests/fixtures/yarn-berry.lock](../../../../sources/vercel-labs__opensrc/packages/opensrc/cli/tests/fixtures/yarn-berry.lock)<br>[packages/opensrc/cli/tests/fixtures/yarn-v1.lock](../../../../sources/vercel-labs__opensrc/packages/opensrc/cli/tests/fixtures/yarn-v1.lock) |
| security | 2 | [apps/docs/src/app/auth/layout.tsx](../../../../sources/vercel-labs__opensrc/apps/docs/src/app/auth/layout.tsx)<br>[apps/docs/src/app/auth/page.mdx](../../../../sources/vercel-labs__opensrc/apps/docs/src/app/auth/page.mdx) |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/vercel-labs__opensrc/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/vercel-labs__opensrc/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 1 | [AGENTS.md](../../../../sources/vercel-labs__opensrc/AGENTS.md) |
| docs | 44 | [README.md](../../../../sources/vercel-labs__opensrc/README.md)<br>[packages/opensrc/README.md](../../../../sources/vercel-labs__opensrc/packages/opensrc/README.md)<br>[apps/docs/.env.example](../../../../sources/vercel-labs__opensrc/apps/docs/.env.example)<br>[apps/docs/next.config.mjs](../../../../sources/vercel-labs__opensrc/apps/docs/next.config.mjs)<br>[apps/docs/package.json](../../../../sources/vercel-labs__opensrc/apps/docs/package.json)<br>[apps/docs/postcss.config.mjs](../../../../sources/vercel-labs__opensrc/apps/docs/postcss.config.mjs)<br>[apps/docs/tsconfig.json](../../../../sources/vercel-labs__opensrc/apps/docs/tsconfig.json)<br>[apps/docs/src/mdx-components.tsx](../../../../sources/vercel-labs__opensrc/apps/docs/src/mdx-components.tsx) |
| config | 8 | [package.json](../../../../sources/vercel-labs__opensrc/package.json)<br>[pnpm-workspace.yaml](../../../../sources/vercel-labs__opensrc/pnpm-workspace.yaml)<br>[turbo.json](../../../../sources/vercel-labs__opensrc/turbo.json)<br>[packages/opensrc/package.json](../../../../sources/vercel-labs__opensrc/packages/opensrc/package.json)<br>[packages/opensrc/cli/Cargo.lock](../../../../sources/vercel-labs__opensrc/packages/opensrc/cli/Cargo.lock)<br>[packages/opensrc/cli/Cargo.toml](../../../../sources/vercel-labs__opensrc/packages/opensrc/cli/Cargo.toml)<br>[apps/docs/package.json](../../../../sources/vercel-labs__opensrc/apps/docs/package.json)<br>[apps/docs/tsconfig.json](../../../../sources/vercel-labs__opensrc/apps/docs/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 3 | [packages/opensrc/cli/tests/fixtures/pnpm-v9-workspace.yaml](../../../../sources/vercel-labs__opensrc/packages/opensrc/cli/tests/fixtures/pnpm-v9-workspace.yaml)<br>[packages/opensrc/cli/tests/fixtures/yarn-berry.lock](../../../../sources/vercel-labs__opensrc/packages/opensrc/cli/tests/fixtures/yarn-berry.lock)<br>[packages/opensrc/cli/tests/fixtures/yarn-v1.lock](../../../../sources/vercel-labs__opensrc/packages/opensrc/cli/tests/fixtures/yarn-v1.lock) |
| CI workflows | 2 | [.github/workflows/ci.yml](../../../../sources/vercel-labs__opensrc/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/vercel-labs__opensrc/.github/workflows/release.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 2 | [apps/docs/src/app/auth/layout.tsx](../../../../sources/vercel-labs__opensrc/apps/docs/src/app/auth/layout.tsx)<br>[apps/docs/src/app/auth/page.mdx](../../../../sources/vercel-labs__opensrc/apps/docs/src/app/auth/page.mdx) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/vercel-labs__opensrc/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `AGENTS.md`, `skills/opensrc/SKILL.md`, `packages/opensrc/cli/src/main.rs`.
2. Trace execution through entrypoints: `packages/opensrc/cli/src/main.rs`, `packages/opensrc/bin/opensrc.js`, `apps/docs/src/mdx-components.tsx`.
3. Map agent/tool runtime through: `AGENTS.md`, `skills/opensrc/SKILL.md`.
4. Inspect retrieval/memory/indexing through: `apps/docs/src/lib/search-index.ts`.
5. Verify behavior through test/eval files: `packages/opensrc/cli/tests/fixtures/pnpm-v9-workspace.yaml`, `packages/opensrc/cli/tests/fixtures/yarn-berry.lock`, `packages/opensrc/cli/tests/fixtures/yarn-v1.lock`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 84 files, 32 directories.. 핵심 구조 신호는 package.json, README.md, AGENTS.md, LICENSE, tests, ci이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing입니다.
