# modelstudioai/cli Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Official Model Studio CLI（阿里云百炼 CLI）built for AI Agent frameworks, exposing models, search, multimodal, and workflow capabilities as structured tool calls.

## 요약

- 조사 단위: `sources/modelstudioai__cli` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 299 files, 65 directories, depth score 113, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=skills/bailian-cli/reference/mcp.md, packages/core/src/client/mcp.ts, packages/cli/tests/e2e/mcp.e2e.test.ts이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | modelstudioai/cli |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | TypeScript |
| Stars | 243 |
| Forks | 14 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/modelstudioai__cli](../../../../sources/modelstudioai__cli) |
| Existing report | [reports/global-trending/repositories/modelstudioai__cli.md](../../../global-trending/repositories/modelstudioai__cli.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 299 / 65 |
| Max observed depth | 6 |
| Top directories | .github, .vite-hooks, docs, packages, skills, tools |
| Top extensions | .ts: 187, .md: 53, .mjs: 36, .json: 7, (none): 7, .js: 3, .yml: 3, .yaml: 2, .png: 1 |
| Source patterns | monorepo/workspace, cli-first, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/cli | packages workspace | 66 |
| packages/core | packages workspace | 25 |
| docs | documentation surface | 17 |
| .github | ci surface | 1 |
| packages | source boundary | 1 |
| skills | top-level component | 1 |
| tools | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| test | package.json | ready | vp check && vp run -r test && vp run -r build |
| utility | package.json | prepare | vp config |
| quality | package.json | check | vp check |
| build | package.json | sync:skill-assets | pnpm --filter bailian-cli-core run build && pnpm --filter bailian-cli run generate:reference && pnpm --filter bailian-cli run sync:skill-version |
| serve-dev | package.json | dev | pnpm -F bailian-cli-core dev |
| serve-dev | package.json | bl | pnpm -F bailian-cli dev |
| test | package.json | test | vp test |
| build | package.json | release:check | node tools/release/check.mjs |
| utility | package.json | wiki:crawl | node tools/wiki-crawler/index.mjs |
| test | package.json | test:stress | node packages/cli/tests/stress/run.mjs |


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
| mcp | [skills/bailian-cli/reference/mcp.md](../../../../sources/modelstudioai__cli/skills/bailian-cli/reference/mcp.md) | mcp signal |
| mcp | [packages/core/src/client/mcp.ts](../../../../sources/modelstudioai__cli/packages/core/src/client/mcp.ts) | mcp signal |
| mcp | [packages/cli/tests/e2e/mcp.e2e.test.ts](../../../../sources/modelstudioai__cli/packages/cli/tests/e2e/mcp.e2e.test.ts) | mcp signal |
| mcp | [packages/cli/src/commands/mcp/call.ts](../../../../sources/modelstudioai__cli/packages/cli/src/commands/mcp/call.ts) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/modelstudioai__cli/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tools/browser-probe-localhost-console.js](../../../../sources/modelstudioai__cli/tools/browser-probe-localhost-console.js) | agentRuntime signal |
| agentRuntime | [tools/generate-reference.ts](../../../../sources/modelstudioai__cli/tools/generate-reference.ts) | agentRuntime signal |
| agentRuntime | [tools/sync-skill-metadata.ts](../../../../sources/modelstudioai__cli/tools/sync-skill-metadata.ts) | agentRuntime signal |
| entrypoints | [packages/core/src/index.ts](../../../../sources/modelstudioai__cli/packages/core/src/index.ts) | entrypoints signal |
| entrypoints | [packages/cli/src/main.ts](../../../../sources/modelstudioai__cli/packages/cli/src/main.ts) | entrypoints signal |
| config | [package.json](../../../../sources/modelstudioai__cli/package.json) | config signal |
| config | [pnpm-workspace.yaml](../../../../sources/modelstudioai__cli/pnpm-workspace.yaml) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [packages/core/src/index.ts](../../../../sources/modelstudioai__cli/packages/core/src/index.ts)<br>[packages/cli/src/main.ts](../../../../sources/modelstudioai__cli/packages/cli/src/main.ts) |
| agentRuntime | 63 | [AGENTS.md](../../../../sources/modelstudioai__cli/AGENTS.md)<br>[tools/browser-probe-localhost-console.js](../../../../sources/modelstudioai__cli/tools/browser-probe-localhost-console.js)<br>[tools/generate-reference.ts](../../../../sources/modelstudioai__cli/tools/generate-reference.ts)<br>[tools/sync-skill-metadata.ts](../../../../sources/modelstudioai__cli/tools/sync-skill-metadata.ts)<br>[tools/release/check.mjs](../../../../sources/modelstudioai__cli/tools/release/check.mjs)<br>[tools/release/publish-channel.mjs](../../../../sources/modelstudioai__cli/tools/release/publish-channel.mjs)<br>[tools/release/publish-stable.mjs](../../../../sources/modelstudioai__cli/tools/release/publish-stable.mjs)<br>[tools/release/lib/git.mjs](../../../../sources/modelstudioai__cli/tools/release/lib/git.mjs) |
| mcp | 6 | [skills/bailian-cli/reference/mcp.md](../../../../sources/modelstudioai__cli/skills/bailian-cli/reference/mcp.md)<br>[packages/core/src/client/mcp.ts](../../../../sources/modelstudioai__cli/packages/core/src/client/mcp.ts)<br>[packages/cli/tests/e2e/mcp.e2e.test.ts](../../../../sources/modelstudioai__cli/packages/cli/tests/e2e/mcp.e2e.test.ts)<br>[packages/cli/src/commands/mcp/call.ts](../../../../sources/modelstudioai__cli/packages/cli/src/commands/mcp/call.ts)<br>[packages/cli/src/commands/mcp/list.ts](../../../../sources/modelstudioai__cli/packages/cli/src/commands/mcp/list.ts)<br>[packages/cli/src/commands/mcp/tools.ts](../../../../sources/modelstudioai__cli/packages/cli/src/commands/mcp/tools.ts) |
| retrieval | 29 | [skills/bailian-cli/reference/index.md](../../../../sources/modelstudioai__cli/skills/bailian-cli/reference/index.md)<br>[skills/bailian-cli/reference/knowledge.md](../../../../sources/modelstudioai__cli/skills/bailian-cli/reference/knowledge.md)<br>[skills/bailian-cli/reference/memory.md](../../../../sources/modelstudioai__cli/skills/bailian-cli/reference/memory.md)<br>[packages/core/tests/index.test.ts](../../../../sources/modelstudioai__cli/packages/core/tests/index.test.ts)<br>[packages/core/src/index.ts](../../../../sources/modelstudioai__cli/packages/core/src/index.ts)<br>[packages/core/src/utils/index.ts](../../../../sources/modelstudioai__cli/packages/core/src/utils/index.ts)<br>[packages/core/src/types/index.ts](../../../../sources/modelstudioai__cli/packages/core/src/types/index.ts)<br>[packages/core/src/telemetry/index.ts](../../../../sources/modelstudioai__cli/packages/core/src/telemetry/index.ts) |
| spec | 0 | not obvious |
| eval | 64 | [packages/core/tests/index.test.ts](../../../../sources/modelstudioai__cli/packages/core/tests/index.test.ts)<br>[packages/cli/tests/args.test.ts](../../../../sources/modelstudioai__cli/packages/cli/tests/args.test.ts)<br>[packages/cli/tests/index.test.ts](../../../../sources/modelstudioai__cli/packages/cli/tests/index.test.ts)<br>[packages/cli/tests/proxy.test.ts](../../../../sources/modelstudioai__cli/packages/cli/tests/proxy.test.ts)<br>[packages/cli/tests/stress/run.mjs](../../../../sources/modelstudioai__cli/packages/cli/tests/stress/run.mjs)<br>[packages/cli/tests/stress/stress.defaults.json](../../../../sources/modelstudioai__cli/packages/cli/tests/stress/stress.defaults.json)<br>[packages/cli/tests/stress/targets/image-edit.mjs](../../../../sources/modelstudioai__cli/packages/cli/tests/stress/targets/image-edit.mjs)<br>[packages/cli/tests/stress/targets/image-generate.mjs](../../../../sources/modelstudioai__cli/packages/cli/tests/stress/targets/image-generate.mjs) |
| security | 11 | [skills/bailian-cli/reference/auth.md](../../../../sources/modelstudioai__cli/skills/bailian-cli/reference/auth.md)<br>[packages/core/src/auth/credentials.ts](../../../../sources/modelstudioai__cli/packages/core/src/auth/credentials.ts)<br>[packages/core/src/auth/index.ts](../../../../sources/modelstudioai__cli/packages/core/src/auth/index.ts)<br>[packages/core/src/auth/resolver.ts](../../../../sources/modelstudioai__cli/packages/core/src/auth/resolver.ts)<br>[packages/core/src/auth/types.ts](../../../../sources/modelstudioai__cli/packages/core/src/auth/types.ts)<br>[packages/cli/tests/e2e/auth.e2e.test.ts](../../../../sources/modelstudioai__cli/packages/cli/tests/e2e/auth.e2e.test.ts)<br>[packages/cli/src/commands/auth/login-console.ts](../../../../sources/modelstudioai__cli/packages/cli/src/commands/auth/login-console.ts)<br>[packages/cli/src/commands/auth/login.ts](../../../../sources/modelstudioai__cli/packages/cli/src/commands/auth/login.ts) |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/modelstudioai__cli/.github/workflows/ci.yml)<br>[.github/workflows/publish.yml](../../../../sources/modelstudioai__cli/.github/workflows/publish.yml) |
| container | 0 | not obvious |
| instruction | 1 | [AGENTS.md](../../../../sources/modelstudioai__cli/AGENTS.md) |
| docs | 23 | [README.md](../../../../sources/modelstudioai__cli/README.md)<br>[README.zh.md](../../../../sources/modelstudioai__cli/README.zh.md)<br>[skills/bailian-cli/README.md](../../../../sources/modelstudioai__cli/skills/bailian-cli/README.md)<br>[skills/bailian-cli/README.zh.md](../../../../sources/modelstudioai__cli/skills/bailian-cli/README.zh.md)<br>[packages/core/README.md](../../../../sources/modelstudioai__cli/packages/core/README.md)<br>[packages/core/README.zh.md](../../../../sources/modelstudioai__cli/packages/core/README.zh.md)<br>[packages/cli/README.md](../../../../sources/modelstudioai__cli/packages/cli/README.md)<br>[packages/cli/README.zh.md](../../../../sources/modelstudioai__cli/packages/cli/README.zh.md) |
| config | 7 | [package.json](../../../../sources/modelstudioai__cli/package.json)<br>[pnpm-workspace.yaml](../../../../sources/modelstudioai__cli/pnpm-workspace.yaml)<br>[tsconfig.json](../../../../sources/modelstudioai__cli/tsconfig.json)<br>[packages/core/package.json](../../../../sources/modelstudioai__cli/packages/core/package.json)<br>[packages/core/tsconfig.json](../../../../sources/modelstudioai__cli/packages/core/tsconfig.json)<br>[packages/cli/package.json](../../../../sources/modelstudioai__cli/packages/cli/package.json)<br>[packages/cli/tsconfig.json](../../../../sources/modelstudioai__cli/packages/cli/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 64 | [packages/core/tests/index.test.ts](../../../../sources/modelstudioai__cli/packages/core/tests/index.test.ts)<br>[packages/cli/tests/args.test.ts](../../../../sources/modelstudioai__cli/packages/cli/tests/args.test.ts)<br>[packages/cli/tests/index.test.ts](../../../../sources/modelstudioai__cli/packages/cli/tests/index.test.ts)<br>[packages/cli/tests/proxy.test.ts](../../../../sources/modelstudioai__cli/packages/cli/tests/proxy.test.ts)<br>[packages/cli/tests/stress/run.mjs](../../../../sources/modelstudioai__cli/packages/cli/tests/stress/run.mjs)<br>[packages/cli/tests/stress/stress.defaults.json](../../../../sources/modelstudioai__cli/packages/cli/tests/stress/stress.defaults.json) |
| CI workflows | 2 | [.github/workflows/ci.yml](../../../../sources/modelstudioai__cli/.github/workflows/ci.yml)<br>[.github/workflows/publish.yml](../../../../sources/modelstudioai__cli/.github/workflows/publish.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 11 | [skills/bailian-cli/reference/auth.md](../../../../sources/modelstudioai__cli/skills/bailian-cli/reference/auth.md)<br>[packages/core/src/auth/credentials.ts](../../../../sources/modelstudioai__cli/packages/core/src/auth/credentials.ts)<br>[packages/core/src/auth/index.ts](../../../../sources/modelstudioai__cli/packages/core/src/auth/index.ts)<br>[packages/core/src/auth/resolver.ts](../../../../sources/modelstudioai__cli/packages/core/src/auth/resolver.ts)<br>[packages/core/src/auth/types.ts](../../../../sources/modelstudioai__cli/packages/core/src/auth/types.ts)<br>[packages/cli/tests/e2e/auth.e2e.test.ts](../../../../sources/modelstudioai__cli/packages/cli/tests/e2e/auth.e2e.test.ts) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/modelstudioai__cli/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `skills/bailian-cli/reference/mcp.md`, `packages/core/src/client/mcp.ts`, `packages/cli/tests/e2e/mcp.e2e.test.ts`.
2. Trace execution through entrypoints: `packages/core/src/index.ts`, `packages/cli/src/main.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `tools/browser-probe-localhost-console.js`, `tools/generate-reference.ts`.
4. Inspect retrieval/memory/indexing through: `skills/bailian-cli/reference/index.md`, `skills/bailian-cli/reference/knowledge.md`, `skills/bailian-cli/reference/memory.md`.
5. Verify behavior through test/eval files: `packages/core/tests/index.test.ts`, `packages/cli/tests/args.test.ts`, `packages/cli/tests/index.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Official Model Studio CLI（阿里云百炼 CLI）built for AI Agent frameworks, exposing models, search, multimodal, and workflow cap. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, LICENSE, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
