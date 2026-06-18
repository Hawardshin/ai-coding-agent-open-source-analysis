# svkozak/pi-acp Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

ACP adapter for pi coding agent

## 요약

- 조사 단위: `sources/svkozak__pi-acp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 72 files, 11 directories, depth score 98, key references 11개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, test/component/agent-steering-followup-modes.test.ts, src/acp/agent.ts이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | svkozak/pi-acp |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 455 |
| Forks | 72 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/svkozak__pi-acp](../../../../sources/svkozak__pi-acp) |
| Existing report | [reports/global-trending/repositories/svkozak__pi-acp.md](../../../global-trending/repositories/svkozak__pi-acp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 72 / 11 |
| Max observed depth | 4 |
| Top directories | .github, scripts, src, test |
| Top extensions | .ts: 49, .mjs: 11, .json: 3, .md: 3, (none): 3, .yml: 2, .js: 1 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 6 |
| .github | ci surface | 1 |
| scripts | top-level component | 1 |
| test | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | package.json | dev | tsx src/index.ts |
| build | package.json | build | tsup |
| serve-dev | package.json | start | node dist/index.js |
| quality | package.json | format | prettier . --write |
| quality | package.json | typecheck | tsc --noEmit |
| quality | package.json | lint | eslint . |
| test | package.json | test | node --import tsx --test test/**/*.test.ts |
| utility | package.json | smoke | node scripts/smoke-acp.mjs |
| build | package.json | prepack | npm run build |
| test | package.json | prepublishOnly | npm run test && npm run build |
| entrypoint | package.json bin | index.js | dist/index.js |


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
| agentRuntime | [AGENTS.md](../../../../sources/svkozak__pi-acp/AGENTS.md) | agentRuntime signal |
| agentRuntime | [test/component/agent-steering-followup-modes.test.ts](../../../../sources/svkozak__pi-acp/test/component/agent-steering-followup-modes.test.ts) | agentRuntime signal |
| agentRuntime | [src/acp/agent.ts](../../../../sources/svkozak__pi-acp/src/acp/agent.ts) | agentRuntime signal |
| entrypoints | [src/index.ts](../../../../sources/svkozak__pi-acp/src/index.ts) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/svkozak__pi-acp/CLAUDE.md) | instruction signal |
| config | [package.json](../../../../sources/svkozak__pi-acp/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/svkozak__pi-acp/tsconfig.json) | config signal |
| ci | [.github/workflows/github-release.yml](../../../../sources/svkozak__pi-acp/.github/workflows/github-release.yml) | ci support |
| ci | [.github/workflows/npm-publish.yml](../../../../sources/svkozak__pi-acp/.github/workflows/npm-publish.yml) | ci support |
| eval | [test/unit/auth-methods-terminal-auth-meta.test.ts](../../../../sources/svkozak__pi-acp/test/unit/auth-methods-terminal-auth-meta.test.ts) | eval support |
| eval | [test/unit/builtin-commands.test.ts](../../../../sources/svkozak__pi-acp/test/unit/builtin-commands.test.ts) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [src/index.ts](../../../../sources/svkozak__pi-acp/src/index.ts) |
| agentRuntime | 3 | [AGENTS.md](../../../../sources/svkozak__pi-acp/AGENTS.md)<br>[test/component/agent-steering-followup-modes.test.ts](../../../../sources/svkozak__pi-acp/test/component/agent-steering-followup-modes.test.ts)<br>[src/acp/agent.ts](../../../../sources/svkozak__pi-acp/src/acp/agent.ts) |
| mcp | 0 | not obvious |
| retrieval | 2 | [test/unit/pi-enable-embed-context-flag.test.ts](../../../../sources/svkozak__pi-acp/test/unit/pi-enable-embed-context-flag.test.ts)<br>[src/index.ts](../../../../sources/svkozak__pi-acp/src/index.ts) |
| spec | 0 | not obvious |
| eval | 31 | [test/unit/auth-methods-terminal-auth-meta.test.ts](../../../../sources/svkozak__pi-acp/test/unit/auth-methods-terminal-auth-meta.test.ts)<br>[test/unit/builtin-commands.test.ts](../../../../sources/svkozak__pi-acp/test/unit/builtin-commands.test.ts)<br>[test/unit/merge-commands.test.ts](../../../../sources/svkozak__pi-acp/test/unit/merge-commands.test.ts)<br>[test/unit/new-session-auth-required-when-no-models.test.ts](../../../../sources/svkozak__pi-acp/test/unit/new-session-auth-required-when-no-models.test.ts)<br>[test/unit/new-session-pi-not-found.test.ts](../../../../sources/svkozak__pi-acp/test/unit/new-session-pi-not-found.test.ts)<br>[test/unit/new-session-runtime-startup-errors.test.ts](../../../../sources/svkozak__pi-acp/test/unit/new-session-runtime-startup-errors.test.ts)<br>[test/unit/pi-command.test.ts](../../../../sources/svkozak__pi-acp/test/unit/pi-command.test.ts)<br>[test/unit/pi-commands.test.ts](../../../../sources/svkozak__pi-acp/test/unit/pi-commands.test.ts) |
| security | 4 | [test/unit/auth-methods-terminal-auth-meta.test.ts](../../../../sources/svkozak__pi-acp/test/unit/auth-methods-terminal-auth-meta.test.ts)<br>[test/unit/new-session-auth-required-when-no-models.test.ts](../../../../sources/svkozak__pi-acp/test/unit/new-session-auth-required-when-no-models.test.ts)<br>[src/acp/auth-required.ts](../../../../sources/svkozak__pi-acp/src/acp/auth-required.ts)<br>[src/acp/auth.ts](../../../../sources/svkozak__pi-acp/src/acp/auth.ts) |
| ci | 2 | [.github/workflows/github-release.yml](../../../../sources/svkozak__pi-acp/.github/workflows/github-release.yml)<br>[.github/workflows/npm-publish.yml](../../../../sources/svkozak__pi-acp/.github/workflows/npm-publish.yml) |
| container | 0 | not obvious |
| instruction | 2 | [AGENTS.md](../../../../sources/svkozak__pi-acp/AGENTS.md)<br>[CLAUDE.md](../../../../sources/svkozak__pi-acp/CLAUDE.md) |
| docs | 1 | [README.md](../../../../sources/svkozak__pi-acp/README.md) |
| config | 2 | [package.json](../../../../sources/svkozak__pi-acp/package.json)<br>[tsconfig.json](../../../../sources/svkozak__pi-acp/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 31 | [test/unit/auth-methods-terminal-auth-meta.test.ts](../../../../sources/svkozak__pi-acp/test/unit/auth-methods-terminal-auth-meta.test.ts)<br>[test/unit/builtin-commands.test.ts](../../../../sources/svkozak__pi-acp/test/unit/builtin-commands.test.ts)<br>[test/unit/merge-commands.test.ts](../../../../sources/svkozak__pi-acp/test/unit/merge-commands.test.ts)<br>[test/unit/new-session-auth-required-when-no-models.test.ts](../../../../sources/svkozak__pi-acp/test/unit/new-session-auth-required-when-no-models.test.ts)<br>[test/unit/new-session-pi-not-found.test.ts](../../../../sources/svkozak__pi-acp/test/unit/new-session-pi-not-found.test.ts)<br>[test/unit/new-session-runtime-startup-errors.test.ts](../../../../sources/svkozak__pi-acp/test/unit/new-session-runtime-startup-errors.test.ts) |
| CI workflows | 2 | [.github/workflows/github-release.yml](../../../../sources/svkozak__pi-acp/.github/workflows/github-release.yml)<br>[.github/workflows/npm-publish.yml](../../../../sources/svkozak__pi-acp/.github/workflows/npm-publish.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 4 | [test/unit/auth-methods-terminal-auth-meta.test.ts](../../../../sources/svkozak__pi-acp/test/unit/auth-methods-terminal-auth-meta.test.ts)<br>[test/unit/new-session-auth-required-when-no-models.test.ts](../../../../sources/svkozak__pi-acp/test/unit/new-session-auth-required-when-no-models.test.ts)<br>[src/acp/auth-required.ts](../../../../sources/svkozak__pi-acp/src/acp/auth-required.ts)<br>[src/acp/auth.ts](../../../../sources/svkozak__pi-acp/src/acp/auth.ts) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/svkozak__pi-acp/AGENTS.md)<br>[CLAUDE.md](../../../../sources/svkozak__pi-acp/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `AGENTS.md`, `test/component/agent-steering-followup-modes.test.ts`, `src/acp/agent.ts`.
2. Trace execution through entrypoints: `src/index.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `test/component/agent-steering-followup-modes.test.ts`, `src/acp/agent.ts`.
4. Inspect retrieval/memory/indexing through: `test/unit/pi-enable-embed-context-flag.test.ts`, `src/index.ts`.
5. Verify behavior through test/eval files: `test/unit/auth-methods-terminal-auth-meta.test.ts`, `test/unit/builtin-commands.test.ts`, `test/unit/merge-commands.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 ACP adapter for pi coding agent. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
