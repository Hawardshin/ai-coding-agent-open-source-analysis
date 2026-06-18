# GlitterKill/sdl-mcp Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Symbol Delta Ledger (SDL-MCP) gives coding agents the right code context, not your entire repo. It turns sprawling codebases into compact, high-signal context that saves tokens, speeds up workflows, and improves agent output.

## 요약

- 조사 단위: `sources/GlitterKill__sdl-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,707 files, 194 directories, depth score 128, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/MCP_TOOL_TESTS_SUMMARY.md, tests/unit/mcp-action-search.test.ts, tests/unit/mcp-buffer-tool.test.ts이고, 의존성 단서는 modelcontextprotocol, vscode, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | GlitterKill/sdl-mcp |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 369 |
| Forks | 22 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/GlitterKill__sdl-mcp](../../../../sources/GlitterKill__sdl-mcp) |
| Existing report | [reports/global-trending/repositories/GlitterKill__sdl-mcp.md](../../../global-trending/repositories/GlitterKill__sdl-mcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1707 / 194 |
| Max observed depth | 6 |
| Top directories | .agents, .benchmark, .github, benchmarks, config, devdocs, dist-tests, docs, examples, grammar-wrappers, migrations, native, packages, scripts, sdl-mcp-vscode, src, templates, tests |
| Top extensions | .ts: 1150, .json: 129, .md: 102, .rs: 77, .js: 54, .map: 30, .mjs: 30, (none): 28, .py: 11, .webp: 11, .java: 9, .yml: 7 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 155 |
| src | source boundary | 33 |
| docs | documentation surface | 25 |
| examples/example-plugin | examples workspace | 3 |
| packages/kuzu-split | packages workspace | 3 |
| .github | ci surface | 1 |
| benchmarks | validation surface | 1 |
| config | top-level component | 1 |
| devdocs | documentation surface | 1 |
| dist-tests | validation surface | 1 |
| examples | top-level component | 1 |
| grammar-wrappers | top-level component | 1 |
| migrations | top-level component | 1 |
| native | top-level component | 1 |
| packages | source boundary | 1 |
| scripts | top-level component | 1 |
| sdl-mcp-vscode | top-level component | 1 |
| templates | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | package.json | postinstall | node scripts/postinstall.mjs |
| build | package.json | clean:dist | node scripts/clean-dist.mjs |
| build | package.json | build | tsc -p tsconfig.build.json && node scripts/copy-ui-assets.mjs |
| build | package.json | build:scripts | tsc -p tsconfig.scripts.json && node scripts/fix-imports.ts |
| build | package.json | build:runtime | npm run clean:dist && npm run build |
| build | package.json | build:all | npm run clean:dist && npm run build && npm run build:scripts |
| serve-dev | package.json | watch | tsc -p tsconfig.build.json --watch |
| serve-dev | package.json | dev | node src/main.ts |
| quality | package.json | typecheck | tsc --noEmit |
| quality | package.json | lint | eslint src |
| quality | package.json | format | prettier --write "src/**/*.ts" |
| test | package.json | test | node scripts/run-tests.mjs |
| test | package.json | test:harness | npm run test:adapters |
| test | package.json | test:adapters | npm run build && npx tsc --rootDir tests/harness --outDir dist/tests/harness --module nodenext tests/harness/adapter-runner.ts && node dist/tests/harness/adapter-runner.js |
| test | package.json | test:golden | npm run build && node scripts/golden/update-goldens.ts validate |
| build | package.json | golden:update | npm run build && node scripts/golden/update-goldens.ts generate |
| build | package.json | benchmark:ci | node dist/cli/index.js benchmark:ci |
| build | package.json | migrate | npm run build:scripts && node dist/scripts/migrate.js |
| build | package.json | index | npm run build:scripts && node dist/scripts/index-repo.js |
| build | package.json | index-repo | npm run build:scripts && node dist/scripts/index-repo.js |
| build | package.json | dump-symbol | npm run build:scripts && node dist/scripts/dump-symbol.js |
| utility | package.json | benchmark | node scripts/benchmark.ts |
| utility | package.json | benchmark:real | node scripts/real-world-benchmark.ts |
| utility | package.json | benchmark:matrix | node scripts/real-world-benchmark-matrix.ts |
| quality | package.json | benchmark:claims | node scripts/check-benchmark-claims.ts |
| utility | package.json | benchmark:sweep | node scripts/budget-sensitivity-sweep.ts |
| utility | package.json | bench:ppr | node scripts/bench-ppr-weight.ts |
| utility | package.json | benchmark:provider-first-fallback | node scripts/provider-first-fallback-benchmark.ts |
| utility | package.json | benchmark:record-trace | node scripts/record-trace.ts |
| utility | package.json | benchmark:setup-external | node scripts/setup-external-benchmark-repos.ts |
| utility | package.json | benchmark:v067 | node scripts/benchmark/v067-baseline.ts |
| serve-dev | package.json | benchmark:v067:check | node scripts/benchmark/v067-baseline.ts --check devdocs/benchmarks/v067-baseline.json |
| serve-dev | package.json | benchmark:v067:save | node scripts/benchmark/v067-baseline.ts --out devdocs/benchmarks/v067-baseline.json |
| build | package.json | package:exe | npm run build:scripts && node dist/scripts/build-exe.js |
| build | package.json | prepack | npm run build:runtime |
| build | package.json | build:native | napi build --release --cargo-cwd native --config native/package.json native |
| build | package.json | build:native:debug | napi build --cargo-cwd native --config native/package.json native |
| utility | package.json | native:artifacts | napi artifacts --config native/package.json --npm-dir native/npm |
| utility | package.json | native:version | node scripts/sync-native-version.mjs |
| build | package.json | prepare-release | node scripts/prepare-release.mjs |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | vscode |
| observability | opentelemetry |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [tests/MCP_TOOL_TESTS_SUMMARY.md](../../../../sources/GlitterKill__sdl-mcp/tests/MCP_TOOL_TESTS_SUMMARY.md) | mcp signal |
| mcp | [tests/unit/mcp-action-search.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/mcp-action-search.test.ts) | mcp signal |
| mcp | [tests/unit/mcp-buffer-tool.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/mcp-buffer-tool.test.ts) | mcp signal |
| mcp | [tests/unit/mcp-code-need-window-policy.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/mcp-code-need-window-policy.test.ts) | mcp signal |
| agentRuntime | [CONTEXT.md](../../../../sources/GlitterKill__sdl-mcp/CONTEXT.md) | agentRuntime signal |
| agentRuntime | [skills-lock.json](../../../../sources/GlitterKill__sdl-mcp/skills-lock.json) | agentRuntime signal |
| agentRuntime | [tests/AGENTS.md](../../../../sources/GlitterKill__sdl-mcp/tests/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tests/runner.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/runner.test.ts) | agentRuntime signal |
| entrypoints | [tests/stress/fixtures/src/go/server.go](../../../../sources/GlitterKill__sdl-mcp/tests/stress/fixtures/src/go/server.go) | entrypoints signal |
| entrypoints | [src/main.ts](../../../../sources/GlitterKill__sdl-mcp/src/main.ts) | entrypoints signal |
| entrypoints | [src/server.ts](../../../../sources/GlitterKill__sdl-mcp/src/server.ts) | entrypoints signal |
| instruction | [templates/AGENTS.md.template](../../../../sources/GlitterKill__sdl-mcp/templates/AGENTS.md.template) | instruction signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [tests/stress/fixtures/src/go/server.go](../../../../sources/GlitterKill__sdl-mcp/tests/stress/fixtures/src/go/server.go)<br>[src/main.ts](../../../../sources/GlitterKill__sdl-mcp/src/main.ts)<br>[src/server.ts](../../../../sources/GlitterKill__sdl-mcp/src/server.ts) |
| agentRuntime | 121 | [CONTEXT.md](../../../../sources/GlitterKill__sdl-mcp/CONTEXT.md)<br>[skills-lock.json](../../../../sources/GlitterKill__sdl-mcp/skills-lock.json)<br>[tests/AGENTS.md](../../../../sources/GlitterKill__sdl-mcp/tests/AGENTS.md)<br>[tests/runner.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/runner.test.ts)<br>[tests/unit/agent-executor-cache-hits.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/agent-executor-cache-hits.test.ts)<br>[tests/unit/agent-feedback-query-regression.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/agent-feedback-query-regression.test.ts)<br>[tests/unit/context-raw-token-baseline.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/context-raw-token-baseline.test.ts)<br>[tests/unit/context-response-artifacts.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/context-response-artifacts.test.ts) |
| mcp | 152 | [tests/MCP_TOOL_TESTS_SUMMARY.md](../../../../sources/GlitterKill__sdl-mcp/tests/MCP_TOOL_TESTS_SUMMARY.md)<br>[tests/unit/mcp-action-search.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/mcp-action-search.test.ts)<br>[tests/unit/mcp-buffer-tool.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/mcp-buffer-tool.test.ts)<br>[tests/unit/mcp-code-need-window-policy.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/mcp-code-need-window-policy.test.ts)<br>[tests/unit/mcp-ids.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/mcp-ids.test.ts)<br>[tests/unit/mcp-memory-hint-hook.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/mcp-memory-hint-hook.test.ts)<br>[tests/unit/mcp-request-schemas-hardening.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/mcp-request-schemas-hardening.test.ts)<br>[tests/unit/mcp-slice-confidence-filter.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/mcp-slice-confidence-filter.test.ts) |
| retrieval | 185 | [tests/unit/cli-index-command.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/cli-index-command.test.ts)<br>[tests/unit/deferred-index-bootstrap.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/deferred-index-bootstrap.test.ts)<br>[tests/unit/doctor-live-index-status.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/doctor-live-index-status.test.ts)<br>[tests/unit/drop-vector-index-regex.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/drop-vector-index-regex.test.ts)<br>[tests/unit/embedding-concurrency.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/embedding-concurrency.test.ts)<br>[tests/unit/entity-retrieval.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/entity-retrieval.test.ts)<br>[tests/unit/feedback-index-lifecycle.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/feedback-index-lifecycle.test.ts)<br>[tests/unit/feedback-retrieval-config.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/feedback-retrieval-config.test.ts) |
| spec | 2 | [docs/architecture.md](../../../../sources/GlitterKill__sdl-mcp/docs/architecture.md)<br>[docs/readme-assets/readme-system-architecture.webp](../../../../sources/GlitterKill__sdl-mcp/docs/readme-assets/readme-system-architecture.webp) |
| eval | 875 | [tsconfig.test-runner.json](../../../../sources/GlitterKill__sdl-mcp/tsconfig.test-runner.json)<br>[tsconfig.test.json](../../../../sources/GlitterKill__sdl-mcp/tsconfig.test.json)<br>[tests/AGENTS.md](../../../../sources/GlitterKill__sdl-mcp/tests/AGENTS.md)<br>[tests/blastRadius.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/blastRadius.test.ts)<br>[tests/cache.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/cache.test.ts)<br>[tests/generate-summary.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/generate-summary.test.ts)<br>[tests/MCP_TOOL_TESTS_SUMMARY.md](../../../../sources/GlitterKill__sdl-mcp/tests/MCP_TOOL_TESTS_SUMMARY.md)<br>[tests/metrics-cache.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/metrics-cache.test.ts) |
| security | 25 | [tests/unit/audit-fixes-2026-03-30.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/audit-fixes-2026-03-30.test.ts)<br>[tests/unit/mcp-code-need-window-policy.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/mcp-code-need-window-policy.test.ts)<br>[tests/unit/policy-engine.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/policy-engine.test.ts)<br>[tests/unit/runtime-policy.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/runtime-policy.test.ts)<br>[tests/unit/policy/code-access.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/policy/code-access.test.ts)<br>[tests/unit/policy/runtime.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/policy/runtime.test.ts)<br>[tests/unit/agent/context-seeding-policy.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/agent/context-seeding-policy.test.ts)<br>[tests/integration/audit-buffer-end-hook-drain.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/integration/audit-buffer-end-hook-drain.test.ts) |
| ci | 6 | [.github/workflows/ci.yml](../../../../sources/GlitterKill__sdl-mcp/.github/workflows/ci.yml)<br>[.github/workflows/jekyll-gh-pages.yml](../../../../sources/GlitterKill__sdl-mcp/.github/workflows/jekyll-gh-pages.yml)<br>[.github/workflows/publish-grammar-wrappers.yml](../../../../sources/GlitterKill__sdl-mcp/.github/workflows/publish-grammar-wrappers.yml)<br>[.github/workflows/publish-ladybug.yml](../../../../sources/GlitterKill__sdl-mcp/.github/workflows/publish-ladybug.yml)<br>[.github/workflows/publish-native.yml](../../../../sources/GlitterKill__sdl-mcp/.github/workflows/publish-native.yml)<br>[.github/workflows/release-publish.yml](../../../../sources/GlitterKill__sdl-mcp/.github/workflows/release-publish.yml) |
| container | 0 | not obvious |
| instruction | 4 | [tests/AGENTS.md](../../../../sources/GlitterKill__sdl-mcp/tests/AGENTS.md)<br>[templates/AGENTS.md.template](../../../../sources/GlitterKill__sdl-mcp/templates/AGENTS.md.template)<br>[templates/CLAUDE.md.template](../../../../sources/GlitterKill__sdl-mcp/templates/CLAUDE.md.template)<br>[templates/GEMINI.md.template](../../../../sources/GlitterKill__sdl-mcp/templates/GEMINI.md.template) |
| docs | 89 | [README.md](../../../../sources/GlitterKill__sdl-mcp/README.md)<br>[tests/harness/README-ADAPTER-HARNESS.md](../../../../sources/GlitterKill__sdl-mcp/tests/harness/README-ADAPTER-HARNESS.md)<br>[tests/harness/README.md](../../../../sources/GlitterKill__sdl-mcp/tests/harness/README.md)<br>[templates/plugin-template/README.md](../../../../sources/GlitterKill__sdl-mcp/templates/plugin-template/README.md)<br>[sdl-mcp-vscode/README.md](../../../../sources/GlitterKill__sdl-mcp/sdl-mcp-vscode/README.md)<br>[scripts/golden/README.md](../../../../sources/GlitterKill__sdl-mcp/scripts/golden/README.md)<br>[packages/kuzu-split/out/ladybug/README.md](../../../../sources/GlitterKill__sdl-mcp/packages/kuzu-split/out/ladybug/README.md)<br>[grammar-wrappers/README.md](../../../../sources/GlitterKill__sdl-mcp/grammar-wrappers/README.md) |
| config | 33 | [package.json](../../../../sources/GlitterKill__sdl-mcp/package.json)<br>[tsconfig.json](../../../../sources/GlitterKill__sdl-mcp/tsconfig.json)<br>[tests/stress/fixtures/package.json](../../../../sources/GlitterKill__sdl-mcp/tests/stress/fixtures/package.json)<br>[tests/stress/fixtures/tsconfig.json](../../../../sources/GlitterKill__sdl-mcp/tests/stress/fixtures/tsconfig.json)<br>[tests/fixtures/clustered-repo/package.json](../../../../sources/GlitterKill__sdl-mcp/tests/fixtures/clustered-repo/package.json)<br>[tests/fixtures/clustered-repo/tsconfig.json](../../../../sources/GlitterKill__sdl-mcp/tests/fixtures/clustered-repo/tsconfig.json)<br>[templates/plugin-template/package.json](../../../../sources/GlitterKill__sdl-mcp/templates/plugin-template/package.json)<br>[templates/plugin-template/tsconfig.json](../../../../sources/GlitterKill__sdl-mcp/templates/plugin-template/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 875 | [tsconfig.test-runner.json](../../../../sources/GlitterKill__sdl-mcp/tsconfig.test-runner.json)<br>[tsconfig.test.json](../../../../sources/GlitterKill__sdl-mcp/tsconfig.test.json)<br>[tests/AGENTS.md](../../../../sources/GlitterKill__sdl-mcp/tests/AGENTS.md)<br>[tests/blastRadius.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/blastRadius.test.ts)<br>[tests/cache.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/cache.test.ts)<br>[tests/generate-summary.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/generate-summary.test.ts) |
| CI workflows | 6 | [.github/workflows/ci.yml](../../../../sources/GlitterKill__sdl-mcp/.github/workflows/ci.yml)<br>[.github/workflows/jekyll-gh-pages.yml](../../../../sources/GlitterKill__sdl-mcp/.github/workflows/jekyll-gh-pages.yml)<br>[.github/workflows/publish-grammar-wrappers.yml](../../../../sources/GlitterKill__sdl-mcp/.github/workflows/publish-grammar-wrappers.yml)<br>[.github/workflows/publish-ladybug.yml](../../../../sources/GlitterKill__sdl-mcp/.github/workflows/publish-ladybug.yml)<br>[.github/workflows/publish-native.yml](../../../../sources/GlitterKill__sdl-mcp/.github/workflows/publish-native.yml)<br>[.github/workflows/release-publish.yml](../../../../sources/GlitterKill__sdl-mcp/.github/workflows/release-publish.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 25 | [tests/unit/audit-fixes-2026-03-30.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/audit-fixes-2026-03-30.test.ts)<br>[tests/unit/mcp-code-need-window-policy.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/mcp-code-need-window-policy.test.ts)<br>[tests/unit/policy-engine.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/policy-engine.test.ts)<br>[tests/unit/runtime-policy.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/runtime-policy.test.ts)<br>[tests/unit/policy/code-access.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/policy/code-access.test.ts)<br>[tests/unit/policy/runtime.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/policy/runtime.test.ts) |
| Agent instructions | 4 | [tests/AGENTS.md](../../../../sources/GlitterKill__sdl-mcp/tests/AGENTS.md)<br>[templates/AGENTS.md.template](../../../../sources/GlitterKill__sdl-mcp/templates/AGENTS.md.template)<br>[templates/CLAUDE.md.template](../../../../sources/GlitterKill__sdl-mcp/templates/CLAUDE.md.template)<br>[templates/GEMINI.md.template](../../../../sources/GlitterKill__sdl-mcp/templates/GEMINI.md.template) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/MCP_TOOL_TESTS_SUMMARY.md`, `tests/unit/mcp-action-search.test.ts`, `tests/unit/mcp-buffer-tool.test.ts`.
2. Trace execution through entrypoints: `tests/stress/fixtures/src/go/server.go`, `src/main.ts`, `src/server.ts`.
3. Map agent/tool runtime through: `CONTEXT.md`, `skills-lock.json`, `tests/AGENTS.md`.
4. Inspect retrieval/memory/indexing through: `tests/unit/cli-index-command.test.ts`, `tests/unit/deferred-index-bootstrap.test.ts`, `tests/unit/doctor-live-index-status.test.ts`.
5. Verify behavior through test/eval files: `tsconfig.test-runner.json`, `tsconfig.test.json`, `tests/AGENTS.md`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Symbol Delta Ledger SDL MCP gives coding agents the right code context, not your entire repo. It turns sprawling codebas. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, modelcontextprotocol, vscode이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
