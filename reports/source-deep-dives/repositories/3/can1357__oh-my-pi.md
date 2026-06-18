# can1357/oh-my-pi Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 4212 files, 456 directories.

## 요약

- 조사 단위: `sources/can1357__oh-my-pi` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 4,210 files, 455 directories, depth score 138, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=packages/mnemopi/test/mcp-server.test.ts, packages/mnemopi/src/mcp-server.ts, packages/mnemopi/src/mcp-tools.ts이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | can1357/oh-my-pi |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 13165 |
| Forks | 1121 |
| License | none |
| Maturity | high-signal |
| Evidence | deep-source+report |
| Source | [sources/can1357__oh-my-pi](../../../../sources/can1357__oh-my-pi) |
| Existing report | [reports/global-trending/repositories/can1357__oh-my-pi.md](../../../global-trending/repositories/can1357__oh-my-pi.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 4210 / 455 |
| Max observed depth | 11 |
| Top directories | .github, .omp, assets, crates, docs, infra, packages, patches, python, scripts, types |
| Top extensions | .ts: 2764, .md: 421, .rs: 243, .json: 176, .py: 160, .txt: 99, .tsx: 91, .toml: 82, .png: 24, .cmd: 20, .raw: 20, .yml: 13 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/coding-agent | packages workspace | 85 |
| packages/mnemopi | packages workspace | 34 |
| packages/collab-web | packages workspace | 33 |
| docs | documentation surface | 16 |
| packages/stats | packages workspace | 9 |
| packages/ai | packages workspace | 7 |
| packages/natives | packages workspace | 6 |
| packages/swarm-extension | packages workspace | 6 |
| packages/typescript-edit-benchmark | packages workspace | 6 |
| packages/utils | packages workspace | 6 |
| packages/hashline | packages workspace | 5 |
| packages/snapcompact | packages workspace | 5 |
| packages/tui | packages workspace | 5 |
| packages/wire | packages workspace | 5 |
| packages/agent | packages workspace | 4 |
| packages/catalog | packages workspace | 4 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | package.json | install:dev | bun install && bun --cwd=packages/coding-agent link && ln -sfn "$(pwd)/packages/coding-agent/scripts/omp" "$(bun pm -g bin)/omp" |
| serve-dev | package.json | dev | bun --cwd=packages/coding-agent src/cli.ts |
| serve-dev | package.json | dev:timing | PI_TIMING=x bun --cwd=packages/coding-agent --preload ../utils/src/module-timer.ts src/cli.ts |
| utility | package.json | stats | bun --cwd=packages/coding-agent src/cli.ts stats |
| serve-dev | package.json | collab:web:dev | bun --cwd=packages/collab-web run dev |
| utility | package.json | collab:relay | bun --cwd=packages/collab-web run relay |
| utility | package.json | collab:mock-host | bun --cwd=packages/collab-web run mock-host |
| build | package.json | collab:web:build | bun --cwd=packages/collab-web run build |
| utility | package.json | claude:trace | bun scripts/claude-trace.ts |
| build | package.json | build | bun run --workspaces --if-present build |
| build | package.json | build:native | bun --cwd=packages/natives run build |
| test | package.json | test | bun run --parallel test:ts test:rs |
| test | package.json | test:ts | GITHUB_ACTIONS= bun run --workspaces --if-present test -- --only-failures && bun run test:scripts |
| test | package.json | test:scripts | bun test scripts/ci-concurrency.test.ts scripts/ci-release-notes.test.ts |
| test | package.json | test:rs | bun scripts/run-rs-task.ts test:rs |
| quality | package.json | check | bun run --parallel check:ts check:rs |
| quality | package.json | check:ts | bun run check:tools && bun run --workspaces --if-present check |
| quality | package.json | check:tools | biome check . --no-errors-on-unmatched |
| quality | package.json | check:rs | bun scripts/run-rs-task.ts check:rs |
| quality | package.json | lint | bun run --parallel lint:ts lint:rs |
| quality | package.json | lint:ts | bun run --parallel lint:tools && bun run --workspaces --if-present lint |
| quality | package.json | lint:tools | biome lint . --no-errors-on-unmatched |
| quality | package.json | lint:rs | bun scripts/run-rs-task.ts lint:rs |
| quality | package.json | fmt | bun run --parallel fmt:ts fmt:rs |
| quality | package.json | fmt:ts | bun run fmt:tools && bun run --workspaces --if-present fmt |
| quality | package.json | fmt:tools | biome format --write . --no-errors-on-unmatched |
| quality | package.json | fmt:rs | bun scripts/run-rs-task.ts fmt:rs |
| utility | package.json | fix | bun run --parallel fix:ts fix:rs |
| utility | package.json | fix:all | bun run --parallel fix:ts:all fix:rs fix:changelogs |
| utility | package.json | fix:ts | bun run fix:tools && bun run --workspaces --if-present fix |
| utility | package.json | fix:ts:all | bun run fix:tools:all && bun run --workspaces --if-present fix |
| quality | package.json | fix:tools | biome check --write --unsafe --changed --no-errors-on-unmatched . |
| quality | package.json | fix:tools:all | biome check --write --unsafe --no-errors-on-unmatched . |
| utility | package.json | fix:changelogs | bun scripts/fix-changelogs.ts |
| utility | package.json | fix:rs | bun scripts/run-rs-task.ts fix:rs |
| quality | package.json | ci:check:full | bun run check:ts |
| build | package.json | ci:build:native | bun scripts/ci-build-native.ts |
| test | package.json | ci:test:full | bun run ci:test:ts && bun run test:rs |
| test | package.json | ci:test:ts | bun scripts/ci-test-ts.ts all |
| test | package.json | ci:test:ts:workspace | bun scripts/ci-test-ts.ts workspace |


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
| mcp | [packages/mnemopi/test/mcp-server.test.ts](../../../../sources/can1357__oh-my-pi/packages/mnemopi/test/mcp-server.test.ts) | mcp signal |
| mcp | [packages/mnemopi/src/mcp-server.ts](../../../../sources/can1357__oh-my-pi/packages/mnemopi/src/mcp-server.ts) | mcp signal |
| mcp | [packages/mnemopi/src/mcp-tools.ts](../../../../sources/can1357__oh-my-pi/packages/mnemopi/src/mcp-tools.ts) | mcp signal |
| mcp | [packages/coding-agent/test/acp-mcp-isolation.test.ts](../../../../sources/can1357__oh-my-pi/packages/coding-agent/test/acp-mcp-isolation.test.ts) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/can1357__oh-my-pi/AGENTS.md) | agentRuntime signal |
| agentRuntime | [scripts/tool_io.py](../../../../sources/can1357__oh-my-pi/scripts/tool_io.py) | agentRuntime signal |
| agentRuntime | [scripts/tool-prompt-usage.ts](../../../../sources/can1357__oh-my-pi/scripts/tool-prompt-usage.ts) | agentRuntime signal |
| agentRuntime | [scripts/session-stats/out/tool-trends.png](../../../../sources/can1357__oh-my-pi/scripts/session-stats/out/tool-trends.png) | agentRuntime signal |
| entrypoints | [python/robomp/web/src/App.tsx](../../../../sources/can1357__oh-my-pi/python/robomp/web/src/App.tsx) | entrypoints signal |
| entrypoints | [python/robomp/web/src/main.tsx](../../../../sources/can1357__oh-my-pi/python/robomp/web/src/main.tsx) | entrypoints signal |
| entrypoints | [python/robomp/src/__main__.py](../../../../sources/can1357__oh-my-pi/python/robomp/src/__main__.py) | entrypoints signal |
| entrypoints | [python/robomp/src/cli.py](../../../../sources/can1357__oh-my-pi/python/robomp/src/cli.py) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 35 | [python/robomp/web/src/App.tsx](../../../../sources/can1357__oh-my-pi/python/robomp/web/src/App.tsx)<br>[python/robomp/web/src/main.tsx](../../../../sources/can1357__oh-my-pi/python/robomp/web/src/main.tsx)<br>[python/robomp/src/__main__.py](../../../../sources/can1357__oh-my-pi/python/robomp/src/__main__.py)<br>[python/robomp/src/cli.py](../../../../sources/can1357__oh-my-pi/python/robomp/src/cli.py)<br>[python/robomp/src/server.py](../../../../sources/can1357__oh-my-pi/python/robomp/src/server.py)<br>[python/robomp/src/proxy/__main__.py](../../../../sources/can1357__oh-my-pi/python/robomp/src/proxy/__main__.py)<br>[python/robomp/src/proxy/server.py](../../../../sources/can1357__oh-my-pi/python/robomp/src/proxy/server.py)<br>[packages/wire/src/index.ts](../../../../sources/can1357__oh-my-pi/packages/wire/src/index.ts) |
| agentRuntime | 620 | [AGENTS.md](../../../../sources/can1357__oh-my-pi/AGENTS.md)<br>[scripts/tool_io.py](../../../../sources/can1357__oh-my-pi/scripts/tool_io.py)<br>[scripts/tool-prompt-usage.ts](../../../../sources/can1357__oh-my-pi/scripts/tool-prompt-usage.ts)<br>[scripts/session-stats/out/tool-trends.png](../../../../sources/can1357__oh-my-pi/scripts/session-stats/out/tool-trends.png)<br>[python/robomp/AGENTS.md](../../../../sources/can1357__oh-my-pi/python/robomp/AGENTS.md)<br>[python/robomp/src/sandbox.py](../../../../sources/can1357__oh-my-pi/python/robomp/src/sandbox.py)<br>[packages/typescript-edit-benchmark/test/runner.test.ts](../../../../sources/can1357__oh-my-pi/packages/typescript-edit-benchmark/test/runner.test.ts)<br>[packages/typescript-edit-benchmark/src/runner.ts](../../../../sources/can1357__oh-my-pi/packages/typescript-edit-benchmark/src/runner.ts) |
| mcp | 70 | [packages/mnemopi/test/mcp-server.test.ts](../../../../sources/can1357__oh-my-pi/packages/mnemopi/test/mcp-server.test.ts)<br>[packages/mnemopi/src/mcp-server.ts](../../../../sources/can1357__oh-my-pi/packages/mnemopi/src/mcp-server.ts)<br>[packages/mnemopi/src/mcp-tools.ts](../../../../sources/can1357__oh-my-pi/packages/mnemopi/src/mcp-tools.ts)<br>[packages/coding-agent/test/acp-mcp-isolation.test.ts](../../../../sources/can1357__oh-my-pi/packages/coding-agent/test/acp-mcp-isolation.test.ts)<br>[packages/coding-agent/test/agent-session-mcp-discovery.test.ts](../../../../sources/can1357__oh-my-pi/packages/coding-agent/test/agent-session-mcp-discovery.test.ts)<br>[packages/coding-agent/test/interactive-mode-mcp-connecting.test.ts](../../../../sources/can1357__oh-my-pi/packages/coding-agent/test/interactive-mode-mcp-connecting.test.ts)<br>[packages/coding-agent/test/mcp-command-reauth.test.ts](../../../../sources/can1357__oh-my-pi/packages/coding-agent/test/mcp-command-reauth.test.ts)<br>[packages/coding-agent/test/mcp-discovered-server-reauth.test.ts](../../../../sources/can1357__oh-my-pi/packages/coding-agent/test/mcp-discovered-server-reauth.test.ts) |
| retrieval | 154 | [types/assets/index.d.ts](../../../../sources/can1357__oh-my-pi/types/assets/index.d.ts)<br>[python/robomp/web/index.html](../../../../sources/can1357__oh-my-pi/python/robomp/web/index.html)<br>[python/robomp/web/src/styles/index.css](../../../../sources/can1357__oh-my-pi/python/robomp/web/src/styles/index.css)<br>[packages/wire/src/index.ts](../../../../sources/can1357__oh-my-pi/packages/wire/src/index.ts)<br>[packages/utils/src/index.ts](../../../../sources/can1357__oh-my-pi/packages/utils/src/index.ts)<br>[packages/typescript-edit-benchmark/src/index.ts](../../../../sources/can1357__oh-my-pi/packages/typescript-edit-benchmark/src/index.ts)<br>[packages/tui/src/index.ts](../../../../sources/can1357__oh-my-pi/packages/tui/src/index.ts)<br>[packages/stats/src/index.ts](../../../../sources/can1357__oh-my-pi/packages/stats/src/index.ts) |
| spec | 3 | [docs/blob-artifact-architecture.md](../../../../sources/can1357__oh-my-pi/docs/blob-artifact-architecture.md)<br>[docs/fs-scan-cache-architecture.md](../../../../sources/can1357__oh-my-pi/docs/fs-scan-cache-architecture.md)<br>[docs/natives-architecture.md](../../../../sources/can1357__oh-my-pi/docs/natives-architecture.md) |
| eval | 1545 | [scripts/ci-concurrency.test.ts](../../../../sources/can1357__oh-my-pi/scripts/ci-concurrency.test.ts)<br>[scripts/ci-release-notes.test.ts](../../../../sources/can1357__oh-my-pi/scripts/ci-release-notes.test.ts)<br>[scripts/ci-test-ts.ts](../../../../sources/can1357__oh-my-pi/scripts/ci-test-ts.ts)<br>[scripts/ci-update-brew-formula.test.ts](../../../../sources/can1357__oh-my-pi/scripts/ci-update-brew-formula.test.ts)<br>[scripts/claude-trace.ts](../../../../sources/can1357__oh-my-pi/scripts/claude-trace.ts)<br>[scripts/edit_benchmark_common.py](../../../../sources/can1357__oh-my-pi/scripts/edit_benchmark_common.py)<br>[scripts/edit-benchmark.py](../../../../sources/can1357__oh-my-pi/scripts/edit-benchmark.py)<br>[scripts/eval-bench-runs.ts](../../../../sources/can1357__oh-my-pi/scripts/eval-bench-runs.ts) |
| security | 137 | [scripts/session-stats/audit-prompt.md](../../../../sources/can1357__oh-my-pi/scripts/session-stats/audit-prompt.md)<br>[scripts/session-stats/audit.test.ts](../../../../sources/can1357__oh-my-pi/scripts/session-stats/audit.test.ts)<br>[scripts/session-stats/audit.ts](../../../../sources/can1357__oh-my-pi/scripts/session-stats/audit.ts)<br>[python/robomp/tests/test_sandbox.py](../../../../sources/can1357__oh-my-pi/python/robomp/tests/test_sandbox.py)<br>[python/robomp/src/sandbox.py](../../../../sources/can1357__oh-my-pi/python/robomp/src/sandbox.py)<br>[packages/coding-agent/test/active-oauth-account.test.ts](../../../../sources/can1357__oh-my-pi/packages/coding-agent/test/active-oauth-account.test.ts)<br>[packages/coding-agent/test/agent-session-acp-permission.test.ts](../../../../sources/can1357__oh-my-pi/packages/coding-agent/test/agent-session-acp-permission.test.ts)<br>[packages/coding-agent/test/agent-session-empty-stop-guard.test.ts](../../../../sources/can1357__oh-my-pi/packages/coding-agent/test/agent-session-empty-stop-guard.test.ts) |
| ci | 1 | [.github/workflows/ci.yml](../../../../sources/can1357__oh-my-pi/.github/workflows/ci.yml) |
| container | 5 | [Dockerfile](../../../../sources/can1357__oh-my-pi/Dockerfile)<br>[Dockerfile.dockerignore](../../../../sources/can1357__oh-my-pi/Dockerfile.dockerignore)<br>[Dockerfile.robomp](../../../../sources/can1357__oh-my-pi/Dockerfile.robomp)<br>[Dockerfile.robomp.dockerignore](../../../../sources/can1357__oh-my-pi/Dockerfile.robomp.dockerignore)<br>[python/robomp/docker-compose.yml](../../../../sources/can1357__oh-my-pi/python/robomp/docker-compose.yml) |
| instruction | 4 | [AGENTS.md](../../../../sources/can1357__oh-my-pi/AGENTS.md)<br>[python/robomp/AGENTS.md](../../../../sources/can1357__oh-my-pi/python/robomp/AGENTS.md)<br>[packages/ai/src/dialect/gemini.md](../../../../sources/can1357__oh-my-pi/packages/ai/src/dialect/gemini.md)<br>[docs/toolconv/gemini.md](../../../../sources/can1357__oh-my-pi/docs/toolconv/gemini.md) |
| docs | 151 | [README.md](../../../../sources/can1357__oh-my-pi/README.md)<br>[scripts/session-stats/README.md](../../../../sources/can1357__oh-my-pi/scripts/session-stats/README.md)<br>[python/robomp/README.md](../../../../sources/can1357__oh-my-pi/python/robomp/README.md)<br>[python/robomp/docs/pr-review-handoff.md](../../../../sources/can1357__oh-my-pi/python/robomp/docs/pr-review-handoff.md)<br>[python/omp-rpc/README.md](../../../../sources/can1357__oh-my-pi/python/omp-rpc/README.md)<br>[packages/wire/README.md](../../../../sources/can1357__oh-my-pi/packages/wire/README.md)<br>[packages/utils/README.md](../../../../sources/can1357__oh-my-pi/packages/utils/README.md)<br>[packages/tui/README.md](../../../../sources/can1357__oh-my-pi/packages/tui/README.md) |
| config | 50 | [Cargo.lock](../../../../sources/can1357__oh-my-pi/Cargo.lock)<br>[Cargo.toml](../../../../sources/can1357__oh-my-pi/Cargo.toml)<br>[package.json](../../../../sources/can1357__oh-my-pi/package.json)<br>[tsconfig.json](../../../../sources/can1357__oh-my-pi/tsconfig.json)<br>[python/robomp/pyproject.toml](../../../../sources/can1357__oh-my-pi/python/robomp/pyproject.toml)<br>[python/robomp/web/package.json](../../../../sources/can1357__oh-my-pi/python/robomp/web/package.json)<br>[python/robomp/web/tsconfig.json](../../../../sources/can1357__oh-my-pi/python/robomp/web/tsconfig.json)<br>[python/omp-rpc/pyproject.toml](../../../../sources/can1357__oh-my-pi/python/omp-rpc/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1545 | [scripts/ci-concurrency.test.ts](../../../../sources/can1357__oh-my-pi/scripts/ci-concurrency.test.ts)<br>[scripts/ci-release-notes.test.ts](../../../../sources/can1357__oh-my-pi/scripts/ci-release-notes.test.ts)<br>[scripts/ci-test-ts.ts](../../../../sources/can1357__oh-my-pi/scripts/ci-test-ts.ts)<br>[scripts/ci-update-brew-formula.test.ts](../../../../sources/can1357__oh-my-pi/scripts/ci-update-brew-formula.test.ts)<br>[scripts/claude-trace.ts](../../../../sources/can1357__oh-my-pi/scripts/claude-trace.ts)<br>[scripts/edit_benchmark_common.py](../../../../sources/can1357__oh-my-pi/scripts/edit_benchmark_common.py) |
| CI workflows | 1 | [.github/workflows/ci.yml](../../../../sources/can1357__oh-my-pi/.github/workflows/ci.yml) |
| Containers / deploy | 5 | [Dockerfile](../../../../sources/can1357__oh-my-pi/Dockerfile)<br>[Dockerfile.dockerignore](../../../../sources/can1357__oh-my-pi/Dockerfile.dockerignore)<br>[Dockerfile.robomp](../../../../sources/can1357__oh-my-pi/Dockerfile.robomp)<br>[Dockerfile.robomp.dockerignore](../../../../sources/can1357__oh-my-pi/Dockerfile.robomp.dockerignore)<br>[python/robomp/docker-compose.yml](../../../../sources/can1357__oh-my-pi/python/robomp/docker-compose.yml) |
| Security / policy | 137 | [scripts/session-stats/audit-prompt.md](../../../../sources/can1357__oh-my-pi/scripts/session-stats/audit-prompt.md)<br>[scripts/session-stats/audit.test.ts](../../../../sources/can1357__oh-my-pi/scripts/session-stats/audit.test.ts)<br>[scripts/session-stats/audit.ts](../../../../sources/can1357__oh-my-pi/scripts/session-stats/audit.ts)<br>[python/robomp/tests/test_sandbox.py](../../../../sources/can1357__oh-my-pi/python/robomp/tests/test_sandbox.py)<br>[python/robomp/src/sandbox.py](../../../../sources/can1357__oh-my-pi/python/robomp/src/sandbox.py)<br>[packages/coding-agent/test/active-oauth-account.test.ts](../../../../sources/can1357__oh-my-pi/packages/coding-agent/test/active-oauth-account.test.ts) |
| Agent instructions | 4 | [AGENTS.md](../../../../sources/can1357__oh-my-pi/AGENTS.md)<br>[python/robomp/AGENTS.md](../../../../sources/can1357__oh-my-pi/python/robomp/AGENTS.md)<br>[packages/ai/src/dialect/gemini.md](../../../../sources/can1357__oh-my-pi/packages/ai/src/dialect/gemini.md)<br>[docs/toolconv/gemini.md](../../../../sources/can1357__oh-my-pi/docs/toolconv/gemini.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `packages/mnemopi/test/mcp-server.test.ts`, `packages/mnemopi/src/mcp-server.ts`, `packages/mnemopi/src/mcp-tools.ts`.
2. Trace execution through entrypoints: `python/robomp/web/src/App.tsx`, `python/robomp/web/src/main.tsx`, `python/robomp/src/__main__.py`.
3. Map agent/tool runtime through: `AGENTS.md`, `scripts/tool_io.py`, `scripts/tool-prompt-usage.ts`.
4. Inspect retrieval/memory/indexing through: `types/assets/index.d.ts`, `python/robomp/web/index.html`, `python/robomp/web/src/styles/index.css`.
5. Verify behavior through test/eval files: `scripts/ci-concurrency.test.ts`, `scripts/ci-release-notes.test.ts`, `scripts/ci-test-ts.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 4212 files, 456 directories.. 핵심 구조 신호는 TypeScript, package.json, Cargo.toml, Dockerfile, README.md, AGENTS.md이며, deep-source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing입니다.
