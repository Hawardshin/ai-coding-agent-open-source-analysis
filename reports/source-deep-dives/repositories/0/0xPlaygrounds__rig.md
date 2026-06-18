# 0xPlaygrounds/rig Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

⚙️🦀 Build modular and scalable LLM Applications in Rust

## 요약

- 조사 단위: `sources/0xPlaygrounds__rig` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,095 files, 300 directories, depth score 118, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, tests/providers/xai/agent.rs, tests/providers/xai/context.rs이고, 의존성 단서는 claude, gemini, mcp, ollama, llama, qdrant, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | 0xPlaygrounds/rig |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Rust |
| Stars | 7660 |
| Forks | 855 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/0xPlaygrounds__rig](../../../../sources/0xPlaygrounds__rig) |
| Existing report | [reports/global-trending/repositories/0xPlaygrounds__rig.md](../../../global-trending/repositories/0xPlaygrounds__rig.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1095 / 300 |
| Max observed depth | 7 |
| Top directories | .github, crates, examples, img, src, tests |
| Top extensions | .rs: 703, .yaml: 273, .md: 49, .toml: 23, (none): 15, .svg: 8, .stderr: 5, .pdf: 4, .hx: 2, .lock: 2, .sql: 2, .epub: 1 |
| Source patterns | api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 104 |
| crates/rig-core | crates workspace | 10 |
| crates/rig-memory | crates workspace | 8 |
| crates/rig-lancedb | crates workspace | 7 |
| crates/rig-neo4j | crates workspace | 7 |
| crates/rig-fastembed | crates workspace | 5 |
| crates/rig-postgres | crates workspace | 5 |
| crates/rig-surrealdb | crates workspace | 5 |
| crates/rig-gemini-grpc | crates workspace | 4 |
| crates/rig-helixdb | crates workspace | 4 |
| crates/rig-milvus | crates workspace | 4 |
| crates/rig-mongodb | crates workspace | 4 |
| crates/rig-qdrant | crates workspace | 4 |
| crates/rig-s3vectors | crates workspace | 4 |
| crates/rig-scylladb | crates workspace | 4 |
| crates/rig-sqlite | crates workspace | 4 |
| crates/rig-vectorize | crates workspace | 4 |
| crates/rig-bedrock | crates workspace | 3 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | claude, gemini |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | qdrant, milvus, pgvector |
| modelRuntime | ollama, llama |
| webRuntime | none |
| developerSurface | none |
| observability | opentelemetry |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| agentRuntime | [AGENTS.md](../../../../sources/0xPlaygrounds__rig/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tests/providers/xai/agent.rs](../../../../sources/0xPlaygrounds__rig/tests/providers/xai/agent.rs) | agentRuntime signal |
| agentRuntime | [tests/providers/xai/context.rs](../../../../sources/0xPlaygrounds__rig/tests/providers/xai/context.rs) | agentRuntime signal |
| agentRuntime | [tests/providers/xai/tools.rs](../../../../sources/0xPlaygrounds__rig/tests/providers/xai/tools.rs) | agentRuntime signal |
| entrypoints | [crates/rig-vertexai/src/lib.rs](../../../../sources/0xPlaygrounds__rig/crates/rig-vertexai/src/lib.rs) | entrypoints signal |
| entrypoints | [crates/rig-vectorize/src/lib.rs](../../../../sources/0xPlaygrounds__rig/crates/rig-vectorize/src/lib.rs) | entrypoints signal |
| entrypoints | [crates/rig-surrealdb/src/lib.rs](../../../../sources/0xPlaygrounds__rig/crates/rig-surrealdb/src/lib.rs) | entrypoints signal |
| entrypoints | [crates/rig-sqlite/src/lib.rs](../../../../sources/0xPlaygrounds__rig/crates/rig-sqlite/src/lib.rs) | entrypoints signal |
| config | [Cargo.lock](../../../../sources/0xPlaygrounds__rig/Cargo.lock) | config signal |
| config | [Cargo.toml](../../../../sources/0xPlaygrounds__rig/Cargo.toml) | config signal |
| config | [crates/rig-vertexai/Cargo.toml](../../../../sources/0xPlaygrounds__rig/crates/rig-vertexai/Cargo.toml) | config signal |
| config | [crates/rig-vectorize/Cargo.toml](../../../../sources/0xPlaygrounds__rig/crates/rig-vectorize/Cargo.toml) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 20 | [crates/rig-vertexai/src/lib.rs](../../../../sources/0xPlaygrounds__rig/crates/rig-vertexai/src/lib.rs)<br>[crates/rig-vectorize/src/lib.rs](../../../../sources/0xPlaygrounds__rig/crates/rig-vectorize/src/lib.rs)<br>[crates/rig-surrealdb/src/lib.rs](../../../../sources/0xPlaygrounds__rig/crates/rig-surrealdb/src/lib.rs)<br>[crates/rig-sqlite/src/lib.rs](../../../../sources/0xPlaygrounds__rig/crates/rig-sqlite/src/lib.rs)<br>[crates/rig-scylladb/src/lib.rs](../../../../sources/0xPlaygrounds__rig/crates/rig-scylladb/src/lib.rs)<br>[crates/rig-s3vectors/src/lib.rs](../../../../sources/0xPlaygrounds__rig/crates/rig-s3vectors/src/lib.rs)<br>[crates/rig-qdrant/src/lib.rs](../../../../sources/0xPlaygrounds__rig/crates/rig-qdrant/src/lib.rs)<br>[crates/rig-postgres/src/lib.rs](../../../../sources/0xPlaygrounds__rig/crates/rig-postgres/src/lib.rs) |
| agentRuntime | 144 | [AGENTS.md](../../../../sources/0xPlaygrounds__rig/AGENTS.md)<br>[tests/providers/xai/agent.rs](../../../../sources/0xPlaygrounds__rig/tests/providers/xai/agent.rs)<br>[tests/providers/xai/context.rs](../../../../sources/0xPlaygrounds__rig/tests/providers/xai/context.rs)<br>[tests/providers/xai/tools.rs](../../../../sources/0xPlaygrounds__rig/tests/providers/xai/tools.rs)<br>[tests/providers/together/agent.rs](../../../../sources/0xPlaygrounds__rig/tests/providers/together/agent.rs)<br>[tests/providers/together/context.rs](../../../../sources/0xPlaygrounds__rig/tests/providers/together/context.rs)<br>[tests/providers/together/tools.rs](../../../../sources/0xPlaygrounds__rig/tests/providers/together/tools.rs)<br>[tests/providers/perplexity/agent.rs](../../../../sources/0xPlaygrounds__rig/tests/providers/perplexity/agent.rs) |
| mcp | 0 | not obvious |
| retrieval | 60 | [tests/core/embed_macro.rs](../../../../sources/0xPlaygrounds__rig/tests/core/embed_macro.rs)<br>[tests/cassettes/gemini/streaming/final_metadata_handles_terminal_finish_reason_chunk.yaml](../../../../sources/0xPlaygrounds__rig/tests/cassettes/gemini/streaming/final_metadata_handles_terminal_finish_reason_chunk.yaml)<br>[examples/agent_with_memory_streaming.rs](../../../../sources/0xPlaygrounds__rig/examples/agent_with_memory_streaming.rs)<br>[examples/agent_with_memory.rs](../../../../sources/0xPlaygrounds__rig/examples/agent_with_memory.rs)<br>[examples/custom_vector_store.rs](../../../../sources/0xPlaygrounds__rig/examples/custom_vector_store.rs)<br>[examples/gemini_extractor_with_rag.rs](../../../../sources/0xPlaygrounds__rig/examples/gemini_extractor_with_rag.rs)<br>[examples/rag_dynamic_tools_multi_turn.rs](../../../../sources/0xPlaygrounds__rig/examples/rag_dynamic_tools_multi_turn.rs)<br>[examples/rag_dynamic_tools.rs](../../../../sources/0xPlaygrounds__rig/examples/rag_dynamic_tools.rs) |
| spec | 0 | not obvious |
| eval | 660 | [tests/anthropic.rs](../../../../sources/0xPlaygrounds__rig/tests/anthropic.rs)<br>[tests/azure.rs](../../../../sources/0xPlaygrounds__rig/tests/azure.rs)<br>[tests/chatgpt.rs](../../../../sources/0xPlaygrounds__rig/tests/chatgpt.rs)<br>[tests/cohere.rs](../../../../sources/0xPlaygrounds__rig/tests/cohere.rs)<br>[tests/copilot.rs](../../../../sources/0xPlaygrounds__rig/tests/copilot.rs)<br>[tests/core.rs](../../../../sources/0xPlaygrounds__rig/tests/core.rs)<br>[tests/deepseek.rs](../../../../sources/0xPlaygrounds__rig/tests/deepseek.rs)<br>[tests/galadriel.rs](../../../../sources/0xPlaygrounds__rig/tests/galadriel.rs) |
| security | 27 | [tests/providers/xai/permission_control.rs](../../../../sources/0xPlaygrounds__rig/tests/providers/xai/permission_control.rs)<br>[tests/providers/openrouter/cassette/permission_control.rs](../../../../sources/0xPlaygrounds__rig/tests/providers/openrouter/cassette/permission_control.rs)<br>[tests/providers/openai/cassette/permission_control.rs](../../../../sources/0xPlaygrounds__rig/tests/providers/openai/cassette/permission_control.rs)<br>[tests/providers/mistral/permission_control.rs](../../../../sources/0xPlaygrounds__rig/tests/providers/mistral/permission_control.rs)<br>[tests/providers/llamafile/permission_control.rs](../../../../sources/0xPlaygrounds__rig/tests/providers/llamafile/permission_control.rs)<br>[tests/providers/llamacpp/permission_control.rs](../../../../sources/0xPlaygrounds__rig/tests/providers/llamacpp/permission_control.rs)<br>[tests/providers/groq/permission_control.rs](../../../../sources/0xPlaygrounds__rig/tests/providers/groq/permission_control.rs)<br>[tests/providers/deepseek/permission_control.rs](../../../../sources/0xPlaygrounds__rig/tests/providers/deepseek/permission_control.rs) |
| ci | 2 | [.github/workflows/cd.yaml](../../../../sources/0xPlaygrounds__rig/.github/workflows/cd.yaml)<br>[.github/workflows/ci.yaml](../../../../sources/0xPlaygrounds__rig/.github/workflows/ci.yaml) |
| container | 1 | [examples/otel/Dockerfile](../../../../sources/0xPlaygrounds__rig/examples/otel/Dockerfile) |
| instruction | 1 | [AGENTS.md](../../../../sources/0xPlaygrounds__rig/AGENTS.md) |
| docs | 20 | [README.md](../../../../sources/0xPlaygrounds__rig/README.md)<br>[tests/README.md](../../../../sources/0xPlaygrounds__rig/tests/README.md)<br>[crates/rig-vertexai/README.md](../../../../sources/0xPlaygrounds__rig/crates/rig-vertexai/README.md)<br>[crates/rig-vectorize/README.md](../../../../sources/0xPlaygrounds__rig/crates/rig-vectorize/README.md)<br>[crates/rig-surrealdb/README.md](../../../../sources/0xPlaygrounds__rig/crates/rig-surrealdb/README.md)<br>[crates/rig-sqlite/README.md](../../../../sources/0xPlaygrounds__rig/crates/rig-sqlite/README.md)<br>[crates/rig-scylladb/README.md](../../../../sources/0xPlaygrounds__rig/crates/rig-scylladb/README.md)<br>[crates/rig-s3vectors/README.md](../../../../sources/0xPlaygrounds__rig/crates/rig-s3vectors/README.md) |
| config | 22 | [Cargo.lock](../../../../sources/0xPlaygrounds__rig/Cargo.lock)<br>[Cargo.toml](../../../../sources/0xPlaygrounds__rig/Cargo.toml)<br>[crates/rig-vertexai/Cargo.toml](../../../../sources/0xPlaygrounds__rig/crates/rig-vertexai/Cargo.toml)<br>[crates/rig-vectorize/Cargo.toml](../../../../sources/0xPlaygrounds__rig/crates/rig-vectorize/Cargo.toml)<br>[crates/rig-surrealdb/Cargo.toml](../../../../sources/0xPlaygrounds__rig/crates/rig-surrealdb/Cargo.toml)<br>[crates/rig-sqlite/Cargo.toml](../../../../sources/0xPlaygrounds__rig/crates/rig-sqlite/Cargo.toml)<br>[crates/rig-scylladb/Cargo.toml](../../../../sources/0xPlaygrounds__rig/crates/rig-scylladb/Cargo.toml)<br>[crates/rig-s3vectors/Cargo.toml](../../../../sources/0xPlaygrounds__rig/crates/rig-s3vectors/Cargo.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 660 | [tests/anthropic.rs](../../../../sources/0xPlaygrounds__rig/tests/anthropic.rs)<br>[tests/azure.rs](../../../../sources/0xPlaygrounds__rig/tests/azure.rs)<br>[tests/chatgpt.rs](../../../../sources/0xPlaygrounds__rig/tests/chatgpt.rs)<br>[tests/cohere.rs](../../../../sources/0xPlaygrounds__rig/tests/cohere.rs)<br>[tests/copilot.rs](../../../../sources/0xPlaygrounds__rig/tests/copilot.rs)<br>[tests/core.rs](../../../../sources/0xPlaygrounds__rig/tests/core.rs) |
| CI workflows | 2 | [.github/workflows/cd.yaml](../../../../sources/0xPlaygrounds__rig/.github/workflows/cd.yaml)<br>[.github/workflows/ci.yaml](../../../../sources/0xPlaygrounds__rig/.github/workflows/ci.yaml) |
| Containers / deploy | 1 | [examples/otel/Dockerfile](../../../../sources/0xPlaygrounds__rig/examples/otel/Dockerfile) |
| Security / policy | 27 | [tests/providers/xai/permission_control.rs](../../../../sources/0xPlaygrounds__rig/tests/providers/xai/permission_control.rs)<br>[tests/providers/openrouter/cassette/permission_control.rs](../../../../sources/0xPlaygrounds__rig/tests/providers/openrouter/cassette/permission_control.rs)<br>[tests/providers/openai/cassette/permission_control.rs](../../../../sources/0xPlaygrounds__rig/tests/providers/openai/cassette/permission_control.rs)<br>[tests/providers/mistral/permission_control.rs](../../../../sources/0xPlaygrounds__rig/tests/providers/mistral/permission_control.rs)<br>[tests/providers/llamafile/permission_control.rs](../../../../sources/0xPlaygrounds__rig/tests/providers/llamafile/permission_control.rs)<br>[tests/providers/llamacpp/permission_control.rs](../../../../sources/0xPlaygrounds__rig/tests/providers/llamacpp/permission_control.rs) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/0xPlaygrounds__rig/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `AGENTS.md`, `tests/providers/xai/agent.rs`, `tests/providers/xai/context.rs`.
2. Trace execution through entrypoints: `crates/rig-vertexai/src/lib.rs`, `crates/rig-vectorize/src/lib.rs`, `crates/rig-surrealdb/src/lib.rs`.
3. Map agent/tool runtime through: `AGENTS.md`, `tests/providers/xai/agent.rs`, `tests/providers/xai/context.rs`.
4. Inspect retrieval/memory/indexing through: `tests/core/embed_macro.rs`, `tests/cassettes/gemini/streaming/final_metadata_handles_terminal_finish_reason_chunk.yaml`, `examples/agent_with_memory_streaming.rs`.
5. Verify behavior through test/eval files: `tests/anthropic.rs`, `tests/azure.rs`, `tests/chatgpt.rs`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 ⚙️🦀 Build modular and scalable LLM Applications in Rust. 핵심 구조 신호는 Rust, Cargo.toml, README.md, AGENTS.md, LICENSE, mcp이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
