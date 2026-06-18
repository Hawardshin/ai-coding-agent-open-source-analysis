# ruvnet/agent-harness-generator Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

🛠️ The meta-harness for AI agents — scaffold your own focused, branded agent harness with its own npx CLI, MCP server, memory, learning loop, and witness-signed releases. Works with Claude Code, Codex, pi.dev, Hermes, OpenClaw, and RVM (hardware-isolated sandbox).

## 요약

- 조사 단위: `sources/ruvnet__agent-harness-generator` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,077 files, 415 directories, depth score 125, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=packages/create-agent-harness/src/mcp-cmd.ts, packages/create-agent-harness/src/mcp-scan.ts, packages/create-agent-harness/__tests__/mcp-scan.test.ts이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | ruvnet/agent-harness-generator |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | TypeScript |
| Stars | 164 |
| Forks | 15 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/ruvnet__agent-harness-generator](../../../../sources/ruvnet__agent-harness-generator) |
| Existing report | [reports/global-trending/repositories/ruvnet__agent-harness-generator.md](../../../global-trending/repositories/ruvnet__agent-harness-generator.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1077 / 415 |
| Max observed depth | 8 |
| Top directories | __tests__, .claude-plugin, .codex, .github, apps, crates, docs, examples, examples-packages, packages, scripts |
| Top extensions | .tmpl: 294, .ts: 235, .md: 176, .json: 139, .mjs: 71, (none): 59, .lean: 33, .toml: 20, .rs: 19, .tsx: 10, .yml: 8, .png: 6 |
| Source patterns | monorepo/workspace, cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/create-agent-harness | packages workspace | 128 |
| docs | documentation surface | 45 |
| packages/kernel-js | packages workspace | 19 |
| packages/harness | packages workspace | 14 |
| packages/router | packages workspace | 8 |
| packages/host-copilot | packages workspace | 7 |
| packages/host-opencode | packages workspace | 7 |
| packages/bench | packages workspace | 6 |
| packages/host-claude-code | packages workspace | 6 |
| packages/host-codex | packages workspace | 6 |
| packages/host-github-actions | packages workspace | 6 |
| packages/host-hermes | packages workspace | 6 |
| packages/host-openclaw | packages workspace | 6 |
| packages/host-pi-dev | packages workspace | 6 |
| packages/host-rvm | packages workspace | 6 |
| packages/sdk | packages workspace | 6 |
| packages/vertical-base | packages workspace | 6 |
| packages/vertical-trading | packages workspace | 6 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | node scripts/build-ordered.mjs |
| test | package.json | test | npm run -ws --if-present test |
| quality | package.json | lint | npm run -ws --if-present lint |
| build | package.json | build:wasm | wasm-pack build crates/kernel-wasm --target bundler --out-dir ../../packages/kernel-js/pkg --release |
| build | package.json | build:napi | cd crates/kernel-napi && napi build --platform --release --output-dir ../../packages/kernel-js/native |
| test | package.json | test:rust | cargo test --workspace |
| quality | package.json | fmt:rust | cargo fmt --all |
| quality | package.json | clippy | cargo clippy --workspace --all-targets -- -D warnings |
| utility | package.json | smoke | node scripts/smoke.mjs |
| test | package.json | pretest | npm run build |


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
| mcp | [packages/create-agent-harness/src/mcp-cmd.ts](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/src/mcp-cmd.ts) | mcp signal |
| mcp | [packages/create-agent-harness/src/mcp-scan.ts](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/src/mcp-scan.ts) | mcp signal |
| mcp | [packages/create-agent-harness/__tests__/mcp-scan.test.ts](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/__tests__/mcp-scan.test.ts) | mcp signal |
| mcp | [docs/adrs/ADR-022-mcp-primitive.md](../../../../sources/ruvnet__agent-harness-generator/docs/adrs/ADR-022-mcp-primitive.md) | mcp signal |
| agentRuntime | [packages/kernel-js/src/memory-rvf.ts](../../../../sources/ruvnet__agent-harness-generator/packages/kernel-js/src/memory-rvf.ts) | agentRuntime signal |
| agentRuntime | [packages/kernel-js/src/memory.ts](../../../../sources/ruvnet__agent-harness-generator/packages/kernel-js/src/memory.ts) | agentRuntime signal |
| agentRuntime | [packages/kernel-js/__tests__/memory-rvf.test.ts](../../../../sources/ruvnet__agent-harness-generator/packages/kernel-js/__tests__/memory-rvf.test.ts) | agentRuntime signal |
| agentRuntime | [packages/kernel-js/__tests__/memory.test.ts](../../../../sources/ruvnet__agent-harness-generator/packages/kernel-js/__tests__/memory.test.ts) | agentRuntime signal |
| entrypoints | [packages/vertical-trading/src/index.ts](../../../../sources/ruvnet__agent-harness-generator/packages/vertical-trading/src/index.ts) | entrypoints signal |
| entrypoints | [packages/vertical-base/src/index.ts](../../../../sources/ruvnet__agent-harness-generator/packages/vertical-base/src/index.ts) | entrypoints signal |
| entrypoints | [packages/sdk/src/index.ts](../../../../sources/ruvnet__agent-harness-generator/packages/sdk/src/index.ts) | entrypoints signal |
| entrypoints | [packages/router/src/index.ts](../../../../sources/ruvnet__agent-harness-generator/packages/router/src/index.ts) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 110 | [packages/vertical-trading/src/index.ts](../../../../sources/ruvnet__agent-harness-generator/packages/vertical-trading/src/index.ts)<br>[packages/vertical-base/src/index.ts](../../../../sources/ruvnet__agent-harness-generator/packages/vertical-base/src/index.ts)<br>[packages/sdk/src/index.ts](../../../../sources/ruvnet__agent-harness-generator/packages/sdk/src/index.ts)<br>[packages/router/src/index.ts](../../../../sources/ruvnet__agent-harness-generator/packages/router/src/index.ts)<br>[packages/kernel-js/src/index.ts](../../../../sources/ruvnet__agent-harness-generator/packages/kernel-js/src/index.ts)<br>[packages/host-rvm/src/index.ts](../../../../sources/ruvnet__agent-harness-generator/packages/host-rvm/src/index.ts)<br>[packages/host-pi-dev/src/index.ts](../../../../sources/ruvnet__agent-harness-generator/packages/host-pi-dev/src/index.ts)<br>[packages/host-opencode/src/index.ts](../../../../sources/ruvnet__agent-harness-generator/packages/host-opencode/src/index.ts) |
| agentRuntime | 145 | [packages/kernel-js/src/memory-rvf.ts](../../../../sources/ruvnet__agent-harness-generator/packages/kernel-js/src/memory-rvf.ts)<br>[packages/kernel-js/src/memory.ts](../../../../sources/ruvnet__agent-harness-generator/packages/kernel-js/src/memory.ts)<br>[packages/kernel-js/__tests__/memory-rvf.test.ts](../../../../sources/ruvnet__agent-harness-generator/packages/kernel-js/__tests__/memory-rvf.test.ts)<br>[packages/kernel-js/__tests__/memory.test.ts](../../../../sources/ruvnet__agent-harness-generator/packages/kernel-js/__tests__/memory.test.ts)<br>[packages/create-agent-harness/templates/vertical_trading/src/agents/executor.ts.tmpl](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/templates/vertical_trading/src/agents/executor.ts.tmpl)<br>[packages/create-agent-harness/templates/vertical_trading/src/agents/market-watcher.ts.tmpl](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/templates/vertical_trading/src/agents/market-watcher.ts.tmpl)<br>[packages/create-agent-harness/templates/vertical_trading/src/agents/postmortem.ts.tmpl](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/templates/vertical_trading/src/agents/postmortem.ts.tmpl)<br>[packages/create-agent-harness/templates/vertical_trading/src/agents/risk-checker.ts.tmpl](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/templates/vertical_trading/src/agents/risk-checker.ts.tmpl) |
| mcp | 10 | [packages/create-agent-harness/src/mcp-cmd.ts](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/src/mcp-cmd.ts)<br>[packages/create-agent-harness/src/mcp-scan.ts](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/src/mcp-scan.ts)<br>[packages/create-agent-harness/__tests__/mcp-scan.test.ts](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/__tests__/mcp-scan.test.ts)<br>[docs/adrs/ADR-022-mcp-primitive.md](../../../../sources/ruvnet__agent-harness-generator/docs/adrs/ADR-022-mcp-primitive.md)<br>[crates/kernel/src/mcp.rs](../../../../sources/ruvnet__agent-harness-generator/crates/kernel/src/mcp.rs)<br>[crates/kernel/benches/mcp_validate.rs](../../../../sources/ruvnet__agent-harness-generator/crates/kernel/benches/mcp_validate.rs)<br>[apps/web-ui/src/generator/mcp.ts](../../../../sources/ruvnet__agent-harness-generator/apps/web-ui/src/generator/mcp.ts)<br>[apps/web-ui/src/generator/__tests__/mcp.test.ts](../../../../sources/ruvnet__agent-harness-generator/apps/web-ui/src/generator/__tests__/mcp.test.ts) |
| retrieval | 42 | [packages/vertical-trading/src/index.ts](../../../../sources/ruvnet__agent-harness-generator/packages/vertical-trading/src/index.ts)<br>[packages/vertical-base/src/index.ts](../../../../sources/ruvnet__agent-harness-generator/packages/vertical-base/src/index.ts)<br>[packages/sdk/src/index.ts](../../../../sources/ruvnet__agent-harness-generator/packages/sdk/src/index.ts)<br>[packages/router/src/index.ts](../../../../sources/ruvnet__agent-harness-generator/packages/router/src/index.ts)<br>[packages/kernel-js/src/index.ts](../../../../sources/ruvnet__agent-harness-generator/packages/kernel-js/src/index.ts)<br>[packages/kernel-js/src/memory-rvf.ts](../../../../sources/ruvnet__agent-harness-generator/packages/kernel-js/src/memory-rvf.ts)<br>[packages/kernel-js/src/memory.ts](../../../../sources/ruvnet__agent-harness-generator/packages/kernel-js/src/memory.ts)<br>[packages/kernel-js/__tests__/memory-rvf.test.ts](../../../../sources/ruvnet__agent-harness-generator/packages/kernel-js/__tests__/memory-rvf.test.ts) |
| spec | 106 | [packages/create-agent-harness/templates/vertical_gaming/.claude/commands/design-doc-diff.md.tmpl](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/templates/vertical_gaming/.claude/commands/design-doc-diff.md.tmpl)<br>[docs/ARCHITECTURE.md](../../../../sources/ruvnet__agent-harness-generator/docs/ARCHITECTURE.md)<br>[docs/adrs/ADR-001-goals-and-non-goals.md](../../../../sources/ruvnet__agent-harness-generator/docs/adrs/ADR-001-goals-and-non-goals.md)<br>[docs/adrs/ADR-002-kernel-boundary.md](../../../../sources/ruvnet__agent-harness-generator/docs/adrs/ADR-002-kernel-boundary.md)<br>[docs/adrs/ADR-002a-rust-wasm-napi-publishing-pipeline.md](../../../../sources/ruvnet__agent-harness-generator/docs/adrs/ADR-002a-rust-wasm-napi-publishing-pipeline.md)<br>[docs/adrs/ADR-003-generator-architecture.md](../../../../sources/ruvnet__agent-harness-generator/docs/adrs/ADR-003-generator-architecture.md)<br>[docs/adrs/ADR-004-host-integration-model.md](../../../../sources/ruvnet__agent-harness-generator/docs/adrs/ADR-004-host-integration-model.md)<br>[docs/adrs/ADR-005-marketplace-plugin-design.md](../../../../sources/ruvnet__agent-harness-generator/docs/adrs/ADR-005-marketplace-plugin-design.md) |
| eval | 195 | [scripts/bench-baseline.mjs](../../../../sources/ruvnet__agent-harness-generator/scripts/bench-baseline.mjs)<br>[packages/vertical-trading/__tests__/pack.test.ts](../../../../sources/ruvnet__agent-harness-generator/packages/vertical-trading/__tests__/pack.test.ts)<br>[packages/vertical-base/__tests__/base.test.ts](../../../../sources/ruvnet__agent-harness-generator/packages/vertical-base/__tests__/base.test.ts)<br>[packages/sdk/__tests__/sdk.test.ts](../../../../sources/ruvnet__agent-harness-generator/packages/sdk/__tests__/sdk.test.ts)<br>[packages/router/__tests__/native.test.ts](../../../../sources/ruvnet__agent-harness-generator/packages/router/__tests__/native.test.ts)<br>[packages/router/__tests__/router.test.ts](../../../../sources/ruvnet__agent-harness-generator/packages/router/__tests__/router.test.ts)<br>[packages/router/__tests__/train.test.ts](../../../../sources/ruvnet__agent-harness-generator/packages/router/__tests__/train.test.ts)<br>[packages/kernel-js/__tests__/dispatch.test.ts](../../../../sources/ruvnet__agent-harness-generator/packages/kernel-js/__tests__/dispatch.test.ts) |
| security | 12 | [SECURITY.md](../../../../sources/ruvnet__agent-harness-generator/SECURITY.md)<br>[scripts/audit-deps.mjs](../../../../sources/ruvnet__agent-harness-generator/scripts/audit-deps.mjs)<br>[scripts/native-router-guard.mjs](../../../../sources/ruvnet__agent-harness-generator/scripts/native-router-guard.mjs)<br>[scripts/path-guard.mjs](../../../../sources/ruvnet__agent-harness-generator/scripts/path-guard.mjs)<br>[packages/create-agent-harness/templates/vertical_repo-maintainer/src/agents/security.ts.tmpl](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/templates/vertical_repo-maintainer/src/agents/security.ts.tmpl)<br>[packages/create-agent-harness/src/audit-cmd.ts](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/src/audit-cmd.ts)<br>[packages/create-agent-harness/__tests__/security-codeql.test.ts](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/__tests__/security-codeql.test.ts)<br>[docs/adrs/ADR-015-naming-and-branding-policy.md](../../../../sources/ruvnet__agent-harness-generator/docs/adrs/ADR-015-naming-and-branding-policy.md) |
| ci | 8 | [.github/workflows/ci.yml](../../../../sources/ruvnet__agent-harness-generator/.github/workflows/ci.yml)<br>[.github/workflows/draco.yml](../../../../sources/ruvnet__agent-harness-generator/.github/workflows/draco.yml)<br>[.github/workflows/examples-packages-smoke.yml](../../../../sources/ruvnet__agent-harness-generator/.github/workflows/examples-packages-smoke.yml)<br>[.github/workflows/pages-monitor.yml](../../../../sources/ruvnet__agent-harness-generator/.github/workflows/pages-monitor.yml)<br>[.github/workflows/pages.yml](../../../../sources/ruvnet__agent-harness-generator/.github/workflows/pages.yml)<br>[.github/workflows/publish.yml](../../../../sources/ruvnet__agent-harness-generator/.github/workflows/publish.yml)<br>[.github/workflows/published-smoke.yml](../../../../sources/ruvnet__agent-harness-generator/.github/workflows/published-smoke.yml)<br>[.github/workflows/security.yml](../../../../sources/ruvnet__agent-harness-generator/.github/workflows/security.yml) |
| container | 0 | not obvious |
| instruction | 47 | [packages/create-agent-harness/templates/vertical_trading/CLAUDE.md.tmpl](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/templates/vertical_trading/CLAUDE.md.tmpl)<br>[packages/create-agent-harness/templates/vertical_support/CLAUDE.md.tmpl](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/templates/vertical_support/CLAUDE.md.tmpl)<br>[packages/create-agent-harness/templates/vertical_sales/CLAUDE.md.tmpl](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/templates/vertical_sales/CLAUDE.md.tmpl)<br>[packages/create-agent-harness/templates/vertical_ruview/CLAUDE.md.tmpl](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/templates/vertical_ruview/CLAUDE.md.tmpl)<br>[packages/create-agent-harness/templates/vertical_research/CLAUDE.md.tmpl](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/templates/vertical_research/CLAUDE.md.tmpl)<br>[packages/create-agent-harness/templates/vertical_repo-maintainer/CLAUDE.md.tmpl](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/templates/vertical_repo-maintainer/CLAUDE.md.tmpl)<br>[packages/create-agent-harness/templates/vertical_marketing/CLAUDE.md.tmpl](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/templates/vertical_marketing/CLAUDE.md.tmpl)<br>[packages/create-agent-harness/templates/vertical_legal/CLAUDE.md.tmpl](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/templates/vertical_legal/CLAUDE.md.tmpl) |
| docs | 217 | [README.md](../../../../sources/ruvnet__agent-harness-generator/README.md)<br>[packages/vertical-trading/README.md](../../../../sources/ruvnet__agent-harness-generator/packages/vertical-trading/README.md)<br>[packages/vertical-base/README.md](../../../../sources/ruvnet__agent-harness-generator/packages/vertical-base/README.md)<br>[packages/sdk/README.md](../../../../sources/ruvnet__agent-harness-generator/packages/sdk/README.md)<br>[packages/router/README.md](../../../../sources/ruvnet__agent-harness-generator/packages/router/README.md)<br>[packages/kernel-js/README.md](../../../../sources/ruvnet__agent-harness-generator/packages/kernel-js/README.md)<br>[packages/host-rvm/README.md](../../../../sources/ruvnet__agent-harness-generator/packages/host-rvm/README.md)<br>[packages/host-pi-dev/README.md](../../../../sources/ruvnet__agent-harness-generator/packages/host-pi-dev/README.md) |
| config | 82 | [Cargo.toml](../../../../sources/ruvnet__agent-harness-generator/Cargo.toml)<br>[package.json](../../../../sources/ruvnet__agent-harness-generator/package.json)<br>[packages/vertical-trading/package.json](../../../../sources/ruvnet__agent-harness-generator/packages/vertical-trading/package.json)<br>[packages/vertical-trading/tsconfig.json](../../../../sources/ruvnet__agent-harness-generator/packages/vertical-trading/tsconfig.json)<br>[packages/vertical-base/package.json](../../../../sources/ruvnet__agent-harness-generator/packages/vertical-base/package.json)<br>[packages/vertical-base/tsconfig.json](../../../../sources/ruvnet__agent-harness-generator/packages/vertical-base/tsconfig.json)<br>[packages/sdk/package.json](../../../../sources/ruvnet__agent-harness-generator/packages/sdk/package.json)<br>[packages/sdk/tsconfig.json](../../../../sources/ruvnet__agent-harness-generator/packages/sdk/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 195 | [scripts/bench-baseline.mjs](../../../../sources/ruvnet__agent-harness-generator/scripts/bench-baseline.mjs)<br>[packages/vertical-trading/__tests__/pack.test.ts](../../../../sources/ruvnet__agent-harness-generator/packages/vertical-trading/__tests__/pack.test.ts)<br>[packages/vertical-base/__tests__/base.test.ts](../../../../sources/ruvnet__agent-harness-generator/packages/vertical-base/__tests__/base.test.ts)<br>[packages/sdk/__tests__/sdk.test.ts](../../../../sources/ruvnet__agent-harness-generator/packages/sdk/__tests__/sdk.test.ts)<br>[packages/router/__tests__/native.test.ts](../../../../sources/ruvnet__agent-harness-generator/packages/router/__tests__/native.test.ts)<br>[packages/router/__tests__/router.test.ts](../../../../sources/ruvnet__agent-harness-generator/packages/router/__tests__/router.test.ts) |
| CI workflows | 8 | [.github/workflows/ci.yml](../../../../sources/ruvnet__agent-harness-generator/.github/workflows/ci.yml)<br>[.github/workflows/draco.yml](../../../../sources/ruvnet__agent-harness-generator/.github/workflows/draco.yml)<br>[.github/workflows/examples-packages-smoke.yml](../../../../sources/ruvnet__agent-harness-generator/.github/workflows/examples-packages-smoke.yml)<br>[.github/workflows/pages-monitor.yml](../../../../sources/ruvnet__agent-harness-generator/.github/workflows/pages-monitor.yml)<br>[.github/workflows/pages.yml](../../../../sources/ruvnet__agent-harness-generator/.github/workflows/pages.yml)<br>[.github/workflows/publish.yml](../../../../sources/ruvnet__agent-harness-generator/.github/workflows/publish.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 12 | [SECURITY.md](../../../../sources/ruvnet__agent-harness-generator/SECURITY.md)<br>[scripts/audit-deps.mjs](../../../../sources/ruvnet__agent-harness-generator/scripts/audit-deps.mjs)<br>[scripts/native-router-guard.mjs](../../../../sources/ruvnet__agent-harness-generator/scripts/native-router-guard.mjs)<br>[scripts/path-guard.mjs](../../../../sources/ruvnet__agent-harness-generator/scripts/path-guard.mjs)<br>[packages/create-agent-harness/templates/vertical_repo-maintainer/src/agents/security.ts.tmpl](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/templates/vertical_repo-maintainer/src/agents/security.ts.tmpl)<br>[packages/create-agent-harness/src/audit-cmd.ts](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/src/audit-cmd.ts) |
| Agent instructions | 47 | [packages/create-agent-harness/templates/vertical_trading/CLAUDE.md.tmpl](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/templates/vertical_trading/CLAUDE.md.tmpl)<br>[packages/create-agent-harness/templates/vertical_support/CLAUDE.md.tmpl](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/templates/vertical_support/CLAUDE.md.tmpl)<br>[packages/create-agent-harness/templates/vertical_sales/CLAUDE.md.tmpl](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/templates/vertical_sales/CLAUDE.md.tmpl)<br>[packages/create-agent-harness/templates/vertical_ruview/CLAUDE.md.tmpl](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/templates/vertical_ruview/CLAUDE.md.tmpl)<br>[packages/create-agent-harness/templates/vertical_research/CLAUDE.md.tmpl](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/templates/vertical_research/CLAUDE.md.tmpl)<br>[packages/create-agent-harness/templates/vertical_repo-maintainer/CLAUDE.md.tmpl](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/templates/vertical_repo-maintainer/CLAUDE.md.tmpl) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `packages/create-agent-harness/src/mcp-cmd.ts`, `packages/create-agent-harness/src/mcp-scan.ts`, `packages/create-agent-harness/__tests__/mcp-scan.test.ts`.
2. Trace execution through entrypoints: `packages/vertical-trading/src/index.ts`, `packages/vertical-base/src/index.ts`, `packages/sdk/src/index.ts`.
3. Map agent/tool runtime through: `packages/kernel-js/src/memory-rvf.ts`, `packages/kernel-js/src/memory.ts`, `packages/kernel-js/__tests__/memory-rvf.test.ts`.
4. Inspect retrieval/memory/indexing through: `packages/vertical-trading/src/index.ts`, `packages/vertical-base/src/index.ts`, `packages/sdk/src/index.ts`.
5. Verify behavior through test/eval files: `scripts/bench-baseline.mjs`, `packages/vertical-trading/__tests__/pack.test.ts`, `packages/vertical-base/__tests__/base.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 🛠️ The meta harness for AI agents — scaffold your own focused, branded agent harness with its own npx CLI, MCP server, . 핵심 구조 신호는 TypeScript, package.json, Cargo.toml, README.md, LICENSE, tests이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
