# manojmallick/sigmap Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

97% token reduction for AI coding sessions — zero deps, 31 languages, MCP server

## 요약

- 조사 단위: `sources/manojmallick__sigmap` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 477 files, 64 directories, depth score 129, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=test/regression/mcp-tools-comprehensive.js, test/integration/mcp/get-lines.test.js, test/integration/mcp/register.test.js이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | manojmallick/sigmap |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | JavaScript |
| Stars | 513 |
| Forks | 36 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/manojmallick__sigmap](../../../../sources/manojmallick__sigmap) |
| Existing report | [reports/global-trending/repositories/manojmallick__sigmap.md](../../../global-trending/repositories/manojmallick__sigmap.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 477 / 64 |
| Max observed depth | 5 |
| Top directories | .claude, .github, assets, benchmarks, docs, docs-vp, examples, packages, scripts, src, test, tests |
| Top extensions | .js: 228, .md: 72, .txt: 31, .html: 22, .mjs: 21, .jsonl: 19, .json: 17, .yml: 13, (none): 11, .gif: 4, .r: 4, .sh: 4 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 44 |
| src | source boundary | 20 |
| packages/core | packages workspace | 3 |
| packages/cli | packages workspace | 2 |
| tests | validation surface | 2 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| benchmarks | validation surface | 1 |
| docs-vp | documentation surface | 1 |
| examples | top-level component | 1 |
| packages | source boundary | 1 |
| packages/adapters | packages workspace | 1 |
| scripts | top-level component | 1 |
| test | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| test | package.json | test | node test/run.js && node test/r-language.test.js |
| test | package.json | test:integration | node test/integration/strategy.test.js && node test/integration/secret-scan.test.js && node test/integration/token-budget.test.js && node test/integration/auto-budget.test.js && node test/integration/mcp/server.test.js & |
| test | package.json | test:integration:all | node test/integration/all.js |
| test | package.json | test:all | node test/run.js && node test/r-language.test.js && node test/integration/strategy.test.js && node test/integration/secret-scan.test.js |
| utility | package.json | generate | node gen-context.js |
| serve-dev | package.json | watch | node gen-context.js --watch |
| utility | package.json | setup | node gen-context.js --setup |
| utility | package.json | init | node gen-context.js --init |
| utility | package.json | report | node gen-context.js --report |
| utility | package.json | audit:strategies | node scripts/run-strategy-audit.mjs |
| utility | package.json | benchmark:matrix | node scripts/run-benchmark-matrix.mjs --save --skip-clone |
| utility | package.json | benchmark:verify | node scripts/run-verify-benchmark.mjs |
| utility | package.json | benchmark:squeeze | node scripts/run-squeeze-benchmark.mjs --save |
| utility | package.json | validate:squeeze | node scripts/run-squeeze-benchmark.mjs --gate |
| utility | package.json | health | node gen-context.js --health |
| utility | package.json | map | node gen-project-map.js |
| utility | package.json | mcp | node gen-context.js --mcp |
| build | package.json | check:bundle | node scripts/check-bundle.mjs |
| quality | package.json | check:version-meta | node scripts/check-version-meta.mjs |
| build | package.json | build:binary | node scripts/build-binary.mjs |
| utility | package.json | verify:binary | node scripts/verify-binary.mjs |
| utility | package.json | version:sync | node scripts/sync-versions.mjs |
| utility | package.json | generate:llms | node scripts/generate-llms.mjs |
| utility | package.json | validate:llms | node scripts/validate-llms.mjs |
| build | package.json | prepublishOnly | node scripts/check-bundle.mjs && node scripts/check-version-meta.mjs && node scripts/generate-llms.mjs |
| utility | package.json | benchmark:grounding | node scripts/run-hallucination-benchmark.mjs |
| utility | package.json | benchmark:llm-ablation | node scripts/run-llm-ablation.mjs |
| entrypoint | package.json bin | gen-context.js | ./gen-context.js |
| entrypoint | package.json bin | gen-context.js | ./gen-context.js |
| entrypoint | package.json bin | gen-project-map.js | ./gen-project-map.js |


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
| mcp | [test/regression/mcp-tools-comprehensive.js](../../../../sources/manojmallick__sigmap/test/regression/mcp-tools-comprehensive.js) | mcp signal |
| mcp | [test/integration/mcp/get-lines.test.js](../../../../sources/manojmallick__sigmap/test/integration/mcp/get-lines.test.js) | mcp signal |
| mcp | [test/integration/mcp/register.test.js](../../../../sources/manojmallick__sigmap/test/integration/mcp/register.test.js) | mcp signal |
| mcp | [test/integration/mcp/server.test.js](../../../../sources/manojmallick__sigmap/test/integration/mcp/server.test.js) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/manojmallick__sigmap/AGENTS.md) | agentRuntime signal |
| agentRuntime | [test/integration/context-consistency.test.js](../../../../sources/manojmallick__sigmap/test/integration/context-consistency.test.js) | agentRuntime signal |
| agentRuntime | [test/integration/memory-tools.test.js](../../../../sources/manojmallick__sigmap/test/integration/memory-tools.test.js) | agentRuntime signal |
| agentRuntime | [test/integration/mcp/tools-v14.test.js](../../../../sources/manojmallick__sigmap/test/integration/mcp/tools-v14.test.js) | agentRuntime signal |
| entrypoints | [test/fixtures/binary-smoke/src/index.js](../../../../sources/manojmallick__sigmap/test/fixtures/binary-smoke/src/index.js) | entrypoints signal |
| entrypoints | [src/mcp/server.js](../../../../sources/manojmallick__sigmap/src/mcp/server.js) | entrypoints signal |
| instruction | [docs-vp/guide/agents.md](../../../../sources/manojmallick__sigmap/docs-vp/guide/agents.md) | instruction signal |
| config | [package.json](../../../../sources/manojmallick__sigmap/package.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [test/integration/mcp/server.test.js](../../../../sources/manojmallick__sigmap/test/integration/mcp/server.test.js)<br>[test/fixtures/binary-smoke/src/index.js](../../../../sources/manojmallick__sigmap/test/fixtures/binary-smoke/src/index.js)<br>[src/mcp/server.js](../../../../sources/manojmallick__sigmap/src/mcp/server.js) |
| agentRuntime | 11 | [AGENTS.md](../../../../sources/manojmallick__sigmap/AGENTS.md)<br>[test/integration/context-consistency.test.js](../../../../sources/manojmallick__sigmap/test/integration/context-consistency.test.js)<br>[test/integration/memory-tools.test.js](../../../../sources/manojmallick__sigmap/test/integration/memory-tools.test.js)<br>[test/integration/mcp/tools-v14.test.js](../../../../sources/manojmallick__sigmap/test/integration/mcp/tools-v14.test.js)<br>[src/session/memory.js](../../../../sources/manojmallick__sigmap/src/session/memory.js)<br>[src/plan/planner.js](../../../../sources/manojmallick__sigmap/src/plan/planner.js)<br>[src/mcp/tools.js](../../../../sources/manojmallick__sigmap/src/mcp/tools.js)<br>[src/eval/runner.js](../../../../sources/manojmallick__sigmap/src/eval/runner.js) |
| mcp | 13 | [test/regression/mcp-tools-comprehensive.js](../../../../sources/manojmallick__sigmap/test/regression/mcp-tools-comprehensive.js)<br>[test/integration/mcp/get-lines.test.js](../../../../sources/manojmallick__sigmap/test/integration/mcp/get-lines.test.js)<br>[test/integration/mcp/register.test.js](../../../../sources/manojmallick__sigmap/test/integration/mcp/register.test.js)<br>[test/integration/mcp/server.test.js](../../../../sources/manojmallick__sigmap/test/integration/mcp/server.test.js)<br>[test/integration/mcp/tools-v14.test.js](../../../../sources/manojmallick__sigmap/test/integration/mcp/tools-v14.test.js)<br>[test/integration/features/setup-mcp-targets.test.js](../../../../sources/manojmallick__sigmap/test/integration/features/setup-mcp-targets.test.js)<br>[src/mcp/handlers.js](../../../../sources/manojmallick__sigmap/src/mcp/handlers.js)<br>[src/mcp/server.js](../../../../sources/manojmallick__sigmap/src/mcp/server.js) |
| retrieval | 23 | [test/integration/memory-tools.test.js](../../../../sources/manojmallick__sigmap/test/integration/memory-tools.test.js)<br>[test/integration/retrieval.test.js](../../../../sources/manojmallick__sigmap/test/integration/retrieval.test.js)<br>[test/integration/v680-session-memory.test.js](../../../../sources/manojmallick__sigmap/test/integration/v680-session-memory.test.js)<br>[test/integration/features/v670-graph-boost-cache.test.js](../../../../sources/manojmallick__sigmap/test/integration/features/v670-graph-boost-cache.test.js)<br>[test/fixtures/binary-smoke/index.js](../../../../sources/manojmallick__sigmap/test/fixtures/binary-smoke/index.js)<br>[test/fixtures/binary-smoke/src/index.js](../../../../sources/manojmallick__sigmap/test/fixtures/binary-smoke/src/index.js)<br>[src/squeeze/index.js](../../../../sources/manojmallick__sigmap/src/squeeze/index.js)<br>[src/session/memory.js](../../../../sources/manojmallick__sigmap/src/session/memory.js) |
| spec | 3 | [docs-vp/public/roadmap.html](../../../../sources/manojmallick__sigmap/docs-vp/public/roadmap.html)<br>[docs-vp/guide/roadmap.md](../../../../sources/manojmallick__sigmap/docs-vp/guide/roadmap.md)<br>[docs/roadmap.html](../../../../sources/manojmallick__sigmap/docs/roadmap.html) |
| eval | 175 | [tests/test_python_ast_extractor.py](../../../../sources/manojmallick__sigmap/tests/test_python_ast_extractor.py)<br>[test/branching-strategy.test.js](../../../../sources/manojmallick__sigmap/test/branching-strategy.test.js)<br>[test/r-language.test.js](../../../../sources/manojmallick__sigmap/test/r-language.test.js)<br>[test/run.js](../../../../sources/manojmallick__sigmap/test/run.js)<br>[test/v351-features.test.js](../../../../sources/manojmallick__sigmap/test/v351-features.test.js)<br>[test/v360-features.test.js](../../../../sources/manojmallick__sigmap/test/v360-features.test.js)<br>[test/windows-path-normalization.test.js](../../../../sources/manojmallick__sigmap/test/windows-path-normalization.test.js)<br>[test/regression/mcp-tools-comprehensive.js](../../../../sources/manojmallick__sigmap/test/regression/mcp-tools-comprehensive.js) |
| security | 9 | [SECURITY.md](../../../../sources/manojmallick__sigmap/SECURITY.md)<br>[test/integration/secret-scan.test.js](../../../../sources/manojmallick__sigmap/test/integration/secret-scan.test.js)<br>[test/integration/extractors/audit-gates.test.js](../../../../sources/manojmallick__sigmap/test/integration/extractors/audit-gates.test.js)<br>[test/integration/extractors/typescript-guard-clauses.test.js](../../../../sources/manojmallick__sigmap/test/integration/extractors/typescript-guard-clauses.test.js)<br>[src/verify/hallucination-guard.js](../../../../sources/manojmallick__sigmap/src/verify/hallucination-guard.js)<br>[src/security/patterns.js](../../../../sources/manojmallick__sigmap/src/security/patterns.js)<br>[src/security/scanner.js](../../../../sources/manojmallick__sigmap/src/security/scanner.js)<br>[scripts/run-strategy-audit.mjs](../../../../sources/manojmallick__sigmap/scripts/run-strategy-audit.mjs) |
| ci | 8 | [.github/workflows/ci.yml](../../../../sources/manojmallick__sigmap/.github/workflows/ci.yml)<br>[.github/workflows/docs.yml](../../../../sources/manojmallick__sigmap/.github/workflows/docs.yml)<br>[.github/workflows/npm-publish.yml](../../../../sources/manojmallick__sigmap/.github/workflows/npm-publish.yml)<br>[.github/workflows/pages.yml](../../../../sources/manojmallick__sigmap/.github/workflows/pages.yml)<br>[.github/workflows/prerelease-publish.yml](../../../../sources/manojmallick__sigmap/.github/workflows/prerelease-publish.yml)<br>[.github/workflows/release-binaries.yml](../../../../sources/manojmallick__sigmap/.github/workflows/release-binaries.yml)<br>[.github/workflows/release-notes-draft.yml](../../../../sources/manojmallick__sigmap/.github/workflows/release-notes-draft.yml)<br>[.github/workflows/sync-develop-main.yml](../../../../sources/manojmallick__sigmap/.github/workflows/sync-develop-main.yml) |
| container | 3 | [test/fixtures/Dockerfile](../../../../sources/manojmallick__sigmap/test/fixtures/Dockerfile)<br>[test/expected/dockerfile.txt](../../../../sources/manojmallick__sigmap/test/expected/dockerfile.txt)<br>[src/extractors/dockerfile.js](../../../../sources/manojmallick__sigmap/src/extractors/dockerfile.js) |
| instruction | 2 | [AGENTS.md](../../../../sources/manojmallick__sigmap/AGENTS.md)<br>[docs-vp/guide/agents.md](../../../../sources/manojmallick__sigmap/docs-vp/guide/agents.md) |
| docs | 40 | [README.md](../../../../sources/manojmallick__sigmap/README.md)<br>[test/integration/features/readme-structure.test.js](../../../../sources/manojmallick__sigmap/test/integration/features/readme-structure.test.js)<br>[packages/core/README.md](../../../../sources/manojmallick__sigmap/packages/core/README.md)<br>[docs/_config.yml](../../../../sources/manojmallick__sigmap/docs/_config.yml)<br>[docs/.nojekyll](../../../../sources/manojmallick__sigmap/docs/.nojekyll)<br>[docs/cli.html](../../../../sources/manojmallick__sigmap/docs/cli.html)<br>[docs/comparison-chart.svg](../../../../sources/manojmallick__sigmap/docs/comparison-chart.svg)<br>[docs/config.html](../../../../sources/manojmallick__sigmap/docs/config.html) |
| config | 4 | [package.json](../../../../sources/manojmallick__sigmap/package.json)<br>[packages/core/package.json](../../../../sources/manojmallick__sigmap/packages/core/package.json)<br>[packages/cli/package.json](../../../../sources/manojmallick__sigmap/packages/cli/package.json)<br>[docs-vp/package.json](../../../../sources/manojmallick__sigmap/docs-vp/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 175 | [tests/test_python_ast_extractor.py](../../../../sources/manojmallick__sigmap/tests/test_python_ast_extractor.py)<br>[test/branching-strategy.test.js](../../../../sources/manojmallick__sigmap/test/branching-strategy.test.js)<br>[test/r-language.test.js](../../../../sources/manojmallick__sigmap/test/r-language.test.js)<br>[test/run.js](../../../../sources/manojmallick__sigmap/test/run.js)<br>[test/v351-features.test.js](../../../../sources/manojmallick__sigmap/test/v351-features.test.js)<br>[test/v360-features.test.js](../../../../sources/manojmallick__sigmap/test/v360-features.test.js) |
| CI workflows | 8 | [.github/workflows/ci.yml](../../../../sources/manojmallick__sigmap/.github/workflows/ci.yml)<br>[.github/workflows/docs.yml](../../../../sources/manojmallick__sigmap/.github/workflows/docs.yml)<br>[.github/workflows/npm-publish.yml](../../../../sources/manojmallick__sigmap/.github/workflows/npm-publish.yml)<br>[.github/workflows/pages.yml](../../../../sources/manojmallick__sigmap/.github/workflows/pages.yml)<br>[.github/workflows/prerelease-publish.yml](../../../../sources/manojmallick__sigmap/.github/workflows/prerelease-publish.yml)<br>[.github/workflows/release-binaries.yml](../../../../sources/manojmallick__sigmap/.github/workflows/release-binaries.yml) |
| Containers / deploy | 3 | [test/fixtures/Dockerfile](../../../../sources/manojmallick__sigmap/test/fixtures/Dockerfile)<br>[test/expected/dockerfile.txt](../../../../sources/manojmallick__sigmap/test/expected/dockerfile.txt)<br>[src/extractors/dockerfile.js](../../../../sources/manojmallick__sigmap/src/extractors/dockerfile.js) |
| Security / policy | 9 | [SECURITY.md](../../../../sources/manojmallick__sigmap/SECURITY.md)<br>[test/integration/secret-scan.test.js](../../../../sources/manojmallick__sigmap/test/integration/secret-scan.test.js)<br>[test/integration/extractors/audit-gates.test.js](../../../../sources/manojmallick__sigmap/test/integration/extractors/audit-gates.test.js)<br>[test/integration/extractors/typescript-guard-clauses.test.js](../../../../sources/manojmallick__sigmap/test/integration/extractors/typescript-guard-clauses.test.js)<br>[src/verify/hallucination-guard.js](../../../../sources/manojmallick__sigmap/src/verify/hallucination-guard.js)<br>[src/security/patterns.js](../../../../sources/manojmallick__sigmap/src/security/patterns.js) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/manojmallick__sigmap/AGENTS.md)<br>[docs-vp/guide/agents.md](../../../../sources/manojmallick__sigmap/docs-vp/guide/agents.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `test/regression/mcp-tools-comprehensive.js`, `test/integration/mcp/get-lines.test.js`, `test/integration/mcp/register.test.js`.
2. Trace execution through entrypoints: `test/integration/mcp/server.test.js`, `test/fixtures/binary-smoke/src/index.js`, `src/mcp/server.js`.
3. Map agent/tool runtime through: `AGENTS.md`, `test/integration/context-consistency.test.js`, `test/integration/memory-tools.test.js`.
4. Inspect retrieval/memory/indexing through: `test/integration/memory-tools.test.js`, `test/integration/retrieval.test.js`, `test/integration/v680-session-memory.test.js`.
5. Verify behavior through test/eval files: `tests/test_python_ast_extractor.py`, `test/branching-strategy.test.js`, `test/r-language.test.js`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 97% token reduction for AI coding sessions — zero deps, 31 languages, MCP server. 핵심 구조 신호는 JavaScript, package.json, README.md, AGENTS.md, LICENSE, tests이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
