# bosun-ai/swiftide Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Fast, streaming indexing, query, and agentic LLM applications in Rust

## 요약

- 조사 단위: `sources/bosun-ai__swiftide` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 389 files, 78 directories, depth score 104, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 mcp=swiftide-agents/src/tools/mcp.rs, examples/agents_mcp_tools.rs이고, 의존성 단서는 openai, anthropic, mcp, qdrant, pgvector, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | bosun-ai/swiftide |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Rust |
| Stars | 710 |
| Forks | 62 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/bosun-ai__swiftide](../../../../sources/bosun-ai__swiftide) |
| Existing report | [reports/global-trending/repositories/bosun-ai__swiftide.md](../../../global-trending/repositories/bosun-ai__swiftide.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 389 / 78 |
| Max observed depth | 5 |
| Top directories | .github, benchmarks, examples, images, swiftide, swiftide-agents, swiftide-core, swiftide-indexing, swiftide-integrations, swiftide-langfuse, swiftide-macros, swiftide-query, swiftide-tasks, swiftide-test-utils |
| Top extensions | .rs: 292, .snap: 27, .toml: 19, .md: 14, .stderr: 13, .yml: 8, .sql: 4, .svg: 3, .png: 2, (none): 2, .json: 1, .lock: 1 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| benchmarks | validation surface | 1 |
| examples | top-level component | 1 |
| examples/agents_mcp_tools.rs | examples workspace | 1 |
| examples/Cargo.toml | examples workspace | 1 |
| examples/index_codebase_reduced_context.rs | examples workspace | 1 |
| examples/index_codebase.rs | examples workspace | 1 |
| examples/index_groq.rs | examples workspace | 1 |
| examples/index_into_redis.rs | examples workspace | 1 |
| examples/index_markdown_lots_of_metadata.rs | examples workspace | 1 |
| examples/index_md_into_pgvector.rs | examples workspace | 1 |
| examples/index_ollama.rs | examples workspace | 1 |
| examples/scraping_index_to_markdown.rs | examples workspace | 1 |
| images | top-level component | 1 |
| swiftide | top-level component | 1 |
| swiftide-agents | top-level component | 1 |
| swiftide-core | top-level component | 1 |
| swiftide-indexing | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | qdrant, pgvector |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [swiftide-agents/src/tools/mcp.rs](../../../../sources/bosun-ai__swiftide/swiftide-agents/src/tools/mcp.rs) | mcp signal |
| mcp | [examples/agents_mcp_tools.rs](../../../../sources/bosun-ai__swiftide/examples/agents_mcp_tools.rs) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/bosun-ai__swiftide/AGENTS.md) | agentRuntime signal |
| agentRuntime | [swiftide-tasks/src/executor.rs](../../../../sources/bosun-ai__swiftide/swiftide-tasks/src/executor.rs) | agentRuntime signal |
| agentRuntime | [swiftide-macros/tests/tool.rs](../../../../sources/bosun-ai__swiftide/swiftide-macros/tests/tool.rs) | agentRuntime signal |
| agentRuntime | [swiftide-macros/tests/tool/tool_derive_missing_description.rs](../../../../sources/bosun-ai__swiftide/swiftide-macros/tests/tool/tool_derive_missing_description.rs) | agentRuntime signal |
| config | [Cargo.lock](../../../../sources/bosun-ai__swiftide/Cargo.lock) | config signal |
| config | [Cargo.toml](../../../../sources/bosun-ai__swiftide/Cargo.toml) | config signal |
| config | [swiftide-test-utils/Cargo.toml](../../../../sources/bosun-ai__swiftide/swiftide-test-utils/Cargo.toml) | config signal |
| config | [swiftide-tasks/Cargo.toml](../../../../sources/bosun-ai__swiftide/swiftide-tasks/Cargo.toml) | config signal |
| ci | [.github/workflows/bench.yml](../../../../sources/bosun-ai__swiftide/.github/workflows/bench.yml) | ci support |
| ci | [.github/workflows/coverage.yml](../../../../sources/bosun-ai__swiftide/.github/workflows/coverage.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 47 | [AGENTS.md](../../../../sources/bosun-ai__swiftide/AGENTS.md)<br>[swiftide-tasks/src/executor.rs](../../../../sources/bosun-ai__swiftide/swiftide-tasks/src/executor.rs)<br>[swiftide-macros/tests/tool.rs](../../../../sources/bosun-ai__swiftide/swiftide-macros/tests/tool.rs)<br>[swiftide-macros/tests/tool/tool_derive_missing_description.rs](../../../../sources/bosun-ai__swiftide/swiftide-macros/tests/tool/tool_derive_missing_description.rs)<br>[swiftide-macros/tests/tool/tool_derive_missing_description.stderr](../../../../sources/bosun-ai__swiftide/swiftide-macros/tests/tool/tool_derive_missing_description.stderr)<br>[swiftide-macros/tests/tool/tool_derive_pass.rs](../../../../sources/bosun-ai__swiftide/swiftide-macros/tests/tool/tool_derive_pass.rs)<br>[swiftide-macros/tests/tool/tool_derive_vec_argument_pass.rs](../../../../sources/bosun-ai__swiftide/swiftide-macros/tests/tool/tool_derive_vec_argument_pass.rs)<br>[swiftide-macros/tests/tool/tool_missing_arg_fail.rs](../../../../sources/bosun-ai__swiftide/swiftide-macros/tests/tool/tool_missing_arg_fail.rs) |
| mcp | 2 | [swiftide-agents/src/tools/mcp.rs](../../../../sources/bosun-ai__swiftide/swiftide-agents/src/tools/mcp.rs)<br>[examples/agents_mcp_tools.rs](../../../../sources/bosun-ai__swiftide/examples/agents_mcp_tools.rs) |
| retrieval | 22 | [swiftide-query/src/query_transformers/embed.rs](../../../../sources/bosun-ai__swiftide/swiftide-query/src/query_transformers/embed.rs)<br>[swiftide-query/src/query_transformers/sparse_embed.rs](../../../../sources/bosun-ai__swiftide/swiftide-query/src/query_transformers/sparse_embed.rs)<br>[swiftide-integrations/src/treesitter/chunk_code.rs](../../../../sources/bosun-ai__swiftide/swiftide-integrations/src/treesitter/chunk_code.rs)<br>[swiftide-integrations/src/openai/embed.rs](../../../../sources/bosun-ai__swiftide/swiftide-integrations/src/openai/embed.rs)<br>[swiftide-integrations/src/fastembed/embedding_model.rs](../../../../sources/bosun-ai__swiftide/swiftide-integrations/src/fastembed/embedding_model.rs)<br>[swiftide-integrations/src/fastembed/sparse_embedding_model.rs](../../../../sources/bosun-ai__swiftide/swiftide-integrations/src/fastembed/sparse_embedding_model.rs)<br>[swiftide-indexing/src/transformers/chunk_markdown.rs](../../../../sources/bosun-ai__swiftide/swiftide-indexing/src/transformers/chunk_markdown.rs)<br>[swiftide-indexing/src/transformers/chunk_text.rs](../../../../sources/bosun-ai__swiftide/swiftide-indexing/src/transformers/chunk_text.rs) |
| spec | 1 | [swiftide-macros/src/tool/tool_spec.rs](../../../../sources/bosun-ai__swiftide/swiftide-macros/src/tool/tool_spec.rs) |
| eval | 88 | [swiftide-test-utils/Cargo.toml](../../../../sources/bosun-ai__swiftide/swiftide-test-utils/Cargo.toml)<br>[swiftide-test-utils/src/lib.rs](../../../../sources/bosun-ai__swiftide/swiftide-test-utils/src/lib.rs)<br>[swiftide-test-utils/src/test_utils.rs](../../../../sources/bosun-ai__swiftide/swiftide-test-utils/src/test_utils.rs)<br>[swiftide-tasks/tests/tasks_runtime.rs](../../../../sources/bosun-ai__swiftide/swiftide-tasks/tests/tasks_runtime.rs)<br>[swiftide-tasks/tests/tasks_ui.rs](../../../../sources/bosun-ai__swiftide/swiftide-tasks/tests/tasks_ui.rs)<br>[swiftide-tasks/tests/ui-pass/any_join_allows_mixed_payloads.rs](../../../../sources/bosun-ai__swiftide/swiftide-tasks/tests/ui-pass/any_join_allows_mixed_payloads.rs)<br>[swiftide-tasks/tests/ui-pass/fan_out_is_typed.rs](../../../../sources/bosun-ai__swiftide/swiftide-tasks/tests/ui-pass/fan_out_is_typed.rs)<br>[swiftide-tasks/tests/ui-pass/linear_chain_allows_changing_types.rs](../../../../sources/bosun-ai__swiftide/swiftide-tasks/tests/ui-pass/linear_chain_allows_changing_types.rs) |
| security | 0 | not obvious |
| ci | 7 | [.github/workflows/bench.yml](../../../../sources/bosun-ai__swiftide/.github/workflows/bench.yml)<br>[.github/workflows/coverage.yml](../../../../sources/bosun-ai__swiftide/.github/workflows/coverage.yml)<br>[.github/workflows/discord.yml](../../../../sources/bosun-ai__swiftide/.github/workflows/discord.yml)<br>[.github/workflows/lint.yml](../../../../sources/bosun-ai__swiftide/.github/workflows/lint.yml)<br>[.github/workflows/pr.yml](../../../../sources/bosun-ai__swiftide/.github/workflows/pr.yml)<br>[.github/workflows/release.yml](../../../../sources/bosun-ai__swiftide/.github/workflows/release.yml)<br>[.github/workflows/test.yml](../../../../sources/bosun-ai__swiftide/.github/workflows/test.yml) |
| container | 0 | not obvious |
| instruction | 1 | [AGENTS.md](../../../../sources/bosun-ai__swiftide/AGENTS.md) |
| docs | 2 | [README.md](../../../../sources/bosun-ai__swiftide/README.md)<br>[swiftide-core/README.md](../../../../sources/bosun-ai__swiftide/swiftide-core/README.md) |
| config | 14 | [Cargo.lock](../../../../sources/bosun-ai__swiftide/Cargo.lock)<br>[Cargo.toml](../../../../sources/bosun-ai__swiftide/Cargo.toml)<br>[swiftide-test-utils/Cargo.toml](../../../../sources/bosun-ai__swiftide/swiftide-test-utils/Cargo.toml)<br>[swiftide-tasks/Cargo.toml](../../../../sources/bosun-ai__swiftide/swiftide-tasks/Cargo.toml)<br>[swiftide-query/Cargo.toml](../../../../sources/bosun-ai__swiftide/swiftide-query/Cargo.toml)<br>[swiftide-macros/Cargo.toml](../../../../sources/bosun-ai__swiftide/swiftide-macros/Cargo.toml)<br>[swiftide-langfuse/Cargo.toml](../../../../sources/bosun-ai__swiftide/swiftide-langfuse/Cargo.toml)<br>[swiftide-integrations/Cargo.toml](../../../../sources/bosun-ai__swiftide/swiftide-integrations/Cargo.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 88 | [swiftide-test-utils/Cargo.toml](../../../../sources/bosun-ai__swiftide/swiftide-test-utils/Cargo.toml)<br>[swiftide-test-utils/src/lib.rs](../../../../sources/bosun-ai__swiftide/swiftide-test-utils/src/lib.rs)<br>[swiftide-test-utils/src/test_utils.rs](../../../../sources/bosun-ai__swiftide/swiftide-test-utils/src/test_utils.rs)<br>[swiftide-tasks/tests/tasks_runtime.rs](../../../../sources/bosun-ai__swiftide/swiftide-tasks/tests/tasks_runtime.rs)<br>[swiftide-tasks/tests/tasks_ui.rs](../../../../sources/bosun-ai__swiftide/swiftide-tasks/tests/tasks_ui.rs)<br>[swiftide-tasks/tests/ui-pass/any_join_allows_mixed_payloads.rs](../../../../sources/bosun-ai__swiftide/swiftide-tasks/tests/ui-pass/any_join_allows_mixed_payloads.rs) |
| CI workflows | 7 | [.github/workflows/bench.yml](../../../../sources/bosun-ai__swiftide/.github/workflows/bench.yml)<br>[.github/workflows/coverage.yml](../../../../sources/bosun-ai__swiftide/.github/workflows/coverage.yml)<br>[.github/workflows/discord.yml](../../../../sources/bosun-ai__swiftide/.github/workflows/discord.yml)<br>[.github/workflows/lint.yml](../../../../sources/bosun-ai__swiftide/.github/workflows/lint.yml)<br>[.github/workflows/pr.yml](../../../../sources/bosun-ai__swiftide/.github/workflows/pr.yml)<br>[.github/workflows/release.yml](../../../../sources/bosun-ai__swiftide/.github/workflows/release.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/bosun-ai__swiftide/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `swiftide-agents/src/tools/mcp.rs`, `examples/agents_mcp_tools.rs`, `AGENTS.md`.
2. Map agent/tool runtime through: `AGENTS.md`, `swiftide-tasks/src/executor.rs`, `swiftide-macros/tests/tool.rs`.
3. Inspect retrieval/memory/indexing through: `swiftide-query/src/query_transformers/embed.rs`, `swiftide-query/src/query_transformers/sparse_embed.rs`, `swiftide-integrations/src/treesitter/chunk_code.rs`.
4. Verify behavior through test/eval files: `swiftide-test-utils/Cargo.toml`, `swiftide-test-utils/src/lib.rs`, `swiftide-test-utils/src/test_utils.rs`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Fast, streaming indexing, query, and agentic LLM applications in Rust. 핵심 구조 신호는 Rust, Cargo.toml, README.md, AGENTS.md, LICENSE, openai이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
