# ThousandBirdsInc/chidori Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

The agent framework where every run is durable, replayable, and resumable by default.

## 요약

- 조사 단위: `sources/ThousandBirdsInc__chidori` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 284 files, 51 directories, depth score 116, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=crates/chidori/src/mcp/client.rs, crates/chidori/src/mcp/config.rs, crates/chidori/src/mcp/mod.rs이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | ThousandBirdsInc/chidori |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Rust |
| Stars | 1350 |
| Forks | 55 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/ThousandBirdsInc__chidori](../../../../sources/ThousandBirdsInc__chidori) |
| Existing report | [reports/global-trending/repositories/ThousandBirdsInc__chidori.md](../../../global-trending/repositories/ThousandBirdsInc__chidori.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 284 / 51 |
| Max observed depth | 6 |
| Top directories | .github, crates, docs, examples, scripts, sdk |
| Top extensions | .rs: 110, .star: 39, .ts: 38, .md: 33, .js: 12, .svg: 10, .py: 9, .json: 8, .toml: 6, .sh: 5, .yml: 5, .mjs: 3 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 38 |
| examples/legacy-starlark | examples workspace | 34 |
| crates/chidori | crates workspace | 13 |
| crates/chidori-js | crates workspace | 12 |
| examples/record-replay | examples workspace | 10 |
| crates/test262-runner | crates workspace | 2 |
| examples/multiplayer-review | examples workspace | 2 |
| examples/tools | examples workspace | 2 |
| .github | ci surface | 1 |
| crates | source boundary | 1 |
| examples | top-level component | 1 |
| examples/branching | examples workspace | 1 |
| examples/interactive-pipeline | examples workspace | 1 |
| scripts | top-level component | 1 |
| sdk | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


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
| mcp | [crates/chidori/src/mcp/client.rs](../../../../sources/ThousandBirdsInc__chidori/crates/chidori/src/mcp/client.rs) | mcp signal |
| mcp | [crates/chidori/src/mcp/config.rs](../../../../sources/ThousandBirdsInc__chidori/crates/chidori/src/mcp/config.rs) | mcp signal |
| mcp | [crates/chidori/src/mcp/mod.rs](../../../../sources/ThousandBirdsInc__chidori/crates/chidori/src/mcp/mod.rs) | mcp signal |
| agentRuntime | [sdk/typescript/src/agent.ts](../../../../sources/ThousandBirdsInc__chidori/sdk/typescript/src/agent.ts) | agentRuntime signal |
| agentRuntime | [examples/tools/reverse.ts](../../../../sources/ThousandBirdsInc__chidori/examples/tools/reverse.ts) | agentRuntime signal |
| agentRuntime | [examples/tools/web_search.ts](../../../../sources/ThousandBirdsInc__chidori/examples/tools/web_search.ts) | agentRuntime signal |
| agentRuntime | [examples/record-replay/tool_pipeline.ts](../../../../sources/ThousandBirdsInc__chidori/examples/record-replay/tool_pipeline.ts) | agentRuntime signal |
| entrypoints | [sdk/typescript/src/index.ts](../../../../sources/ThousandBirdsInc__chidori/sdk/typescript/src/index.ts) | entrypoints signal |
| entrypoints | [crates/test262-runner/src/main.rs](../../../../sources/ThousandBirdsInc__chidori/crates/test262-runner/src/main.rs) | entrypoints signal |
| entrypoints | [crates/chidori-js/src/lib.rs](../../../../sources/ThousandBirdsInc__chidori/crates/chidori-js/src/lib.rs) | entrypoints signal |
| entrypoints | [crates/chidori/src/lib.rs](../../../../sources/ThousandBirdsInc__chidori/crates/chidori/src/lib.rs) | entrypoints signal |
| config | [Cargo.lock](../../../../sources/ThousandBirdsInc__chidori/Cargo.lock) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 6 | [sdk/typescript/src/index.ts](../../../../sources/ThousandBirdsInc__chidori/sdk/typescript/src/index.ts)<br>[crates/test262-runner/src/main.rs](../../../../sources/ThousandBirdsInc__chidori/crates/test262-runner/src/main.rs)<br>[crates/chidori-js/src/lib.rs](../../../../sources/ThousandBirdsInc__chidori/crates/chidori-js/src/lib.rs)<br>[crates/chidori/src/lib.rs](../../../../sources/ThousandBirdsInc__chidori/crates/chidori/src/lib.rs)<br>[crates/chidori/src/main.rs](../../../../sources/ThousandBirdsInc__chidori/crates/chidori/src/main.rs)<br>[crates/chidori/src/server.rs](../../../../sources/ThousandBirdsInc__chidori/crates/chidori/src/server.rs) |
| agentRuntime | 71 | [sdk/typescript/src/agent.ts](../../../../sources/ThousandBirdsInc__chidori/sdk/typescript/src/agent.ts)<br>[examples/tools/reverse.ts](../../../../sources/ThousandBirdsInc__chidori/examples/tools/reverse.ts)<br>[examples/tools/web_search.ts](../../../../sources/ThousandBirdsInc__chidori/examples/tools/web_search.ts)<br>[examples/record-replay/tool_pipeline.ts](../../../../sources/ThousandBirdsInc__chidori/examples/record-replay/tool_pipeline.ts)<br>[examples/record-replay/tools/flaky_fetch.ts](../../../../sources/ThousandBirdsInc__chidori/examples/record-replay/tools/flaky_fetch.ts)<br>[examples/record-replay/tools/fx_rate.ts](../../../../sources/ThousandBirdsInc__chidori/examples/record-replay/tools/fx_rate.ts)<br>[examples/record-replay/tools/geocode.ts](../../../../sources/ThousandBirdsInc__chidori/examples/record-replay/tools/geocode.ts)<br>[examples/record-replay/tools/mint_id.ts](../../../../sources/ThousandBirdsInc__chidori/examples/record-replay/tools/mint_id.ts) |
| mcp | 3 | [crates/chidori/src/mcp/client.rs](../../../../sources/ThousandBirdsInc__chidori/crates/chidori/src/mcp/client.rs)<br>[crates/chidori/src/mcp/config.rs](../../../../sources/ThousandBirdsInc__chidori/crates/chidori/src/mcp/config.rs)<br>[crates/chidori/src/mcp/mod.rs](../../../../sources/ThousandBirdsInc__chidori/crates/chidori/src/mcp/mod.rs) |
| retrieval | 4 | [sdk/typescript/src/index.ts](../../../../sources/ThousandBirdsInc__chidori/sdk/typescript/src/index.ts)<br>[examples/legacy-starlark/agents/memory_demo.star](../../../../sources/ThousandBirdsInc__chidori/examples/legacy-starlark/agents/memory_demo.star)<br>[crates/chidori/src/runtime/memory.rs](../../../../sources/ThousandBirdsInc__chidori/crates/chidori/src/runtime/memory.rs)<br>[crates/chidori/src/runtime/typescript/module_graph.rs](../../../../sources/ThousandBirdsInc__chidori/crates/chidori/src/runtime/typescript/module_graph.rs) |
| spec | 2 | [docs/architecture.md](../../../../sources/ThousandBirdsInc__chidori/docs/architecture.md)<br>[docs/DESIGN.md](../../../../sources/ThousandBirdsInc__chidori/docs/DESIGN.md) |
| eval | 18 | [sdk/python/tests/test_session_api.py](../../../../sources/ThousandBirdsInc__chidori/sdk/python/tests/test_session_api.py)<br>[sdk/python/tests/fixtures/approval.ts](../../../../sources/ThousandBirdsInc__chidori/sdk/python/tests/fixtures/approval.ts)<br>[sdk/python/tests/fixtures/ask.ts](../../../../sources/ThousandBirdsInc__chidori/sdk/python/tests/fixtures/ask.ts)<br>[sdk/python/tests/fixtures/signal_review.ts](../../../../sources/ThousandBirdsInc__chidori/sdk/python/tests/fixtures/signal_review.ts)<br>[sdk/python/tests/fixtures/slow.ts](../../../../sources/ThousandBirdsInc__chidori/sdk/python/tests/fixtures/slow.ts)<br>[examples/legacy-starlark/agents/scale_test.star](../../../../sources/ThousandBirdsInc__chidori/examples/legacy-starlark/agents/scale_test.star)<br>[docs/trace-emitter.md](../../../../sources/ThousandBirdsInc__chidori/docs/trace-emitter.md)<br>[crates/chidori-js/tests/async_gen.rs](../../../../sources/ThousandBirdsInc__chidori/crates/chidori-js/tests/async_gen.rs) |
| security | 8 | [examples/multiplayer-review/policy_doc.ts](../../../../sources/ThousandBirdsInc__chidori/examples/multiplayer-review/policy_doc.ts)<br>[examples/legacy-starlark/agents/js_sandbox_demo.star](../../../../sources/ThousandBirdsInc__chidori/examples/legacy-starlark/agents/js_sandbox_demo.star)<br>[examples/legacy-starlark/agents/python_sandbox_demo.star](../../../../sources/ThousandBirdsInc__chidori/examples/legacy-starlark/agents/python_sandbox_demo.star)<br>[docs/sandbox-model.md](../../../../sources/ThousandBirdsInc__chidori/docs/sandbox-model.md)<br>[docs/typescript-migration-audit.md](../../../../sources/ThousandBirdsInc__chidori/docs/typescript-migration-audit.md)<br>[crates/chidori/src/mem_guard.rs](../../../../sources/ThousandBirdsInc__chidori/crates/chidori/src/mem_guard.rs)<br>[crates/chidori/src/policy.rs](../../../../sources/ThousandBirdsInc__chidori/crates/chidori/src/policy.rs)<br>[crates/chidori/src/runtime/secret_env.rs](../../../../sources/ThousandBirdsInc__chidori/crates/chidori/src/runtime/secret_env.rs) |
| ci | 5 | [.github/workflows/ci.yml](../../../../sources/ThousandBirdsInc__chidori/.github/workflows/ci.yml)<br>[.github/workflows/js-benchmarks.yml](../../../../sources/ThousandBirdsInc__chidori/.github/workflows/js-benchmarks.yml)<br>[.github/workflows/release.yml](../../../../sources/ThousandBirdsInc__chidori/.github/workflows/release.yml)<br>[.github/workflows/test262-coverage.yml](../../../../sources/ThousandBirdsInc__chidori/.github/workflows/test262-coverage.yml)<br>[.github/workflows/test262.yml](../../../../sources/ThousandBirdsInc__chidori/.github/workflows/test262.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 45 | [README.md](../../../../sources/ThousandBirdsInc__chidori/README.md)<br>[sdk/typescript/README.md](../../../../sources/ThousandBirdsInc__chidori/sdk/typescript/README.md)<br>[sdk/python/README.md](../../../../sources/ThousandBirdsInc__chidori/sdk/python/README.md)<br>[examples/record-replay/README.md](../../../../sources/ThousandBirdsInc__chidori/examples/record-replay/README.md)<br>[examples/multiplayer-review/README.md](../../../../sources/ThousandBirdsInc__chidori/examples/multiplayer-review/README.md)<br>[examples/legacy-starlark/coding-agent/README.md](../../../../sources/ThousandBirdsInc__chidori/examples/legacy-starlark/coding-agent/README.md)<br>[examples/interactive-pipeline/README.md](../../../../sources/ThousandBirdsInc__chidori/examples/interactive-pipeline/README.md)<br>[examples/branching/README.md](../../../../sources/ThousandBirdsInc__chidori/examples/branching/README.md) |
| config | 9 | [Cargo.lock](../../../../sources/ThousandBirdsInc__chidori/Cargo.lock)<br>[Cargo.toml](../../../../sources/ThousandBirdsInc__chidori/Cargo.toml)<br>[sdk/typescript/package.json](../../../../sources/ThousandBirdsInc__chidori/sdk/typescript/package.json)<br>[sdk/typescript/tsconfig.json](../../../../sources/ThousandBirdsInc__chidori/sdk/typescript/tsconfig.json)<br>[sdk/python/pyproject.toml](../../../../sources/ThousandBirdsInc__chidori/sdk/python/pyproject.toml)<br>[examples/record-replay/tsconfig.json](../../../../sources/ThousandBirdsInc__chidori/examples/record-replay/tsconfig.json)<br>[crates/test262-runner/Cargo.toml](../../../../sources/ThousandBirdsInc__chidori/crates/test262-runner/Cargo.toml)<br>[crates/chidori-js/Cargo.toml](../../../../sources/ThousandBirdsInc__chidori/crates/chidori-js/Cargo.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 18 | [sdk/python/tests/test_session_api.py](../../../../sources/ThousandBirdsInc__chidori/sdk/python/tests/test_session_api.py)<br>[sdk/python/tests/fixtures/approval.ts](../../../../sources/ThousandBirdsInc__chidori/sdk/python/tests/fixtures/approval.ts)<br>[sdk/python/tests/fixtures/ask.ts](../../../../sources/ThousandBirdsInc__chidori/sdk/python/tests/fixtures/ask.ts)<br>[sdk/python/tests/fixtures/signal_review.ts](../../../../sources/ThousandBirdsInc__chidori/sdk/python/tests/fixtures/signal_review.ts)<br>[sdk/python/tests/fixtures/slow.ts](../../../../sources/ThousandBirdsInc__chidori/sdk/python/tests/fixtures/slow.ts)<br>[examples/legacy-starlark/agents/scale_test.star](../../../../sources/ThousandBirdsInc__chidori/examples/legacy-starlark/agents/scale_test.star) |
| CI workflows | 5 | [.github/workflows/ci.yml](../../../../sources/ThousandBirdsInc__chidori/.github/workflows/ci.yml)<br>[.github/workflows/js-benchmarks.yml](../../../../sources/ThousandBirdsInc__chidori/.github/workflows/js-benchmarks.yml)<br>[.github/workflows/release.yml](../../../../sources/ThousandBirdsInc__chidori/.github/workflows/release.yml)<br>[.github/workflows/test262-coverage.yml](../../../../sources/ThousandBirdsInc__chidori/.github/workflows/test262-coverage.yml)<br>[.github/workflows/test262.yml](../../../../sources/ThousandBirdsInc__chidori/.github/workflows/test262.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 8 | [examples/multiplayer-review/policy_doc.ts](../../../../sources/ThousandBirdsInc__chidori/examples/multiplayer-review/policy_doc.ts)<br>[examples/legacy-starlark/agents/js_sandbox_demo.star](../../../../sources/ThousandBirdsInc__chidori/examples/legacy-starlark/agents/js_sandbox_demo.star)<br>[examples/legacy-starlark/agents/python_sandbox_demo.star](../../../../sources/ThousandBirdsInc__chidori/examples/legacy-starlark/agents/python_sandbox_demo.star)<br>[docs/sandbox-model.md](../../../../sources/ThousandBirdsInc__chidori/docs/sandbox-model.md)<br>[docs/typescript-migration-audit.md](../../../../sources/ThousandBirdsInc__chidori/docs/typescript-migration-audit.md)<br>[crates/chidori/src/mem_guard.rs](../../../../sources/ThousandBirdsInc__chidori/crates/chidori/src/mem_guard.rs) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | agent instruction files not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `crates/chidori/src/mcp/client.rs`, `crates/chidori/src/mcp/config.rs`, `crates/chidori/src/mcp/mod.rs`.
2. Trace execution through entrypoints: `sdk/typescript/src/index.ts`, `crates/test262-runner/src/main.rs`, `crates/chidori-js/src/lib.rs`.
3. Map agent/tool runtime through: `sdk/typescript/src/agent.ts`, `examples/tools/reverse.ts`, `examples/tools/web_search.ts`.
4. Inspect retrieval/memory/indexing through: `sdk/typescript/src/index.ts`, `examples/legacy-starlark/agents/memory_demo.star`, `crates/chidori/src/runtime/memory.rs`.
5. Verify behavior through test/eval files: `sdk/python/tests/test_session_api.py`, `sdk/python/tests/fixtures/approval.ts`, `sdk/python/tests/fixtures/ask.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 The agent framework where every run is durable, replayable, and resumable by default.. 핵심 구조 신호는 Rust, Cargo.toml, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
