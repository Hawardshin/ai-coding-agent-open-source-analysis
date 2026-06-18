# CodeBendKit/codeseek Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Rust-powered code intelligence CLI for AI coding agents. Builds call graphs and hybrid semantic search indexes (Dense + Sparse + RRF + Reranker) across 7 languages. Ships as native MCP tools for Claude Code and Codex CLI.

## 요약

- 조사 단위: `sources/CodeBendKit__codeseek` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 144 files, 40 directories, depth score 117, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=rust-core/src/mcp/mod.rs, rust-core/src/mcp/server.rs, rust-core/src/mcp/tools.rs이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | CodeBendKit/codeseek |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Rust |
| Stars | 185 |
| Forks | 16 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/CodeBendKit__codeseek](../../../../sources/CodeBendKit__codeseek) |
| Existing report | [reports/global-trending/repositories/CodeBendKit__codeseek.md](../../../global-trending/repositories/CodeBendKit__codeseek.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 144 / 40 |
| Max observed depth | 6 |
| Top directories | .github, docs, Formula, rust-core, scripts, src |
| Top extensions | .rs: 65, .json: 16, .md: 8, .ts: 8, .decl_json: 7, .py: 7, .skeleton: 7, .js: 6, .yml: 4, .sh: 3, .cpp: 2, .go: 2 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 8 |
| src | source boundary | 2 |
| .github | ci surface | 1 |
| Formula | top-level component | 1 |
| rust-core | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | tsc |
| build | package.json | postinstall | node -e "var f='dist/install/download.js';require('fs').existsSync(f)&&require('./'+f)" \|\| true |
| utility | package.json | preuninstall | echo 'Run codeseek uninstall-hooks to clean up git hooks' |
| build | package.json | prepublishOnly | npm run build |
| entrypoint | package.json bin | codeseek.js | dist/bin/codeseek.js |


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
| mcp | [rust-core/src/mcp/mod.rs](../../../../sources/CodeBendKit__codeseek/rust-core/src/mcp/mod.rs) | mcp signal |
| mcp | [rust-core/src/mcp/server.rs](../../../../sources/CodeBendKit__codeseek/rust-core/src/mcp/server.rs) | mcp signal |
| mcp | [rust-core/src/mcp/tools.rs](../../../../sources/CodeBendKit__codeseek/rust-core/src/mcp/tools.rs) | mcp signal |
| agentRuntime | [rust-core/src/cli/runner.rs](../../../../sources/CodeBendKit__codeseek/rust-core/src/cli/runner.rs) | agentRuntime signal |
| agentRuntime | [docs/sandbox-设计思路.md](../../../../sources/CodeBendKit__codeseek/docs/sandbox-设计思路.md) | agentRuntime signal |
| entrypoints | [src/bin/codeseek.ts](../../../../sources/CodeBendKit__codeseek/src/bin/codeseek.ts) | entrypoints signal |
| entrypoints | [rust-core/tests/test_repos/simple_ts_project/src/main.ts](../../../../sources/CodeBendKit__codeseek/rust-core/tests/test_repos/simple_ts_project/src/main.ts) | entrypoints signal |
| entrypoints | [rust-core/tests/test_repos/simple_rust_project/src/main.rs](../../../../sources/CodeBendKit__codeseek/rust-core/tests/test_repos/simple_rust_project/src/main.rs) | entrypoints signal |
| entrypoints | [rust-core/tests/test_repos/simple_python_project/main.py](../../../../sources/CodeBendKit__codeseek/rust-core/tests/test_repos/simple_python_project/main.py) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/CodeBendKit__codeseek/CLAUDE.md) | instruction signal |
| config | [package.json](../../../../sources/CodeBendKit__codeseek/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/CodeBendKit__codeseek/tsconfig.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 16 | [src/bin/codeseek.ts](../../../../sources/CodeBendKit__codeseek/src/bin/codeseek.ts)<br>[rust-core/tests/test_repos/simple_ts_project/src/main.ts](../../../../sources/CodeBendKit__codeseek/rust-core/tests/test_repos/simple_ts_project/src/main.ts)<br>[rust-core/tests/test_repos/simple_rust_project/src/main.rs](../../../../sources/CodeBendKit__codeseek/rust-core/tests/test_repos/simple_rust_project/src/main.rs)<br>[rust-core/tests/test_repos/simple_python_project/main.py](../../../../sources/CodeBendKit__codeseek/rust-core/tests/test_repos/simple_python_project/main.py)<br>[rust-core/tests/fixtures/cases/ts/main.ts](../../../../sources/CodeBendKit__codeseek/rust-core/tests/fixtures/cases/ts/main.ts)<br>[rust-core/tests/fixtures/cases/ts/main.ts.json](../../../../sources/CodeBendKit__codeseek/rust-core/tests/fixtures/cases/ts/main.ts.json)<br>[rust-core/tests/fixtures/cases/rust/main.rs](../../../../sources/CodeBendKit__codeseek/rust-core/tests/fixtures/cases/rust/main.rs)<br>[rust-core/tests/fixtures/cases/rust/main.rs.json](../../../../sources/CodeBendKit__codeseek/rust-core/tests/fixtures/cases/rust/main.rs.json) |
| agentRuntime | 3 | [rust-core/src/mcp/tools.rs](../../../../sources/CodeBendKit__codeseek/rust-core/src/mcp/tools.rs)<br>[rust-core/src/cli/runner.rs](../../../../sources/CodeBendKit__codeseek/rust-core/src/cli/runner.rs)<br>[docs/sandbox-设计思路.md](../../../../sources/CodeBendKit__codeseek/docs/sandbox-设计思路.md) |
| mcp | 3 | [rust-core/src/mcp/mod.rs](../../../../sources/CodeBendKit__codeseek/rust-core/src/mcp/mod.rs)<br>[rust-core/src/mcp/server.rs](../../../../sources/CodeBendKit__codeseek/rust-core/src/mcp/server.rs)<br>[rust-core/src/mcp/tools.rs](../../../../sources/CodeBendKit__codeseek/rust-core/src/mcp/tools.rs) |
| retrieval | 4 | [rust-core/tests/test_repos/simple_js_project/index.js](../../../../sources/CodeBendKit__codeseek/rust-core/tests/test_repos/simple_js_project/index.js)<br>[rust-core/src/storage/tantivy_index.rs](../../../../sources/CodeBendKit__codeseek/rust-core/src/storage/tantivy_index.rs)<br>[rust-core/src/services/embedding_service.rs](../../../../sources/CodeBendKit__codeseek/rust-core/src/services/embedding_service.rs)<br>[rust-core/src/codegraph/graph.rs](../../../../sources/CodeBendKit__codeseek/rust-core/src/codegraph/graph.rs) |
| spec | 1 | [docs/ARCHITECTURE.md](../../../../sources/CodeBendKit__codeseek/docs/ARCHITECTURE.md) |
| eval | 68 | [rust-core/tests/core-ouptputs.json](../../../../sources/CodeBendKit__codeseek/rust-core/tests/core-ouptputs.json)<br>[rust-core/tests/run_functional_tests.sh](../../../../sources/CodeBendKit__codeseek/rust-core/tests/run_functional_tests.sh)<br>[rust-core/tests/test_functional.rs](../../../../sources/CodeBendKit__codeseek/rust-core/tests/test_functional.rs)<br>[rust-core/tests/test_semantic_search.py](../../../../sources/CodeBendKit__codeseek/rust-core/tests/test_semantic_search.py)<br>[rust-core/tests/test_repos/simple_ts_project/package.json](../../../../sources/CodeBendKit__codeseek/rust-core/tests/test_repos/simple_ts_project/package.json)<br>[rust-core/tests/test_repos/simple_ts_project/tsconfig.json](../../../../sources/CodeBendKit__codeseek/rust-core/tests/test_repos/simple_ts_project/tsconfig.json)<br>[rust-core/tests/test_repos/simple_ts_project/src/dataProcessor.ts](../../../../sources/CodeBendKit__codeseek/rust-core/tests/test_repos/simple_ts_project/src/dataProcessor.ts)<br>[rust-core/tests/test_repos/simple_ts_project/src/main.ts](../../../../sources/CodeBendKit__codeseek/rust-core/tests/test_repos/simple_ts_project/src/main.ts) |
| security | 1 | [docs/sandbox-设计思路.md](../../../../sources/CodeBendKit__codeseek/docs/sandbox-设计思路.md) |
| ci | 1 | [.github/workflows/release.yml](../../../../sources/CodeBendKit__codeseek/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 1 | [CLAUDE.md](../../../../sources/CodeBendKit__codeseek/CLAUDE.md) |
| docs | 6 | [README_ZH.md](../../../../sources/CodeBendKit__codeseek/README_ZH.md)<br>[README.md](../../../../sources/CodeBendKit__codeseek/README.md)<br>[docs/ARCHITECTURE.md](../../../../sources/CodeBendKit__codeseek/docs/ARCHITECTURE.md)<br>[docs/codeseek-cli-rewrite-plan.md](../../../../sources/CodeBendKit__codeseek/docs/codeseek-cli-rewrite-plan.md)<br>[docs/sandbox-设计思路.md](../../../../sources/CodeBendKit__codeseek/docs/sandbox-设计思路.md)<br>[docs/SETUP_GUIDE.md](../../../../sources/CodeBendKit__codeseek/docs/SETUP_GUIDE.md) |
| config | 9 | [package.json](../../../../sources/CodeBendKit__codeseek/package.json)<br>[tsconfig.json](../../../../sources/CodeBendKit__codeseek/tsconfig.json)<br>[rust-core/Cargo.lock](../../../../sources/CodeBendKit__codeseek/rust-core/Cargo.lock)<br>[rust-core/Cargo.toml](../../../../sources/CodeBendKit__codeseek/rust-core/Cargo.toml)<br>[rust-core/tests/test_repos/simple_ts_project/package.json](../../../../sources/CodeBendKit__codeseek/rust-core/tests/test_repos/simple_ts_project/package.json)<br>[rust-core/tests/test_repos/simple_ts_project/tsconfig.json](../../../../sources/CodeBendKit__codeseek/rust-core/tests/test_repos/simple_ts_project/tsconfig.json)<br>[rust-core/tests/test_repos/simple_rust_project/Cargo.lock](../../../../sources/CodeBendKit__codeseek/rust-core/tests/test_repos/simple_rust_project/Cargo.lock)<br>[rust-core/tests/test_repos/simple_rust_project/Cargo.toml](../../../../sources/CodeBendKit__codeseek/rust-core/tests/test_repos/simple_rust_project/Cargo.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 68 | [rust-core/tests/core-ouptputs.json](../../../../sources/CodeBendKit__codeseek/rust-core/tests/core-ouptputs.json)<br>[rust-core/tests/run_functional_tests.sh](../../../../sources/CodeBendKit__codeseek/rust-core/tests/run_functional_tests.sh)<br>[rust-core/tests/test_functional.rs](../../../../sources/CodeBendKit__codeseek/rust-core/tests/test_functional.rs)<br>[rust-core/tests/test_semantic_search.py](../../../../sources/CodeBendKit__codeseek/rust-core/tests/test_semantic_search.py)<br>[rust-core/tests/test_repos/simple_ts_project/package.json](../../../../sources/CodeBendKit__codeseek/rust-core/tests/test_repos/simple_ts_project/package.json)<br>[rust-core/tests/test_repos/simple_ts_project/tsconfig.json](../../../../sources/CodeBendKit__codeseek/rust-core/tests/test_repos/simple_ts_project/tsconfig.json) |
| CI workflows | 1 | [.github/workflows/release.yml](../../../../sources/CodeBendKit__codeseek/.github/workflows/release.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 1 | [docs/sandbox-设计思路.md](../../../../sources/CodeBendKit__codeseek/docs/sandbox-设计思路.md) |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/CodeBendKit__codeseek/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `rust-core/src/mcp/mod.rs`, `rust-core/src/mcp/server.rs`, `rust-core/src/mcp/tools.rs`.
2. Trace execution through entrypoints: `src/bin/codeseek.ts`, `rust-core/tests/test_repos/simple_ts_project/src/main.ts`, `rust-core/tests/test_repos/simple_rust_project/src/main.rs`.
3. Map agent/tool runtime through: `rust-core/src/mcp/tools.rs`, `rust-core/src/cli/runner.rs`, `docs/sandbox-设计思路.md`.
4. Inspect retrieval/memory/indexing through: `rust-core/tests/test_repos/simple_js_project/index.js`, `rust-core/src/storage/tantivy_index.rs`, `rust-core/src/services/embedding_service.rs`.
5. Verify behavior through test/eval files: `rust-core/tests/core-ouptputs.json`, `rust-core/tests/run_functional_tests.sh`, `rust-core/tests/test_functional.rs`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Rust powered code intelligence CLI for AI coding agents. Builds call graphs and hybrid semantic search indexes Dense + S. 핵심 구조 신호는 Rust, package.json, README.md, CLAUDE.md, LICENSE, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
