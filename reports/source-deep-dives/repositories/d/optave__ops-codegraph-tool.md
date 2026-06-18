# optave/ops-codegraph-tool Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Code intelligence CLI — function-level dependency graph across 34 languages, 34-tool MCP server for AI agents, complexity metrics, architecture boundary enforcement, CI quality gates, git diff impact with co-change analysis, hybrid semantic search. Fully local, zero API keys required.

## 요약

- 조사 단위: `sources/optave__ops-codegraph-tool` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,203 files, 246 directories, depth score 125, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/unit/mcp.test.ts, src/mcp/index.ts, src/mcp/middleware.ts이고, 의존성 단서는 commander, transformers, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | optave/ops-codegraph-tool |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 69 |
| Forks | 14 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/optave__ops-codegraph-tool](../../../../sources/optave__ops-codegraph-tool) |
| Existing report | [reports/global-trending/repositories/optave__ops-codegraph-tool.md](../../../global-trending/repositories/optave__ops-codegraph-tool.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1203 / 246 |
| Max observed depth | 8 |
| Top directories | .claude, .github, .greptile, .husky, crates, docs, generated, scripts, src, tests |
| Top extensions | .ts: 559, .js: 124, .json: 112, .md: 104, .rs: 84, .sh: 33, .yml: 17, .mjs: 15, (none): 12, .h: 6, .java: 6, .clj: 5 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 96 |
| tests | validation surface | 80 |
| docs | documentation surface | 49 |
| crates/codegraph-core | crates workspace | 3 |
| .github | ci surface | 1 |
| crates | source boundary | 1 |
| generated | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | tsc && node -e "require('fs').writeFileSync('dist/index.cjs',require('fs').readFileSync('src/index.cjs','utf8').replaceAll('./index.ts','./index.js'))" |
| build | package.json | build:wasm | node scripts/node-ts.js scripts/build-wasm.ts |
| quality | package.json | typecheck | tsc --noEmit |
| utility | package.json | verify-imports | node scripts/node-ts.js scripts/verify-imports.ts |
| test | package.json | test | vitest run |
| test | package.json | test:watch | vitest |
| test | package.json | test:coverage | vitest run --coverage |
| test | package.json | test:regression-guard | vitest run tests/benchmarks/regression-guard.test.ts |
| test | package.json | lint | biome check src/ tests/ |
| test | package.json | lint:fix | biome check --write src/ tests/ |
| test | package.json | format | biome format --write src/ tests/ |
| build | package.json | prepack | npm run build |
| build | package.json | clean | node -e "require('fs').rmSync('dist',{recursive:true,force:true});require('fs').rmSync('.tsbuildinfo',{force:true})" |
| build | package.json | prepare | npm run build:wasm && npm run build && husky && npm run deps:tree |
| utility | package.json | deps:tree | node scripts/node-ts.js scripts/gen-deps.ts |
| quality | package.json | benchmark | node --experimental-strip-types --import ./scripts/ts-resolve-loader.js scripts/benchmark.ts |
| build | package.json | release | commit-and-tag-version |
| build | package.json | release:dry-run | commit-and-tag-version --dry-run |
| utility | package.json | version | node scripts/node-ts.js scripts/sync-native-versions.ts && git add package.json crates/codegraph-core/Cargo.toml |
| entrypoint | package.json bin | cli.js | ./dist/cli.js |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | transformers |
| webRuntime | none |
| developerSurface | commander |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [tests/unit/mcp.test.ts](../../../../sources/optave__ops-codegraph-tool/tests/unit/mcp.test.ts) | mcp signal |
| mcp | [src/mcp/index.ts](../../../../sources/optave__ops-codegraph-tool/src/mcp/index.ts) | mcp signal |
| mcp | [src/mcp/middleware.ts](../../../../sources/optave__ops-codegraph-tool/src/mcp/middleware.ts) | mcp signal |
| mcp | [src/mcp/server.ts](../../../../sources/optave__ops-codegraph-tool/src/mcp/server.ts) | mcp signal |
| agentRuntime | [tests/integration/context.test.ts](../../../../sources/optave__ops-codegraph-tool/tests/integration/context.test.ts) | agentRuntime signal |
| agentRuntime | [tests/builder/context.test.ts](../../../../sources/optave__ops-codegraph-tool/tests/builder/context.test.ts) | agentRuntime signal |
| agentRuntime | [src/mcp/tool-registry.ts](../../../../sources/optave__ops-codegraph-tool/src/mcp/tool-registry.ts) | agentRuntime signal |
| agentRuntime | [src/mcp/tools/ast-query.ts](../../../../sources/optave__ops-codegraph-tool/src/mcp/tools/ast-query.ts) | agentRuntime signal |
| entrypoints | [tests/fixtures/barrel-project/src/index.js](../../../../sources/optave__ops-codegraph-tool/tests/fixtures/barrel-project/src/index.js) | entrypoints signal |
| entrypoints | [tests/benchmarks/resolution/fixtures/python/main.py](../../../../sources/optave__ops-codegraph-tool/tests/benchmarks/resolution/fixtures/python/main.py) | entrypoints signal |
| entrypoints | [tests/benchmarks/resolution/fixtures/go/main.go](../../../../sources/optave__ops-codegraph-tool/tests/benchmarks/resolution/fixtures/go/main.go) | entrypoints signal |
| entrypoints | [src/cli.ts](../../../../sources/optave__ops-codegraph-tool/src/cli.ts) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 8 | [tests/fixtures/barrel-project/src/index.js](../../../../sources/optave__ops-codegraph-tool/tests/fixtures/barrel-project/src/index.js)<br>[tests/benchmarks/resolution/fixtures/python/main.py](../../../../sources/optave__ops-codegraph-tool/tests/benchmarks/resolution/fixtures/python/main.py)<br>[tests/benchmarks/resolution/fixtures/go/main.go](../../../../sources/optave__ops-codegraph-tool/tests/benchmarks/resolution/fixtures/go/main.go)<br>[src/cli.ts](../../../../sources/optave__ops-codegraph-tool/src/cli.ts)<br>[src/index.cjs](../../../../sources/optave__ops-codegraph-tool/src/index.cjs)<br>[src/index.ts](../../../../sources/optave__ops-codegraph-tool/src/index.ts)<br>[src/mcp/server.ts](../../../../sources/optave__ops-codegraph-tool/src/mcp/server.ts)<br>[crates/codegraph-core/src/lib.rs](../../../../sources/optave__ops-codegraph-tool/crates/codegraph-core/src/lib.rs) |
| agentRuntime | 87 | [tests/integration/context.test.ts](../../../../sources/optave__ops-codegraph-tool/tests/integration/context.test.ts)<br>[tests/builder/context.test.ts](../../../../sources/optave__ops-codegraph-tool/tests/builder/context.test.ts)<br>[src/mcp/tool-registry.ts](../../../../sources/optave__ops-codegraph-tool/src/mcp/tool-registry.ts)<br>[src/mcp/tools/ast-query.ts](../../../../sources/optave__ops-codegraph-tool/src/mcp/tools/ast-query.ts)<br>[src/mcp/tools/audit.ts](../../../../sources/optave__ops-codegraph-tool/src/mcp/tools/audit.ts)<br>[src/mcp/tools/batch-query.ts](../../../../sources/optave__ops-codegraph-tool/src/mcp/tools/batch-query.ts)<br>[src/mcp/tools/branch-compare.ts](../../../../sources/optave__ops-codegraph-tool/src/mcp/tools/branch-compare.ts)<br>[src/mcp/tools/brief.ts](../../../../sources/optave__ops-codegraph-tool/src/mcp/tools/brief.ts) |
| mcp | 45 | [tests/unit/mcp.test.ts](../../../../sources/optave__ops-codegraph-tool/tests/unit/mcp.test.ts)<br>[src/mcp/index.ts](../../../../sources/optave__ops-codegraph-tool/src/mcp/index.ts)<br>[src/mcp/middleware.ts](../../../../sources/optave__ops-codegraph-tool/src/mcp/middleware.ts)<br>[src/mcp/server.ts](../../../../sources/optave__ops-codegraph-tool/src/mcp/server.ts)<br>[src/mcp/tool-registry.ts](../../../../sources/optave__ops-codegraph-tool/src/mcp/tool-registry.ts)<br>[src/mcp/tools/ast-query.ts](../../../../sources/optave__ops-codegraph-tool/src/mcp/tools/ast-query.ts)<br>[src/mcp/tools/audit.ts](../../../../sources/optave__ops-codegraph-tool/src/mcp/tools/audit.ts)<br>[src/mcp/tools/batch-query.ts](../../../../sources/optave__ops-codegraph-tool/src/mcp/tools/batch-query.ts) |
| retrieval | 126 | [tests/unit/in-memory-repository.test.ts](../../../../sources/optave__ops-codegraph-tool/tests/unit/in-memory-repository.test.ts)<br>[tests/unit/index-exports.test.ts](../../../../sources/optave__ops-codegraph-tool/tests/unit/index-exports.test.ts)<br>[tests/search/embedding-regression.test.ts](../../../../sources/optave__ops-codegraph-tool/tests/search/embedding-regression.test.ts)<br>[tests/search/embedding-strategy.test.ts](../../../../sources/optave__ops-codegraph-tool/tests/search/embedding-strategy.test.ts)<br>[tests/graph/cycles.test.ts](../../../../sources/optave__ops-codegraph-tool/tests/graph/cycles.test.ts)<br>[tests/graph/export.test.ts](../../../../sources/optave__ops-codegraph-tool/tests/graph/export.test.ts)<br>[tests/graph/model.test.ts](../../../../sources/optave__ops-codegraph-tool/tests/graph/model.test.ts)<br>[tests/graph/viewer.test.ts](../../../../sources/optave__ops-codegraph-tool/tests/graph/viewer.test.ts) |
| spec | 7 | [generated/architecture/ARCHITECTURE_AUDIT_v3.4.0_2026-03-26.md](../../../../sources/optave__ops-codegraph-tool/generated/architecture/ARCHITECTURE_AUDIT_v3.4.0_2026-03-26.md)<br>[docs/roadmap/BACKLOG.md](../../../../sources/optave__ops-codegraph-tool/docs/roadmap/BACKLOG.md)<br>[docs/roadmap/BREAKING_CHANGES.md](../../../../sources/optave__ops-codegraph-tool/docs/roadmap/BREAKING_CHANGES.md)<br>[docs/roadmap/llm-integration.md](../../../../sources/optave__ops-codegraph-tool/docs/roadmap/llm-integration.md)<br>[docs/roadmap/ROADMAP.md](../../../../sources/optave__ops-codegraph-tool/docs/roadmap/ROADMAP.md)<br>[docs/reports/claude-code-architecture-lessons.md](../../../../sources/optave__ops-codegraph-tool/docs/reports/claude-code-architecture-lessons.md)<br>[docs/architecture/decisions/001-dual-engine-architecture.md](../../../../sources/optave__ops-codegraph-tool/docs/architecture/decisions/001-dual-engine-architecture.md) |
| eval | 608 | [tests/unit/boundaries.test.ts](../../../../sources/optave__ops-codegraph-tool/tests/unit/boundaries.test.ts)<br>[tests/unit/builder.test.ts](../../../../sources/optave__ops-codegraph-tool/tests/unit/builder.test.ts)<br>[tests/unit/call-resolver.test.ts](../../../../sources/optave__ops-codegraph-tool/tests/unit/call-resolver.test.ts)<br>[tests/unit/cfg.test.ts](../../../../sources/optave__ops-codegraph-tool/tests/unit/cfg.test.ts)<br>[tests/unit/change-journal.test.ts](../../../../sources/optave__ops-codegraph-tool/tests/unit/change-journal.test.ts)<br>[tests/unit/complexity.test.ts](../../../../sources/optave__ops-codegraph-tool/tests/unit/complexity.test.ts)<br>[tests/unit/config-user.test.ts](../../../../sources/optave__ops-codegraph-tool/tests/unit/config-user.test.ts)<br>[tests/unit/config.test.ts](../../../../sources/optave__ops-codegraph-tool/tests/unit/config.test.ts) |
| security | 16 | [SECURITY.md](../../../../sources/optave__ops-codegraph-tool/SECURITY.md)<br>[tests/integration/audit.test.ts](../../../../sources/optave__ops-codegraph-tool/tests/integration/audit.test.ts)<br>[tests/benchmarks/regression-guard.test.ts](../../../../sources/optave__ops-codegraph-tool/tests/benchmarks/regression-guard.test.ts)<br>[src/presentation/audit.ts](../../../../sources/optave__ops-codegraph-tool/src/presentation/audit.ts)<br>[src/mcp/tools/audit.ts](../../../../sources/optave__ops-codegraph-tool/src/mcp/tools/audit.ts)<br>[src/features/audit.ts](../../../../sources/optave__ops-codegraph-tool/src/features/audit.ts)<br>[src/cli/commands/audit.ts](../../../../sources/optave__ops-codegraph-tool/src/cli/commands/audit.ts)<br>[generated/deps-audit/DEPS_AUDIT_2026-03-24.md](../../../../sources/optave__ops-codegraph-tool/generated/deps-audit/DEPS_AUDIT_2026-03-24.md) |
| ci | 12 | [.github/workflows/benchmark.yml](../../../../sources/optave__ops-codegraph-tool/.github/workflows/benchmark.yml)<br>[.github/workflows/build-native.yml](../../../../sources/optave__ops-codegraph-tool/.github/workflows/build-native.yml)<br>[.github/workflows/ci.yml](../../../../sources/optave__ops-codegraph-tool/.github/workflows/ci.yml)<br>[.github/workflows/cla.yml](../../../../sources/optave__ops-codegraph-tool/.github/workflows/cla.yml)<br>[.github/workflows/claude.yml](../../../../sources/optave__ops-codegraph-tool/.github/workflows/claude.yml)<br>[.github/workflows/codegraph-impact-comment.yml](../../../../sources/optave__ops-codegraph-tool/.github/workflows/codegraph-impact-comment.yml)<br>[.github/workflows/codegraph-impact.yml](../../../../sources/optave__ops-codegraph-tool/.github/workflows/codegraph-impact.yml)<br>[.github/workflows/commitlint.yml](../../../../sources/optave__ops-codegraph-tool/.github/workflows/commitlint.yml) |
| container | 0 | not obvious |
| instruction | 1 | [CLAUDE.md](../../../../sources/optave__ops-codegraph-tool/CLAUDE.md) |
| docs | 47 | [README.md](../../../../sources/optave__ops-codegraph-tool/README.md)<br>[docs/json-schema.md](../../../../sources/optave__ops-codegraph-tool/docs/json-schema.md)<br>[docs/use-cases/harness-engineering.md](../../../../sources/optave__ops-codegraph-tool/docs/use-cases/harness-engineering.md)<br>[docs/use-cases/titan-paradigm.md](../../../../sources/optave__ops-codegraph-tool/docs/use-cases/titan-paradigm.md)<br>[docs/roadmap/BACKLOG.md](../../../../sources/optave__ops-codegraph-tool/docs/roadmap/BACKLOG.md)<br>[docs/roadmap/BREAKING_CHANGES.md](../../../../sources/optave__ops-codegraph-tool/docs/roadmap/BREAKING_CHANGES.md)<br>[docs/roadmap/llm-integration.md](../../../../sources/optave__ops-codegraph-tool/docs/roadmap/llm-integration.md)<br>[docs/roadmap/ROADMAP.md](../../../../sources/optave__ops-codegraph-tool/docs/roadmap/ROADMAP.md) |
| config | 7 | [Cargo.lock](../../../../sources/optave__ops-codegraph-tool/Cargo.lock)<br>[Cargo.toml](../../../../sources/optave__ops-codegraph-tool/Cargo.toml)<br>[package.json](../../../../sources/optave__ops-codegraph-tool/package.json)<br>[tsconfig.json](../../../../sources/optave__ops-codegraph-tool/tsconfig.json)<br>[tests/benchmarks/resolution/fixtures/java/Makefile](../../../../sources/optave__ops-codegraph-tool/tests/benchmarks/resolution/fixtures/java/Makefile)<br>[crates/codegraph-core/Cargo.toml](../../../../sources/optave__ops-codegraph-tool/crates/codegraph-core/Cargo.toml)<br>[crates/codegraph-core/package.json](../../../../sources/optave__ops-codegraph-tool/crates/codegraph-core/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 608 | [tests/unit/boundaries.test.ts](../../../../sources/optave__ops-codegraph-tool/tests/unit/boundaries.test.ts)<br>[tests/unit/builder.test.ts](../../../../sources/optave__ops-codegraph-tool/tests/unit/builder.test.ts)<br>[tests/unit/call-resolver.test.ts](../../../../sources/optave__ops-codegraph-tool/tests/unit/call-resolver.test.ts)<br>[tests/unit/cfg.test.ts](../../../../sources/optave__ops-codegraph-tool/tests/unit/cfg.test.ts)<br>[tests/unit/change-journal.test.ts](../../../../sources/optave__ops-codegraph-tool/tests/unit/change-journal.test.ts)<br>[tests/unit/complexity.test.ts](../../../../sources/optave__ops-codegraph-tool/tests/unit/complexity.test.ts) |
| CI workflows | 12 | [.github/workflows/benchmark.yml](../../../../sources/optave__ops-codegraph-tool/.github/workflows/benchmark.yml)<br>[.github/workflows/build-native.yml](../../../../sources/optave__ops-codegraph-tool/.github/workflows/build-native.yml)<br>[.github/workflows/ci.yml](../../../../sources/optave__ops-codegraph-tool/.github/workflows/ci.yml)<br>[.github/workflows/cla.yml](../../../../sources/optave__ops-codegraph-tool/.github/workflows/cla.yml)<br>[.github/workflows/claude.yml](../../../../sources/optave__ops-codegraph-tool/.github/workflows/claude.yml)<br>[.github/workflows/codegraph-impact-comment.yml](../../../../sources/optave__ops-codegraph-tool/.github/workflows/codegraph-impact-comment.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 16 | [SECURITY.md](../../../../sources/optave__ops-codegraph-tool/SECURITY.md)<br>[tests/integration/audit.test.ts](../../../../sources/optave__ops-codegraph-tool/tests/integration/audit.test.ts)<br>[tests/benchmarks/regression-guard.test.ts](../../../../sources/optave__ops-codegraph-tool/tests/benchmarks/regression-guard.test.ts)<br>[src/presentation/audit.ts](../../../../sources/optave__ops-codegraph-tool/src/presentation/audit.ts)<br>[src/mcp/tools/audit.ts](../../../../sources/optave__ops-codegraph-tool/src/mcp/tools/audit.ts)<br>[src/features/audit.ts](../../../../sources/optave__ops-codegraph-tool/src/features/audit.ts) |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/optave__ops-codegraph-tool/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/unit/mcp.test.ts`, `src/mcp/index.ts`, `src/mcp/middleware.ts`.
2. Trace execution through entrypoints: `tests/fixtures/barrel-project/src/index.js`, `tests/benchmarks/resolution/fixtures/python/main.py`, `tests/benchmarks/resolution/fixtures/go/main.go`.
3. Map agent/tool runtime through: `tests/integration/context.test.ts`, `tests/builder/context.test.ts`, `src/mcp/tool-registry.ts`.
4. Inspect retrieval/memory/indexing through: `tests/unit/in-memory-repository.test.ts`, `tests/unit/index-exports.test.ts`, `tests/search/embedding-regression.test.ts`.
5. Verify behavior through test/eval files: `tests/unit/boundaries.test.ts`, `tests/unit/builder.test.ts`, `tests/unit/call-resolver.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Code intelligence CLI — function level dependency graph across 34 languages, 34 tool MCP server for AI agents, complexit. 핵심 구조 신호는 TypeScript, package.json, Cargo.toml, README.md, CLAUDE.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
