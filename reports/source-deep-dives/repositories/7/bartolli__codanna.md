# bartolli/codanna Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local clone structure analysis: 822 files, 201 directories.

## 요약

- 조사 단위: `sources/bartolli__codanna` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 821 files, 197 directories, depth score 130, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

평가/관측/품질 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 eval=tests/cli_tests.rs, tests/exploration_tests.rs, tests/integration_tests.rs이고, 의존성 단서는 mcp, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 quality and evaluation comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | bartolli/codanna |
| Topic | Evals, Observability, and Quality / 평가/관측/품질 |
| Region | mixed |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/bartolli__codanna](../../../../sources/bartolli__codanna) |
| Existing report | [reports/clone-structures/bartolli__codanna.md](../../../clone-structures/bartolli__codanna.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 821 / 197 |
| Max observed depth | 10 |
| Top directories | .github, benches, contributing, examples, scripts, src, tests |
| Top extensions | .rs: 420, .tsx: 96, .ts: 49, .md: 48, .json: 28, .js: 27, .go: 21, .sh: 17, .txt: 15, .py: 12, .kt: 9, .php: 9 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 71 |
| src | source boundary | 38 |
| examples/typescript | examples workspace | 11 |
| examples/javascript | examples workspace | 9 |
| examples/go | examples workspace | 3 |
| examples/python | examples workspace | 2 |
| examples/rust | examples workspace | 2 |
| .github | ci surface | 1 |
| benches | validation surface | 1 |
| contributing | top-level component | 1 |
| examples | top-level component | 1 |
| examples/kotlin | examples workspace | 1 |
| scripts | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | mcp |
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
| eval | [tests/cli_tests.rs](../../../../sources/bartolli__codanna/tests/cli_tests.rs) | eval signal |
| eval | [tests/exploration_tests.rs](../../../../sources/bartolli__codanna/tests/exploration_tests.rs) | eval signal |
| eval | [tests/integration_tests.rs](../../../../sources/bartolli__codanna/tests/integration_tests.rs) | eval signal |
| eval | [tests/parsers_tests.rs](../../../../sources/bartolli__codanna/tests/parsers_tests.rs) | eval signal |
| entrypoints | [tests/fixtures/typescript_alias_test/src/app.ts](../../../../sources/bartolli__codanna/tests/fixtures/typescript_alias_test/src/app.ts) | entrypoints signal |
| entrypoints | [tests/fixtures/go/vendor_project/main.go](../../../../sources/bartolli__codanna/tests/fixtures/go/vendor_project/main.go) | entrypoints signal |
| entrypoints | [tests/fixtures/go/module_project/main.go](../../../../sources/bartolli__codanna/tests/fixtures/go/module_project/main.go) | entrypoints signal |
| entrypoints | [src/main.rs](../../../../sources/bartolli__codanna/src/main.rs) | entrypoints signal |
| config | [Cargo.lock](../../../../sources/bartolli__codanna/Cargo.lock) | config signal |
| config | [Cargo.toml](../../../../sources/bartolli__codanna/Cargo.toml) | config signal |
| config | [tests/fixtures/typescript_alias_test/tsconfig.json](../../../../sources/bartolli__codanna/tests/fixtures/typescript_alias_test/tsconfig.json) | config signal |
| config | [tests/fixtures/go/go.mod](../../../../sources/bartolli__codanna/tests/fixtures/go/go.mod) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 10 | [tests/fixtures/typescript_alias_test/src/app.ts](../../../../sources/bartolli__codanna/tests/fixtures/typescript_alias_test/src/app.ts)<br>[tests/fixtures/go/vendor_project/main.go](../../../../sources/bartolli__codanna/tests/fixtures/go/vendor_project/main.go)<br>[tests/fixtures/go/module_project/main.go](../../../../sources/bartolli__codanna/tests/fixtures/go/module_project/main.go)<br>[src/main.rs](../../../../sources/bartolli__codanna/src/main.rs)<br>[examples/typescript/src/main.ts](../../../../sources/bartolli__codanna/examples/typescript/src/main.ts)<br>[examples/rust/multi_module/main.rs](../../../../sources/bartolli__codanna/examples/rust/multi_module/main.rs)<br>[examples/python/main.py](../../../../sources/bartolli__codanna/examples/python/main.py)<br>[examples/javascript/vanilla/src/app.js](../../../../sources/bartolli__codanna/examples/javascript/vanilla/src/app.js) |
| agentRuntime | 12 | [src/symbol/context.rs](../../../../sources/bartolli__codanna/src/symbol/context.rs)<br>[src/storage/memory.rs](../../../../sources/bartolli__codanna/src/storage/memory.rs)<br>[src/parsing/context.rs](../../../../sources/bartolli__codanna/src/parsing/context.rs)<br>[src/indexing/pipeline/stages/context.rs](../../../../sources/bartolli__codanna/src/indexing/pipeline/stages/context.rs)<br>[examples/typescript/react/src/hooks/use-config.ts](../../../../sources/bartolli__codanna/examples/typescript/react/src/hooks/use-config.ts)<br>[examples/typescript/react/src/hooks/use-media-query.tsx](../../../../sources/bartolli__codanna/examples/typescript/react/src/hooks/use-media-query.tsx)<br>[examples/typescript/react/src/hooks/useMatchMedia.ts](../../../../sources/bartolli__codanna/examples/typescript/react/src/hooks/useMatchMedia.ts)<br>[examples/kotlin/context_receiver.kt](../../../../sources/bartolli__codanna/examples/kotlin/context_receiver.kt) |
| mcp | 10 | [.mcp_stdio.json](../../../../sources/bartolli__codanna/.mcp_stdio.json)<br>[tests/integration/test_gdscript_mcp.rs](../../../../sources/bartolli__codanna/tests/integration/test_gdscript_mcp.rs)<br>[tests/integration/test_mcp_schema.rs](../../../../sources/bartolli__codanna/tests/integration/test_mcp_schema.rs)<br>[tests/cli/test_mcp_index_info_remote_status.rs](../../../../sources/bartolli__codanna/tests/cli/test_mcp_index_info_remote_status.rs)<br>[src/mcp/client.rs](../../../../sources/bartolli__codanna/src/mcp/client.rs)<br>[src/mcp/http_server.rs](../../../../sources/bartolli__codanna/src/mcp/http_server.rs)<br>[src/mcp/https_server.rs](../../../../sources/bartolli__codanna/src/mcp/https_server.rs)<br>[src/mcp/mod.rs](../../../../sources/bartolli__codanna/src/mcp/mod.rs) |
| retrieval | 16 | [tests/integration/embedding_model_comparison.rs](../../../../sources/bartolli__codanna/tests/integration/embedding_model_comparison.rs)<br>[tests/cli/test_mcp_index_info_remote_status.rs](../../../../sources/bartolli__codanna/tests/cli/test_mcp_index_info_remote_status.rs)<br>[src/vector/clustering.rs](../../../../sources/bartolli__codanna/src/vector/clustering.rs)<br>[src/vector/embedding.rs](../../../../sources/bartolli__codanna/src/vector/embedding.rs)<br>[src/vector/engine.rs](../../../../sources/bartolli__codanna/src/vector/engine.rs)<br>[src/vector/mod.rs](../../../../sources/bartolli__codanna/src/vector/mod.rs)<br>[src/vector/storage.rs](../../../../sources/bartolli__codanna/src/vector/storage.rs)<br>[src/vector/types.rs](../../../../sources/bartolli__codanna/src/vector/types.rs) |
| spec | 1 | [contributing/development/language-architecture.md](../../../../sources/bartolli__codanna/contributing/development/language-architecture.md) |
| eval | 213 | [tests/cli_tests.rs](../../../../sources/bartolli__codanna/tests/cli_tests.rs)<br>[tests/exploration_tests.rs](../../../../sources/bartolli__codanna/tests/exploration_tests.rs)<br>[tests/integration_tests.rs](../../../../sources/bartolli__codanna/tests/integration_tests.rs)<br>[tests/parsers_tests.rs](../../../../sources/bartolli__codanna/tests/parsers_tests.rs)<br>[tests/plugins_tests.rs](../../../../sources/bartolli__codanna/tests/plugins_tests.rs)<br>[tests/profiles_tests.rs](../../../../sources/bartolli__codanna/tests/profiles_tests.rs)<br>[tests/tui_tests.rs](../../../../sources/bartolli__codanna/tests/tui_tests.rs)<br>[tests/tui/progress_widgets.rs](../../../../sources/bartolli__codanna/tests/tui/progress_widgets.rs) |
| security | 52 | [tests/exploration/abi15_grammar_audit/c.rs](../../../../sources/bartolli__codanna/tests/exploration/abi15_grammar_audit/c.rs)<br>[tests/exploration/abi15_grammar_audit/clojure.rs](../../../../sources/bartolli__codanna/tests/exploration/abi15_grammar_audit/clojure.rs)<br>[tests/exploration/abi15_grammar_audit/cpp.rs](../../../../sources/bartolli__codanna/tests/exploration/abi15_grammar_audit/cpp.rs)<br>[tests/exploration/abi15_grammar_audit/csharp.rs](../../../../sources/bartolli__codanna/tests/exploration/abi15_grammar_audit/csharp.rs)<br>[tests/exploration/abi15_grammar_audit/gdscript.rs](../../../../sources/bartolli__codanna/tests/exploration/abi15_grammar_audit/gdscript.rs)<br>[tests/exploration/abi15_grammar_audit/go.rs](../../../../sources/bartolli__codanna/tests/exploration/abi15_grammar_audit/go.rs)<br>[tests/exploration/abi15_grammar_audit/helpers.rs](../../../../sources/bartolli__codanna/tests/exploration/abi15_grammar_audit/helpers.rs)<br>[tests/exploration/abi15_grammar_audit/java.rs](../../../../sources/bartolli__codanna/tests/exploration/abi15_grammar_audit/java.rs) |
| ci | 6 | [.github/workflows/autofix.yml](../../../../sources/bartolli__codanna/.github/workflows/autofix.yml)<br>[.github/workflows/brew-update.yml](../../../../sources/bartolli__codanna/.github/workflows/brew-update.yml)<br>[.github/workflows/full-test.yml](../../../../sources/bartolli__codanna/.github/workflows/full-test.yml)<br>[.github/workflows/pr-comment.yml](../../../../sources/bartolli__codanna/.github/workflows/pr-comment.yml)<br>[.github/workflows/quick-check.yml](../../../../sources/bartolli__codanna/.github/workflows/quick-check.yml)<br>[.github/workflows/release.yml](../../../../sources/bartolli__codanna/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 1 | [CLAUDE.md.example](../../../../sources/bartolli__codanna/CLAUDE.md.example) |
| docs | 6 | [README.md](../../../../sources/bartolli__codanna/README.md)<br>[tests/parsers/README.md](../../../../sources/bartolli__codanna/tests/parsers/README.md)<br>[examples/typescript/react/README.md](../../../../sources/bartolli__codanna/examples/typescript/react/README.md)<br>[contributing/README.md](../../../../sources/bartolli__codanna/contributing/README.md)<br>[contributing/tree-sitter/README.md](../../../../sources/bartolli__codanna/contributing/tree-sitter/README.md)<br>[contributing/development/README.md](../../../../sources/bartolli__codanna/contributing/development/README.md) |
| config | 11 | [Cargo.lock](../../../../sources/bartolli__codanna/Cargo.lock)<br>[Cargo.toml](../../../../sources/bartolli__codanna/Cargo.toml)<br>[tests/fixtures/typescript_alias_test/tsconfig.json](../../../../sources/bartolli__codanna/tests/fixtures/typescript_alias_test/tsconfig.json)<br>[tests/fixtures/go/go.mod](../../../../sources/bartolli__codanna/tests/fixtures/go/go.mod)<br>[tests/fixtures/go/vendor_project/go.mod](../../../../sources/bartolli__codanna/tests/fixtures/go/vendor_project/go.mod)<br>[tests/fixtures/go/module_project/go.mod](../../../../sources/bartolli__codanna/tests/fixtures/go/module_project/go.mod)<br>[examples/typescript/tsconfig.json](../../../../sources/bartolli__codanna/examples/typescript/tsconfig.json)<br>[examples/typescript/react/package.json](../../../../sources/bartolli__codanna/examples/typescript/react/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 213 | [tests/cli_tests.rs](../../../../sources/bartolli__codanna/tests/cli_tests.rs)<br>[tests/exploration_tests.rs](../../../../sources/bartolli__codanna/tests/exploration_tests.rs)<br>[tests/integration_tests.rs](../../../../sources/bartolli__codanna/tests/integration_tests.rs)<br>[tests/parsers_tests.rs](../../../../sources/bartolli__codanna/tests/parsers_tests.rs)<br>[tests/plugins_tests.rs](../../../../sources/bartolli__codanna/tests/plugins_tests.rs)<br>[tests/profiles_tests.rs](../../../../sources/bartolli__codanna/tests/profiles_tests.rs) |
| CI workflows | 6 | [.github/workflows/autofix.yml](../../../../sources/bartolli__codanna/.github/workflows/autofix.yml)<br>[.github/workflows/brew-update.yml](../../../../sources/bartolli__codanna/.github/workflows/brew-update.yml)<br>[.github/workflows/full-test.yml](../../../../sources/bartolli__codanna/.github/workflows/full-test.yml)<br>[.github/workflows/pr-comment.yml](../../../../sources/bartolli__codanna/.github/workflows/pr-comment.yml)<br>[.github/workflows/quick-check.yml](../../../../sources/bartolli__codanna/.github/workflows/quick-check.yml)<br>[.github/workflows/release.yml](../../../../sources/bartolli__codanna/.github/workflows/release.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 52 | [tests/exploration/abi15_grammar_audit/c.rs](../../../../sources/bartolli__codanna/tests/exploration/abi15_grammar_audit/c.rs)<br>[tests/exploration/abi15_grammar_audit/clojure.rs](../../../../sources/bartolli__codanna/tests/exploration/abi15_grammar_audit/clojure.rs)<br>[tests/exploration/abi15_grammar_audit/cpp.rs](../../../../sources/bartolli__codanna/tests/exploration/abi15_grammar_audit/cpp.rs)<br>[tests/exploration/abi15_grammar_audit/csharp.rs](../../../../sources/bartolli__codanna/tests/exploration/abi15_grammar_audit/csharp.rs)<br>[tests/exploration/abi15_grammar_audit/gdscript.rs](../../../../sources/bartolli__codanna/tests/exploration/abi15_grammar_audit/gdscript.rs)<br>[tests/exploration/abi15_grammar_audit/go.rs](../../../../sources/bartolli__codanna/tests/exploration/abi15_grammar_audit/go.rs) |
| Agent instructions | 1 | [CLAUDE.md.example](../../../../sources/bartolli__codanna/CLAUDE.md.example) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/cli_tests.rs`, `tests/exploration_tests.rs`, `tests/integration_tests.rs`.
2. Trace execution through entrypoints: `tests/fixtures/typescript_alias_test/src/app.ts`, `tests/fixtures/go/vendor_project/main.go`, `tests/fixtures/go/module_project/main.go`.
3. Map agent/tool runtime through: `src/symbol/context.rs`, `src/storage/memory.rs`, `src/parsing/context.rs`.
4. Inspect retrieval/memory/indexing through: `tests/integration/embedding_model_comparison.rs`, `tests/cli/test_mcp_index_info_remote_status.rs`, `src/vector/clustering.rs`.
5. Verify behavior through test/eval files: `tests/cli_tests.rs`, `tests/exploration_tests.rs`, `tests/integration_tests.rs`.

## Existing Repository Insight

평가/관측/품질 관점에서 Local clone structure analysis 822 files, 201 directories.. 핵심 구조 신호는 Cargo.toml, README.md, LICENSE, mcp, tests, ci이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 평가/관측/품질 레포입니다. 활용 관점은 quality and evaluation comparison point이고, 후속 확인 포인트는 license metadata missing입니다.
