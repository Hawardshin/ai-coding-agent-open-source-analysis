# NickCirv/engram Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

The context spine that 10x's every AI coding session. Live in 8 IDEs (Claude Code, Cursor, Cline, Continue, Aider, Codex, Windsurf, Zed) via npm + OpenVSX + Anthropic plugin directory. 89% measured token reduction. Local SQLite, zero cloud, Apache 2.0.

## 요약

- 조사 단위: `sources/NickCirv__engram` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 343 files, 84 directories, depth score 120, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/providers/mcp-config.test.ts, src/providers/mcp-client.ts, src/providers/mcp-config.ts이고, 의존성 단서는 modelcontextprotocol, commander, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | NickCirv/engram |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 133 |
| Forks | 13 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/NickCirv__engram](../../../../sources/NickCirv__engram) |
| Existing report | [reports/global-trending/repositories/NickCirv__engram.md](../../../global-trending/repositories/NickCirv__engram.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 343 / 84 |
| Max observed depth | 6 |
| Top directories | .github, adapters, assets, bench, demo, docs, extensions, plugins, scripts, src, tests |
| Top extensions | .ts: 204, .md: 68, .json: 19, .yaml: 10, .png: 9, (none): 8, .html: 7, .mjs: 5, .sh: 3, .cast: 2, .vtt: 2, .csv: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 69 |
| docs | documentation surface | 57 |
| src | source boundary | 31 |
| .github | ci surface | 1 |
| adapters | top-level component | 1 |
| assets | top-level component | 1 |
| bench | validation surface | 1 |
| demo | top-level component | 1 |
| extensions | top-level component | 1 |
| plugins | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | tsup && node scripts/bundle-grammars.mjs |
| build | package.json | build:nogrammars | tsup |
| serve-dev | package.json | dev | tsup --watch |
| test | package.json | test | vitest |
| quality | package.json | lint | tsc --noEmit |
| build | package.json | prepublishOnly | npm run build |
| utility | package.json | bench | tsx bench/runner.ts |
| test | package.json | stress | tsx bench/stress-test.ts |
| utility | package.json | postinstall | node scripts/postinstall.mjs |
| utility | package.json | preuninstall | node scripts/preuninstall.mjs |
| utility | package.json | demo | tsx demo/run.ts |
| test | package.json | bench:recall | tsx bench/recall-coverage.ts |
| entrypoint | package.json bin | cli.js | dist/cli.js |
| entrypoint | package.json bin | cli.js | dist/cli.js |
| entrypoint | package.json bin | serve.js | dist/serve.js |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | commander |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [tests/providers/mcp-config.test.ts](../../../../sources/NickCirv__engram/tests/providers/mcp-config.test.ts) | mcp signal |
| mcp | [src/providers/mcp-client.ts](../../../../sources/NickCirv__engram/src/providers/mcp-client.ts) | mcp signal |
| mcp | [src/providers/mcp-config.ts](../../../../sources/NickCirv__engram/src/providers/mcp-config.ts) | mcp signal |
| mcp | [scripts/mcp-engram](../../../../sources/NickCirv__engram/scripts/mcp-engram) | mcp signal |
| agentRuntime | [CONTEXT.md](../../../../sources/NickCirv__engram/CONTEXT.md) | agentRuntime signal |
| agentRuntime | [tests/skills-miner.test.ts](../../../../sources/NickCirv__engram/tests/skills-miner.test.ts) | agentRuntime signal |
| agentRuntime | [tests/intercept/context.test.ts](../../../../sources/NickCirv__engram/tests/intercept/context.test.ts) | agentRuntime signal |
| agentRuntime | [tests/intercept/hook-log.test.ts](../../../../sources/NickCirv__engram/tests/intercept/hook-log.test.ts) | agentRuntime signal |
| entrypoints | [server.json](../../../../sources/NickCirv__engram/server.json) | entrypoints signal |
| entrypoints | [src/cli.ts](../../../../sources/NickCirv__engram/src/cli.ts) | entrypoints signal |
| entrypoints | [src/index.ts](../../../../sources/NickCirv__engram/src/index.ts) | entrypoints signal |
| entrypoints | [adapters/continue/src/index.ts](../../../../sources/NickCirv__engram/adapters/continue/src/index.ts) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 4 | [server.json](../../../../sources/NickCirv__engram/server.json)<br>[src/cli.ts](../../../../sources/NickCirv__engram/src/cli.ts)<br>[src/index.ts](../../../../sources/NickCirv__engram/src/index.ts)<br>[adapters/continue/src/index.ts](../../../../sources/NickCirv__engram/adapters/continue/src/index.ts) |
| agentRuntime | 27 | [CONTEXT.md](../../../../sources/NickCirv__engram/CONTEXT.md)<br>[tests/skills-miner.test.ts](../../../../sources/NickCirv__engram/tests/skills-miner.test.ts)<br>[tests/intercept/context.test.ts](../../../../sources/NickCirv__engram/tests/intercept/context.test.ts)<br>[tests/intercept/hook-log.test.ts](../../../../sources/NickCirv__engram/tests/intercept/hook-log.test.ts)<br>[tests/intercept/memory-md.test.ts](../../../../sources/NickCirv__engram/tests/intercept/memory-md.test.ts)<br>[tests/fixtures/skills/unicode/SKILL.md](../../../../sources/NickCirv__engram/tests/fixtures/skills/unicode/SKILL.md)<br>[tests/fixtures/skills/normal/SKILL.md](../../../../sources/NickCirv__engram/tests/fixtures/skills/normal/SKILL.md)<br>[tests/fixtures/skills/multiline/SKILL.md](../../../../sources/NickCirv__engram/tests/fixtures/skills/multiline/SKILL.md) |
| mcp | 6 | [tests/providers/mcp-config.test.ts](../../../../sources/NickCirv__engram/tests/providers/mcp-config.test.ts)<br>[src/providers/mcp-client.ts](../../../../sources/NickCirv__engram/src/providers/mcp-client.ts)<br>[src/providers/mcp-config.ts](../../../../sources/NickCirv__engram/src/providers/mcp-config.ts)<br>[scripts/mcp-engram](../../../../sources/NickCirv__engram/scripts/mcp-engram)<br>[plugins/anthropic-marketplace/engram/.mcp.json](../../../../sources/NickCirv__engram/plugins/anthropic-marketplace/engram/.mcp.json)<br>[docs/integrations/cursor-mcp.md](../../../../sources/NickCirv__engram/docs/integrations/cursor-mcp.md) |
| retrieval | 29 | [tests/mistake-memory.test.ts](../../../../sources/NickCirv__engram/tests/mistake-memory.test.ts)<br>[tests/providers/anthropic-memory.test.ts](../../../../sources/NickCirv__engram/tests/providers/anthropic-memory.test.ts)<br>[tests/intercept/memory-md.test.ts](../../../../sources/NickCirv__engram/tests/intercept/memory-md.test.ts)<br>[tests/graph/pagerank.test.ts](../../../../sources/NickCirv__engram/tests/graph/pagerank.test.ts)<br>[tests/graph/traversal.test.ts](../../../../sources/NickCirv__engram/tests/graph/traversal.test.ts)<br>[tests/fixtures/memory-md/sample-index.md](../../../../sources/NickCirv__engram/tests/fixtures/memory-md/sample-index.md)<br>[src/index.ts](../../../../sources/NickCirv__engram/src/index.ts)<br>[src/tuner/index.ts](../../../../sources/NickCirv__engram/src/tuner/index.ts) |
| spec | 16 | [docs/specs/2026-04-13-context-spine-design.md](../../../../sources/NickCirv__engram/docs/specs/2026-04-13-context-spine-design.md)<br>[docs/specs/engram-v2-roadmap.md](../../../../sources/NickCirv__engram/docs/specs/engram-v2-roadmap.md)<br>[docs/adr/0001-grep-symbol-intercept.md](../../../../sources/NickCirv__engram/docs/adr/0001-grep-symbol-intercept.md)<br>[docs/adr/0002-session-level-bench.md](../../../../sources/NickCirv__engram/docs/adr/0002-session-level-bench.md)<br>[docs/adr/0003-same-session-read-dedup.md](../../../../sources/NickCirv__engram/docs/adr/0003-same-session-read-dedup.md)<br>[docs/adr/0004-grep-richer-find-usages.md](../../../../sources/NickCirv__engram/docs/adr/0004-grep-richer-find-usages.md)<br>[docs/adr/0005-bash-grep-interception.md](../../../../sources/NickCirv__engram/docs/adr/0005-bash-grep-interception.md)<br>[docs/adr/0006-honest-before-after-demo.md](../../../../sources/NickCirv__engram/docs/adr/0006-honest-before-after-demo.md) |
| eval | 124 | [tests/ast-miner.test.ts](../../../../sources/NickCirv__engram/tests/ast-miner.test.ts)<br>[tests/autogen.test.ts](../../../../sources/NickCirv__engram/tests/autogen.test.ts)<br>[tests/bench-stats.test.ts](../../../../sources/NickCirv__engram/tests/bench-stats.test.ts)<br>[tests/cache.test.ts](../../../../sources/NickCirv__engram/tests/cache.test.ts)<br>[tests/cli-guards.test.ts](../../../../sources/NickCirv__engram/tests/cli-guards.test.ts)<br>[tests/core-packet-ratio.test.ts](../../../../sources/NickCirv__engram/tests/core-packet-ratio.test.ts)<br>[tests/core.test.ts](../../../../sources/NickCirv__engram/tests/core.test.ts)<br>[tests/cost-instrument.test.ts](../../../../sources/NickCirv__engram/tests/cost-instrument.test.ts) |
| security | 8 | [SECURITY.md](../../../../sources/NickCirv__engram/SECURITY.md)<br>[tests/server/security.test.ts](../../../../sources/NickCirv__engram/tests/server/security.test.ts)<br>[tests/mesh/audit.test.ts](../../../../sources/NickCirv__engram/tests/mesh/audit.test.ts)<br>[tests/intercept/mistake-guard-invocation.test.ts](../../../../sources/NickCirv__engram/tests/intercept/mistake-guard-invocation.test.ts)<br>[tests/intercept/handlers/mistake-guard.test.ts](../../../../sources/NickCirv__engram/tests/intercept/handlers/mistake-guard.test.ts)<br>[src/server/auth.ts](../../../../sources/NickCirv__engram/src/server/auth.ts)<br>[src/mesh/audit.ts](../../../../sources/NickCirv__engram/src/mesh/audit.ts)<br>[src/intercept/handlers/mistake-guard.ts](../../../../sources/NickCirv__engram/src/intercept/handlers/mistake-guard.ts) |
| ci | 1 | [.github/workflows/ci.yml](../../../../sources/NickCirv__engram/.github/workflows/ci.yml) |
| container | 0 | not obvious |
| instruction | 3 | [CLAUDE.md](../../../../sources/NickCirv__engram/CLAUDE.md)<br>[docs/demos/hf/AGENTS.md](../../../../sources/NickCirv__engram/docs/demos/hf/AGENTS.md)<br>[docs/demos/hf/CLAUDE.md](../../../../sources/NickCirv__engram/docs/demos/hf/CLAUDE.md) |
| docs | 65 | [README.md](../../../../sources/NickCirv__engram/README.md)<br>[tests/fixtures/hook-payloads/README.md](../../../../sources/NickCirv__engram/tests/fixtures/hook-payloads/README.md)<br>[plugins/anthropic-marketplace/engram/README.md](../../../../sources/NickCirv__engram/plugins/anthropic-marketplace/engram/README.md)<br>[extensions/vscode/README.md](../../../../sources/NickCirv__engram/extensions/vscode/README.md)<br>[docs/COMPARISON.md](../../../../sources/NickCirv__engram/docs/COMPARISON.md)<br>[docs/engram-integration-guide.html](../../../../sources/NickCirv__engram/docs/engram-integration-guide.html)<br>[docs/engram-sentinel-ecosystem.html](../../../../sources/NickCirv__engram/docs/engram-sentinel-ecosystem.html)<br>[docs/engram-sentinel-ecosystem.pdf](../../../../sources/NickCirv__engram/docs/engram-sentinel-ecosystem.pdf) |
| config | 6 | [package.json](../../../../sources/NickCirv__engram/package.json)<br>[tsconfig.json](../../../../sources/NickCirv__engram/tsconfig.json)<br>[extensions/vscode/package.json](../../../../sources/NickCirv__engram/extensions/vscode/package.json)<br>[extensions/vscode/tsconfig.json](../../../../sources/NickCirv__engram/extensions/vscode/tsconfig.json)<br>[adapters/continue/package.json](../../../../sources/NickCirv__engram/adapters/continue/package.json)<br>[adapters/continue/tsconfig.json](../../../../sources/NickCirv__engram/adapters/continue/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 124 | [tests/ast-miner.test.ts](../../../../sources/NickCirv__engram/tests/ast-miner.test.ts)<br>[tests/autogen.test.ts](../../../../sources/NickCirv__engram/tests/autogen.test.ts)<br>[tests/bench-stats.test.ts](../../../../sources/NickCirv__engram/tests/bench-stats.test.ts)<br>[tests/cache.test.ts](../../../../sources/NickCirv__engram/tests/cache.test.ts)<br>[tests/cli-guards.test.ts](../../../../sources/NickCirv__engram/tests/cli-guards.test.ts)<br>[tests/core-packet-ratio.test.ts](../../../../sources/NickCirv__engram/tests/core-packet-ratio.test.ts) |
| CI workflows | 1 | [.github/workflows/ci.yml](../../../../sources/NickCirv__engram/.github/workflows/ci.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 8 | [SECURITY.md](../../../../sources/NickCirv__engram/SECURITY.md)<br>[tests/server/security.test.ts](../../../../sources/NickCirv__engram/tests/server/security.test.ts)<br>[tests/mesh/audit.test.ts](../../../../sources/NickCirv__engram/tests/mesh/audit.test.ts)<br>[tests/intercept/mistake-guard-invocation.test.ts](../../../../sources/NickCirv__engram/tests/intercept/mistake-guard-invocation.test.ts)<br>[tests/intercept/handlers/mistake-guard.test.ts](../../../../sources/NickCirv__engram/tests/intercept/handlers/mistake-guard.test.ts)<br>[src/server/auth.ts](../../../../sources/NickCirv__engram/src/server/auth.ts) |
| Agent instructions | 3 | [CLAUDE.md](../../../../sources/NickCirv__engram/CLAUDE.md)<br>[docs/demos/hf/AGENTS.md](../../../../sources/NickCirv__engram/docs/demos/hf/AGENTS.md)<br>[docs/demos/hf/CLAUDE.md](../../../../sources/NickCirv__engram/docs/demos/hf/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/providers/mcp-config.test.ts`, `src/providers/mcp-client.ts`, `src/providers/mcp-config.ts`.
2. Trace execution through entrypoints: `server.json`, `src/cli.ts`, `src/index.ts`.
3. Map agent/tool runtime through: `CONTEXT.md`, `tests/skills-miner.test.ts`, `tests/intercept/context.test.ts`.
4. Inspect retrieval/memory/indexing through: `tests/mistake-memory.test.ts`, `tests/providers/anthropic-memory.test.ts`, `tests/intercept/memory-md.test.ts`.
5. Verify behavior through test/eval files: `tests/ast-miner.test.ts`, `tests/autogen.test.ts`, `tests/bench-stats.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 The context spine that 10x's every AI coding session. Live in 8 IDEs Claude Code, Cursor, Cline, Continue, Aider, Codex,. 핵심 구조 신호는 TypeScript, package.json, README.md, CLAUDE.md, LICENSE, modelcontextprotocol이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
