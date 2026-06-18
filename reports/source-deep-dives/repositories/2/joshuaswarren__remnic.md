# joshuaswarren/remnic Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Open-source memory and context for user-aware agents: scoped memory, provenance, retrieval quality, correction, boundaries, evals, and MCP/HTTP access.

## 요약

- 조사 단위: `sources/joshuaswarren__remnic` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 2,408 files, 315 directories, depth score 128, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/access-mcp-action-confidence.test.ts, tests/access-mcp-chatgpt-app.test.ts, tests/access-mcp-recall-xray.test.ts이고, 의존성 단서는 openai, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | joshuaswarren/remnic |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 87 |
| Forks | 15 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/joshuaswarren__remnic](../../../../sources/joshuaswarren__remnic) |
| Existing report | [reports/global-trending/repositories/joshuaswarren__remnic.md](../../../global-trending/repositories/joshuaswarren__remnic.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 2408 / 315 |
| Max observed depth | 7 |
| Top directories | .agents, .changeset, .cursor, .githooks, .github, admin-console, benchmarks, bin, dashboard, docs, evals, examples, integrations, packages, prompts, scripts, src, tests |
| Top extensions | .ts: 1764, .md: 327, .json: 108, .mjs: 63, .py: 33, .tsx: 25, .sh: 23, .yml: 21, (none): 13, .js: 8, .cjs: 5, .txt: 5 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 127 |
| docs | documentation surface | 36 |
| packages/remnic-core | packages workspace | 26 |
| src | source boundary | 21 |
| packages/plugin-codex | packages workspace | 8 |
| packages/plugin-claude-code | packages workspace | 7 |
| packages/remnic-server | packages workspace | 7 |
| packages/bench | packages workspace | 6 |
| packages/remnic-cli | packages workspace | 6 |
| packages/plugin-openclaw | packages workspace | 5 |
| packages/plugin-pi | packages workspace | 5 |
| packages/shim-openclaw-engram | packages workspace | 5 |
| packages/hermes-provider | packages workspace | 4 |
| packages/import-chatgpt | packages workspace | 4 |
| packages/import-claude | packages workspace | 4 |
| packages/import-gemini | packages workspace | 4 |
| packages/import-lossless-claw | packages workspace | 4 |
| packages/import-mem0 | packages workspace | 4 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | package.json | sync:openclaw-plugin | node scripts/sync-openclaw-plugin.mjs |
| quality | package.json | check:openclaw-plugin-sync | node scripts/check-openclaw-plugin-sync.mjs |
| quality | package.json | check:openclaw-sdk-surface | node scripts/check-openclaw-sdk-surface.mjs |
| quality | package.json | check:openclaw-sdk-surface:required | node scripts/check-openclaw-sdk-surface.mjs --require |
| build | package.json | release:bump-changed-packages | node scripts/bump-changed-packages.mjs |
| build | package.json | build | pnpm --filter @remnic/core build && pnpm run check:openclaw-plugin-sync && tsup && node scripts/copy-admin-console.mjs |
| serve-dev | package.json | dev | tsup --watch |
| test | package.json | check-types | pnpm --filter @remnic/core build && tsc --noEmit && pnpm --recursive --if-present --filter="./packages/*" run check-types && node scripts/check-test-types.mjs |
| quality | package.json | check-config-contract | NODE_OPTIONS="${NODE_OPTIONS:+$NODE_OPTIONS }--conditions=remnic-source" tsx scripts/validate-config-contract.ts |
| test | package.json | test | pnpm --filter @remnic/core build && node scripts/run-root-tests.mjs |
| test | package.json | test:openclaw-scenarios | NODE_OPTIONS="${NODE_OPTIONS:+$NODE_OPTIONS }--conditions=remnic-source" pnpm exec tsx --test tests/openclaw-adapter-scenarios.test.ts |
| test | package.json | test:openclaw-privacy | NODE_OPTIONS="${NODE_OPTIONS:+$NODE_OPTIONS }--conditions=remnic-source" pnpm exec tsx --test tests/openclaw-hook-privacy.test.ts |
| test | package.json | test:entity-hardening | NODE_OPTIONS="${NODE_OPTIONS:+$NODE_OPTIONS }--conditions=remnic-source" tsx --test tests/intent.test.ts tests/recall-no-recall-short-circuit.test.ts tests/orchestrator-path-filter.test.ts tests/artifact-cache.test.ts te |
| utility | package.json | demo:coding-agent-memory | NODE_OPTIONS="${NODE_OPTIONS:+$NODE_OPTIONS }--conditions=remnic-source" tsx examples/coding-agent-memory-demo/demo.mts |
| test | package.json | test:coding-agent-memory-demo | node examples/coding-agent-memory-demo/smoke-test.mjs |
| test | package.json | test:release-smoke | pnpm run build && node scripts/check-release-artifacts.mjs |
| test | package.json | plugin:inspect | pnpm --filter @remnic/plugin-openclaw run plugin:inspect |
| test | package.json | plugin:inspect:runtime | pnpm --filter @remnic/plugin-openclaw run plugin:inspect:runtime |
| utility | package.json | scan:openclaw-plugin | node scripts/openclaw-plugin-security-scan.mjs packages/plugin-openclaw |
| utility | package.json | verify:openclaw-clawpack | node scripts/verify-openclaw-clawpack.mjs |
| utility | package.json | bench:list | node scripts/run-bench-cli.mjs list |
| utility | package.json | bench:run | node scripts/run-bench-cli.mjs run |
| utility | package.json | bench:compare | node scripts/run-bench-cli.mjs compare |
| utility | package.json | bench:quick | node scripts/run-bench-cli.mjs run --quick longmemeval |
| utility | package.json | eval:ci-gate | NODE_OPTIONS="${NODE_OPTIONS:+$NODE_OPTIONS }--conditions=remnic-source" tsx scripts/eval-ci-gate.ts |
| utility | package.json | eval:run | NODE_OPTIONS="${NODE_OPTIONS:+$NODE_OPTIONS }--conditions=remnic-source" tsx evals/run.ts |
| utility | package.json | eval:download | bash evals/scripts/download-datasets.sh |
| utility | package.json | eval:bench | NODE_OPTIONS="${NODE_OPTIONS:+$NODE_OPTIONS }--conditions=remnic-source" tsx evals/run.ts --benchmark all |
| quality | package.json | lint | biome check --diagnostic-level=error --files-ignore-unknown=true biome.json eslint.config.js package.json |
| utility | package.json | preflight | bash scripts/pr-preflight.sh full |
| utility | package.json | preflight:quick | bash scripts/pr-preflight.sh quick |
| utility | package.json | review:cursor | bash scripts/cursor-prepush-review.sh |
| quality | package.json | review:patterns | bash scripts/check-review-patterns.sh |
| utility | package.json | hooks:install | bash scripts/install-git-hooks.sh |
| utility | package.json | migrate | NODE_OPTIONS="${NODE_OPTIONS:+$NODE_OPTIONS }--conditions=remnic-source" tsx scripts/migrate.ts |
| utility | package.json | postinstall | node scripts/ensure-better-sqlite3.mjs |
| build | package.json | prepack | pnpm run check-types && pnpm run build |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| build | Makefile | build | make build |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
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
| mcp | [tests/access-mcp-action-confidence.test.ts](../../../../sources/joshuaswarren__remnic/tests/access-mcp-action-confidence.test.ts) | mcp signal |
| mcp | [tests/access-mcp-chatgpt-app.test.ts](../../../../sources/joshuaswarren__remnic/tests/access-mcp-chatgpt-app.test.ts) | mcp signal |
| mcp | [tests/access-mcp-recall-xray.test.ts](../../../../sources/joshuaswarren__remnic/tests/access-mcp-recall-xray.test.ts) | mcp signal |
| mcp | [tests/access-mcp.test.ts](../../../../sources/joshuaswarren__remnic/tests/access-mcp.test.ts) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/joshuaswarren__remnic/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tests/hook-migration-preamble.test.ts](../../../../sources/joshuaswarren__remnic/tests/hook-migration-preamble.test.ts) | agentRuntime signal |
| agentRuntime | [tests/memory-action-contracts.test.ts](../../../../sources/joshuaswarren__remnic/tests/memory-action-contracts.test.ts) | agentRuntime signal |
| agentRuntime | [tests/memory-action-lifecycle-integration.test.ts](../../../../sources/joshuaswarren__remnic/tests/memory-action-lifecycle-integration.test.ts) | agentRuntime signal |
| entrypoints | [tests/compat-fixtures/missing-manifest/src/index.ts](../../../../sources/joshuaswarren__remnic/tests/compat-fixtures/missing-manifest/src/index.ts) | entrypoints signal |
| entrypoints | [tests/compat-fixtures/healthy/src/index.ts](../../../../sources/joshuaswarren__remnic/tests/compat-fixtures/healthy/src/index.ts) | entrypoints signal |
| entrypoints | [tests/compat-fixtures/empty-package/src/index.ts](../../../../sources/joshuaswarren__remnic/tests/compat-fixtures/empty-package/src/index.ts) | entrypoints signal |
| entrypoints | [src/cli.ts](../../../../sources/joshuaswarren__remnic/src/cli.ts) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 55 | [tests/compat-fixtures/missing-manifest/src/index.ts](../../../../sources/joshuaswarren__remnic/tests/compat-fixtures/missing-manifest/src/index.ts)<br>[tests/compat-fixtures/healthy/src/index.ts](../../../../sources/joshuaswarren__remnic/tests/compat-fixtures/healthy/src/index.ts)<br>[tests/compat-fixtures/empty-package/src/index.ts](../../../../sources/joshuaswarren__remnic/tests/compat-fixtures/empty-package/src/index.ts)<br>[src/cli.ts](../../../../sources/joshuaswarren__remnic/src/cli.ts)<br>[src/index.ts](../../../../sources/joshuaswarren__remnic/src/index.ts)<br>[packages/shim-openclaw-engram/src/index.ts](../../../../sources/joshuaswarren__remnic/packages/shim-openclaw-engram/src/index.ts)<br>[packages/shim-openclaw-engram/bin/engram-access.js](../../../../sources/joshuaswarren__remnic/packages/shim-openclaw-engram/bin/engram-access.js)<br>[packages/remnic-server/src/index.ts](../../../../sources/joshuaswarren__remnic/packages/remnic-server/src/index.ts) |
| agentRuntime | 196 | [AGENTS.md](../../../../sources/joshuaswarren__remnic/AGENTS.md)<br>[tests/hook-migration-preamble.test.ts](../../../../sources/joshuaswarren__remnic/tests/hook-migration-preamble.test.ts)<br>[tests/memory-action-contracts.test.ts](../../../../sources/joshuaswarren__remnic/tests/memory-action-contracts.test.ts)<br>[tests/memory-action-lifecycle-integration.test.ts](../../../../sources/joshuaswarren__remnic/tests/memory-action-lifecycle-integration.test.ts)<br>[tests/memory-action-policy.test.ts](../../../../sources/joshuaswarren__remnic/tests/memory-action-policy.test.ts)<br>[tests/memory-boxes.test.ts](../../../../sources/joshuaswarren__remnic/tests/memory-boxes.test.ts)<br>[tests/memory-cache.test.ts](../../../../sources/joshuaswarren__remnic/tests/memory-cache.test.ts)<br>[tests/memory-extension-discovery.test.ts](../../../../sources/joshuaswarren__remnic/tests/memory-extension-discovery.test.ts) |
| mcp | 15 | [tests/access-mcp-action-confidence.test.ts](../../../../sources/joshuaswarren__remnic/tests/access-mcp-action-confidence.test.ts)<br>[tests/access-mcp-chatgpt-app.test.ts](../../../../sources/joshuaswarren__remnic/tests/access-mcp-chatgpt-app.test.ts)<br>[tests/access-mcp-recall-xray.test.ts](../../../../sources/joshuaswarren__remnic/tests/access-mcp-recall-xray.test.ts)<br>[tests/access-mcp.test.ts](../../../../sources/joshuaswarren__remnic/tests/access-mcp.test.ts)<br>[tests/briefing-mcp-tool.test.ts](../../../../sources/joshuaswarren__remnic/tests/briefing-mcp-tool.test.ts)<br>[src/access-mcp.ts](../../../../sources/joshuaswarren__remnic/src/access-mcp.ts)<br>[src/mcp-memory-inspector-app.ts](../../../../sources/joshuaswarren__remnic/src/mcp-memory-inspector-app.ts)<br>[packages/remnic-core/src/access-mcp.test.ts](../../../../sources/joshuaswarren__remnic/packages/remnic-core/src/access-mcp.test.ts) |
| retrieval | 329 | [tests/bench-memory-arena-runner.test.ts](../../../../sources/joshuaswarren__remnic/tests/bench-memory-arena-runner.test.ts)<br>[tests/causal-retrieval.test.ts](../../../../sources/joshuaswarren__remnic/tests/causal-retrieval.test.ts)<br>[tests/causal-trajectory-graph.test.ts](../../../../sources/joshuaswarren__remnic/tests/causal-trajectory-graph.test.ts)<br>[tests/cli-conversation-index-health.test.ts](../../../../sources/joshuaswarren__remnic/tests/cli-conversation-index-health.test.ts)<br>[tests/cli-graph-health.test.ts](../../../../sources/joshuaswarren__remnic/tests/cli-graph-health.test.ts)<br>[tests/cli-memory-action-audit.test.ts](../../../../sources/joshuaswarren__remnic/tests/cli-memory-action-audit.test.ts)<br>[tests/cli-memory-governance.test.ts](../../../../sources/joshuaswarren__remnic/tests/cli-memory-governance.test.ts)<br>[tests/cli-memory-search.test.ts](../../../../sources/joshuaswarren__remnic/tests/cli-memory-search.test.ts) |
| spec | 33 | [scripts/faiss_requirements.txt](../../../../sources/joshuaswarren__remnic/scripts/faiss_requirements.txt)<br>[packages/remnic-core/scripts/faiss_requirements.txt](../../../../sources/joshuaswarren__remnic/packages/remnic-core/scripts/faiss_requirements.txt)<br>[packages/plugin-openclaw/scripts/faiss_requirements.txt](../../../../sources/joshuaswarren__remnic/packages/plugin-openclaw/scripts/faiss_requirements.txt)<br>[docs/ARCHITECTURE.md](../../../../sources/joshuaswarren__remnic/docs/ARCHITECTURE.md)<br>[docs/superpowers/specs/2026-04-17-bench-suite-design.md](../../../../sources/joshuaswarren__remnic/docs/superpowers/specs/2026-04-17-bench-suite-design.md)<br>[docs/superpowers/specs/2026-04-18-ingestion-benchmarks-design.md](../../../../sources/joshuaswarren__remnic/docs/superpowers/specs/2026-04-18-ingestion-benchmarks-design.md)<br>[docs/requirements/README.md](../../../../sources/joshuaswarren__remnic/docs/requirements/README.md)<br>[docs/plans/2026-02-21-engram-memory-os-roadmap.md](../../../../sources/joshuaswarren__remnic/docs/plans/2026-02-21-engram-memory-os-roadmap.md) |
| eval | 1152 | [tsconfig.tests.json](../../../../sources/joshuaswarren__remnic/tsconfig.tests.json)<br>[tests/abstraction-nodes.test.ts](../../../../sources/joshuaswarren__remnic/tests/abstraction-nodes.test.ts)<br>[tests/access-http-action-confidence.test.ts](../../../../sources/joshuaswarren__remnic/tests/access-http-action-confidence.test.ts)<br>[tests/access-http.test.ts](../../../../sources/joshuaswarren__remnic/tests/access-http.test.ts)<br>[tests/access-idempotency.test.ts](../../../../sources/joshuaswarren__remnic/tests/access-idempotency.test.ts)<br>[tests/access-mcp-action-confidence.test.ts](../../../../sources/joshuaswarren__remnic/tests/access-mcp-action-confidence.test.ts)<br>[tests/access-mcp-chatgpt-app.test.ts](../../../../sources/joshuaswarren__remnic/tests/access-mcp-chatgpt-app.test.ts)<br>[tests/access-mcp-recall-xray.test.ts](../../../../sources/joshuaswarren__remnic/tests/access-mcp-recall-xray.test.ts) |
| security | 70 | [SECURITY.md](../../../../sources/joshuaswarren__remnic/SECURITY.md)<br>[tests/changelog-guard.test.mjs](../../../../sources/joshuaswarren__remnic/tests/changelog-guard.test.mjs)<br>[tests/cli-memory-action-audit.test.ts](../../../../sources/joshuaswarren__remnic/tests/cli-memory-action-audit.test.ts)<br>[tests/cli-policy-tuning.test.ts](../../../../sources/joshuaswarren__remnic/tests/cli-policy-tuning.test.ts)<br>[tests/config-lifecycle-policy.test.ts](../../../../sources/joshuaswarren__remnic/tests/config-lifecycle-policy.test.ts)<br>[tests/config-proactive-policy.test.ts](../../../../sources/joshuaswarren__remnic/tests/config-proactive-policy.test.ts)<br>[tests/continuity-audit.test.ts](../../../../sources/joshuaswarren__remnic/tests/continuity-audit.test.ts)<br>[tests/memory-action-policy.test.ts](../../../../sources/joshuaswarren__remnic/tests/memory-action-policy.test.ts) |
| ci | 15 | [.github/workflows/ai-review-gate.yml](../../../../sources/joshuaswarren__remnic/.github/workflows/ai-review-gate.yml)<br>[.github/workflows/amb-beam-remnic.yml](../../../../sources/joshuaswarren__remnic/.github/workflows/amb-beam-remnic.yml)<br>[.github/workflows/bench-exploit-audit.yml](../../../../sources/joshuaswarren__remnic/.github/workflows/bench-exploit-audit.yml)<br>[.github/workflows/bench-smoke.yml](../../../../sources/joshuaswarren__remnic/.github/workflows/bench-smoke.yml)<br>[.github/workflows/changelog-guard.yml](../../../../sources/joshuaswarren__remnic/.github/workflows/changelog-guard.yml)<br>[.github/workflows/ci.yml](../../../../sources/joshuaswarren__remnic/.github/workflows/ci.yml)<br>[.github/workflows/codeql.yml](../../../../sources/joshuaswarren__remnic/.github/workflows/codeql.yml)<br>[.github/workflows/dependency-review.yml](../../../../sources/joshuaswarren__remnic/.github/workflows/dependency-review.yml) |
| container | 0 | not obvious |
| instruction | 3 | [AGENTS.md](../../../../sources/joshuaswarren__remnic/AGENTS.md)<br>[CLAUDE.md](../../../../sources/joshuaswarren__remnic/CLAUDE.md)<br>[src/AGENTS.md](../../../../sources/joshuaswarren__remnic/src/AGENTS.md) |
| docs | 244 | [README.md](../../../../sources/joshuaswarren__remnic/README.md)<br>[tests/compat-fixtures/README.md](../../../../sources/joshuaswarren__remnic/tests/compat-fixtures/README.md)<br>[scripts/faiss/README.md](../../../../sources/joshuaswarren__remnic/scripts/faiss/README.md)<br>[packages/shim-openclaw-engram/README.md](../../../../sources/joshuaswarren__remnic/packages/shim-openclaw-engram/README.md)<br>[packages/remnic-server/README.md](../../../../sources/joshuaswarren__remnic/packages/remnic-server/README.md)<br>[packages/remnic-core/README.md](../../../../sources/joshuaswarren__remnic/packages/remnic-core/README.md)<br>[packages/remnic-cli/README.md](../../../../sources/joshuaswarren__remnic/packages/remnic-cli/README.md)<br>[packages/plugin-pi/README.md](../../../../sources/joshuaswarren__remnic/packages/plugin-pi/README.md) |
| config | 57 | [Makefile](../../../../sources/joshuaswarren__remnic/Makefile)<br>[package.json](../../../../sources/joshuaswarren__remnic/package.json)<br>[pnpm-workspace.yaml](../../../../sources/joshuaswarren__remnic/pnpm-workspace.yaml)<br>[tsconfig.json](../../../../sources/joshuaswarren__remnic/tsconfig.json)<br>[turbo.json](../../../../sources/joshuaswarren__remnic/turbo.json)<br>[tests/compat-fixtures/missing-manifest/package.json](../../../../sources/joshuaswarren__remnic/tests/compat-fixtures/missing-manifest/package.json)<br>[tests/compat-fixtures/healthy/package.json](../../../../sources/joshuaswarren__remnic/tests/compat-fixtures/healthy/package.json)<br>[tests/compat-fixtures/empty-package/package.json](../../../../sources/joshuaswarren__remnic/tests/compat-fixtures/empty-package/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1152 | [tsconfig.tests.json](../../../../sources/joshuaswarren__remnic/tsconfig.tests.json)<br>[tests/abstraction-nodes.test.ts](../../../../sources/joshuaswarren__remnic/tests/abstraction-nodes.test.ts)<br>[tests/access-http-action-confidence.test.ts](../../../../sources/joshuaswarren__remnic/tests/access-http-action-confidence.test.ts)<br>[tests/access-http.test.ts](../../../../sources/joshuaswarren__remnic/tests/access-http.test.ts)<br>[tests/access-idempotency.test.ts](../../../../sources/joshuaswarren__remnic/tests/access-idempotency.test.ts)<br>[tests/access-mcp-action-confidence.test.ts](../../../../sources/joshuaswarren__remnic/tests/access-mcp-action-confidence.test.ts) |
| CI workflows | 15 | [.github/workflows/ai-review-gate.yml](../../../../sources/joshuaswarren__remnic/.github/workflows/ai-review-gate.yml)<br>[.github/workflows/amb-beam-remnic.yml](../../../../sources/joshuaswarren__remnic/.github/workflows/amb-beam-remnic.yml)<br>[.github/workflows/bench-exploit-audit.yml](../../../../sources/joshuaswarren__remnic/.github/workflows/bench-exploit-audit.yml)<br>[.github/workflows/bench-smoke.yml](../../../../sources/joshuaswarren__remnic/.github/workflows/bench-smoke.yml)<br>[.github/workflows/changelog-guard.yml](../../../../sources/joshuaswarren__remnic/.github/workflows/changelog-guard.yml)<br>[.github/workflows/ci.yml](../../../../sources/joshuaswarren__remnic/.github/workflows/ci.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 70 | [SECURITY.md](../../../../sources/joshuaswarren__remnic/SECURITY.md)<br>[tests/changelog-guard.test.mjs](../../../../sources/joshuaswarren__remnic/tests/changelog-guard.test.mjs)<br>[tests/cli-memory-action-audit.test.ts](../../../../sources/joshuaswarren__remnic/tests/cli-memory-action-audit.test.ts)<br>[tests/cli-policy-tuning.test.ts](../../../../sources/joshuaswarren__remnic/tests/cli-policy-tuning.test.ts)<br>[tests/config-lifecycle-policy.test.ts](../../../../sources/joshuaswarren__remnic/tests/config-lifecycle-policy.test.ts)<br>[tests/config-proactive-policy.test.ts](../../../../sources/joshuaswarren__remnic/tests/config-proactive-policy.test.ts) |
| Agent instructions | 3 | [AGENTS.md](../../../../sources/joshuaswarren__remnic/AGENTS.md)<br>[CLAUDE.md](../../../../sources/joshuaswarren__remnic/CLAUDE.md)<br>[src/AGENTS.md](../../../../sources/joshuaswarren__remnic/src/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/access-mcp-action-confidence.test.ts`, `tests/access-mcp-chatgpt-app.test.ts`, `tests/access-mcp-recall-xray.test.ts`.
2. Trace execution through entrypoints: `tests/compat-fixtures/missing-manifest/src/index.ts`, `tests/compat-fixtures/healthy/src/index.ts`, `tests/compat-fixtures/empty-package/src/index.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `tests/hook-migration-preamble.test.ts`, `tests/memory-action-contracts.test.ts`.
4. Inspect retrieval/memory/indexing through: `tests/bench-memory-arena-runner.test.ts`, `tests/causal-retrieval.test.ts`, `tests/causal-trajectory-graph.test.ts`.
5. Verify behavior through test/eval files: `tsconfig.tests.json`, `tests/abstraction-nodes.test.ts`, `tests/access-http-action-confidence.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Open source memory and context for user aware agents scoped memory, provenance, retrieval quality, correction, boundarie. 핵심 구조 신호는 TypeScript, package.json, Makefile, README.md, AGENTS.md, CLAUDE.md이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
