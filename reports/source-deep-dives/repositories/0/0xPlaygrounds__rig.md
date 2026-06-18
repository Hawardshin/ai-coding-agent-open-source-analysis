# 0xPlaygrounds/rig 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

⚙️🦀 Build modular and scalable LLM Applications in Rust

## 요약

- 조사 단위: `sources/0xPlaygrounds__rig` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,095 files, 300 directories, depth score 112, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, tests/providers/xai/agent.rs, tests/providers/xai/context.rs이고, 의존성 단서는 claude, gemini, mcp, ollama, llama, qdrant, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | 0xPlaygrounds/rig |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Rust |
| Stars | 7660 |
| Forks | 855 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/0xPlaygrounds__rig](../../../../sources/0xPlaygrounds__rig) |
| 기존 보고서 | [reports/global-trending/repositories/0xPlaygrounds__rig.md](../../../global-trending/repositories/0xPlaygrounds__rig.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1095 / 300 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .github, crates, examples, img, src, tests |
| 상위 확장자 | .rs: 703, .yaml: 273, .md: 49, .toml: 23, (none): 15, .svg: 8, .stderr: 5, .pdf: 4, .hx: 2, .lock: 2, .sql: 2, .epub: 1 |
| 소스 패턴 | api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | claude, gemini |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | qdrant, milvus, pgvector |
| modelRuntime | ollama, llama |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | opentelemetry |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 20 | [crates/rig-vertexai/src/lib.rs](../../../../sources/0xPlaygrounds__rig/crates/rig-vertexai/src/lib.rs)<br>[crates/rig-vectorize/src/lib.rs](../../../../sources/0xPlaygrounds__rig/crates/rig-vectorize/src/lib.rs)<br>[crates/rig-surrealdb/src/lib.rs](../../../../sources/0xPlaygrounds__rig/crates/rig-surrealdb/src/lib.rs)<br>[crates/rig-sqlite/src/lib.rs](../../../../sources/0xPlaygrounds__rig/crates/rig-sqlite/src/lib.rs)<br>[crates/rig-scylladb/src/lib.rs](../../../../sources/0xPlaygrounds__rig/crates/rig-scylladb/src/lib.rs)<br>[crates/rig-s3vectors/src/lib.rs](../../../../sources/0xPlaygrounds__rig/crates/rig-s3vectors/src/lib.rs)<br>[crates/rig-qdrant/src/lib.rs](../../../../sources/0xPlaygrounds__rig/crates/rig-qdrant/src/lib.rs)<br>[crates/rig-postgres/src/lib.rs](../../../../sources/0xPlaygrounds__rig/crates/rig-postgres/src/lib.rs) |
| agentRuntime | 144 | [AGENTS.md](../../../../sources/0xPlaygrounds__rig/AGENTS.md)<br>[tests/providers/xai/agent.rs](../../../../sources/0xPlaygrounds__rig/tests/providers/xai/agent.rs)<br>[tests/providers/xai/context.rs](../../../../sources/0xPlaygrounds__rig/tests/providers/xai/context.rs)<br>[tests/providers/xai/tools.rs](../../../../sources/0xPlaygrounds__rig/tests/providers/xai/tools.rs)<br>[tests/providers/together/agent.rs](../../../../sources/0xPlaygrounds__rig/tests/providers/together/agent.rs)<br>[tests/providers/together/context.rs](../../../../sources/0xPlaygrounds__rig/tests/providers/together/context.rs)<br>[tests/providers/together/tools.rs](../../../../sources/0xPlaygrounds__rig/tests/providers/together/tools.rs)<br>[tests/providers/perplexity/agent.rs](../../../../sources/0xPlaygrounds__rig/tests/providers/perplexity/agent.rs) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 60 | [tests/core/embed_macro.rs](../../../../sources/0xPlaygrounds__rig/tests/core/embed_macro.rs)<br>[tests/cassettes/gemini/streaming/final_metadata_handles_terminal_finish_reason_chunk.yaml](../../../../sources/0xPlaygrounds__rig/tests/cassettes/gemini/streaming/final_metadata_handles_terminal_finish_reason_chunk.yaml)<br>[examples/agent_with_memory_streaming.rs](../../../../sources/0xPlaygrounds__rig/examples/agent_with_memory_streaming.rs)<br>[examples/agent_with_memory.rs](../../../../sources/0xPlaygrounds__rig/examples/agent_with_memory.rs)<br>[examples/custom_vector_store.rs](../../../../sources/0xPlaygrounds__rig/examples/custom_vector_store.rs)<br>[examples/gemini_extractor_with_rag.rs](../../../../sources/0xPlaygrounds__rig/examples/gemini_extractor_with_rag.rs)<br>[examples/rag_dynamic_tools_multi_turn.rs](../../../../sources/0xPlaygrounds__rig/examples/rag_dynamic_tools_multi_turn.rs)<br>[examples/rag_dynamic_tools.rs](../../../../sources/0xPlaygrounds__rig/examples/rag_dynamic_tools.rs) |
| spec | 0 | 명확하지 않음 |
| eval | 660 | [tests/anthropic.rs](../../../../sources/0xPlaygrounds__rig/tests/anthropic.rs)<br>[tests/azure.rs](../../../../sources/0xPlaygrounds__rig/tests/azure.rs)<br>[tests/chatgpt.rs](../../../../sources/0xPlaygrounds__rig/tests/chatgpt.rs)<br>[tests/cohere.rs](../../../../sources/0xPlaygrounds__rig/tests/cohere.rs)<br>[tests/copilot.rs](../../../../sources/0xPlaygrounds__rig/tests/copilot.rs)<br>[tests/core.rs](../../../../sources/0xPlaygrounds__rig/tests/core.rs)<br>[tests/deepseek.rs](../../../../sources/0xPlaygrounds__rig/tests/deepseek.rs)<br>[tests/galadriel.rs](../../../../sources/0xPlaygrounds__rig/tests/galadriel.rs) |
| security | 27 | [tests/providers/xai/permission_control.rs](../../../../sources/0xPlaygrounds__rig/tests/providers/xai/permission_control.rs)<br>[tests/providers/openrouter/cassette/permission_control.rs](../../../../sources/0xPlaygrounds__rig/tests/providers/openrouter/cassette/permission_control.rs)<br>[tests/providers/openai/cassette/permission_control.rs](../../../../sources/0xPlaygrounds__rig/tests/providers/openai/cassette/permission_control.rs)<br>[tests/providers/mistral/permission_control.rs](../../../../sources/0xPlaygrounds__rig/tests/providers/mistral/permission_control.rs)<br>[tests/providers/llamafile/permission_control.rs](../../../../sources/0xPlaygrounds__rig/tests/providers/llamafile/permission_control.rs)<br>[tests/providers/llamacpp/permission_control.rs](../../../../sources/0xPlaygrounds__rig/tests/providers/llamacpp/permission_control.rs)<br>[tests/providers/groq/permission_control.rs](../../../../sources/0xPlaygrounds__rig/tests/providers/groq/permission_control.rs)<br>[tests/providers/deepseek/permission_control.rs](../../../../sources/0xPlaygrounds__rig/tests/providers/deepseek/permission_control.rs) |
| ci | 2 | [.github/workflows/cd.yaml](../../../../sources/0xPlaygrounds__rig/.github/workflows/cd.yaml)<br>[.github/workflows/ci.yaml](../../../../sources/0xPlaygrounds__rig/.github/workflows/ci.yaml) |
| container | 1 | [examples/otel/Dockerfile](../../../../sources/0xPlaygrounds__rig/examples/otel/Dockerfile) |
| instruction | 1 | [AGENTS.md](../../../../sources/0xPlaygrounds__rig/AGENTS.md) |
| docs | 20 | [README.md](../../../../sources/0xPlaygrounds__rig/README.md)<br>[tests/README.md](../../../../sources/0xPlaygrounds__rig/tests/README.md)<br>[crates/rig-vertexai/README.md](../../../../sources/0xPlaygrounds__rig/crates/rig-vertexai/README.md)<br>[crates/rig-vectorize/README.md](../../../../sources/0xPlaygrounds__rig/crates/rig-vectorize/README.md)<br>[crates/rig-surrealdb/README.md](../../../../sources/0xPlaygrounds__rig/crates/rig-surrealdb/README.md)<br>[crates/rig-sqlite/README.md](../../../../sources/0xPlaygrounds__rig/crates/rig-sqlite/README.md)<br>[crates/rig-scylladb/README.md](../../../../sources/0xPlaygrounds__rig/crates/rig-scylladb/README.md)<br>[crates/rig-s3vectors/README.md](../../../../sources/0xPlaygrounds__rig/crates/rig-s3vectors/README.md) |
| config | 22 | [Cargo.lock](../../../../sources/0xPlaygrounds__rig/Cargo.lock)<br>[Cargo.toml](../../../../sources/0xPlaygrounds__rig/Cargo.toml)<br>[crates/rig-vertexai/Cargo.toml](../../../../sources/0xPlaygrounds__rig/crates/rig-vertexai/Cargo.toml)<br>[crates/rig-vectorize/Cargo.toml](../../../../sources/0xPlaygrounds__rig/crates/rig-vectorize/Cargo.toml)<br>[crates/rig-surrealdb/Cargo.toml](../../../../sources/0xPlaygrounds__rig/crates/rig-surrealdb/Cargo.toml)<br>[crates/rig-sqlite/Cargo.toml](../../../../sources/0xPlaygrounds__rig/crates/rig-sqlite/Cargo.toml)<br>[crates/rig-scylladb/Cargo.toml](../../../../sources/0xPlaygrounds__rig/crates/rig-scylladb/Cargo.toml)<br>[crates/rig-s3vectors/Cargo.toml](../../../../sources/0xPlaygrounds__rig/crates/rig-s3vectors/Cargo.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 660 | [tests/anthropic.rs](../../../../sources/0xPlaygrounds__rig/tests/anthropic.rs)<br>[tests/azure.rs](../../../../sources/0xPlaygrounds__rig/tests/azure.rs)<br>[tests/chatgpt.rs](../../../../sources/0xPlaygrounds__rig/tests/chatgpt.rs)<br>[tests/cohere.rs](../../../../sources/0xPlaygrounds__rig/tests/cohere.rs)<br>[tests/copilot.rs](../../../../sources/0xPlaygrounds__rig/tests/copilot.rs)<br>[tests/core.rs](../../../../sources/0xPlaygrounds__rig/tests/core.rs) |
| CI workflow | 2 | [.github/workflows/cd.yaml](../../../../sources/0xPlaygrounds__rig/.github/workflows/cd.yaml)<br>[.github/workflows/ci.yaml](../../../../sources/0xPlaygrounds__rig/.github/workflows/ci.yaml) |
| 컨테이너/배포 | 1 | [examples/otel/Dockerfile](../../../../sources/0xPlaygrounds__rig/examples/otel/Dockerfile) |
| 보안/정책 | 27 | [tests/providers/xai/permission_control.rs](../../../../sources/0xPlaygrounds__rig/tests/providers/xai/permission_control.rs)<br>[tests/providers/openrouter/cassette/permission_control.rs](../../../../sources/0xPlaygrounds__rig/tests/providers/openrouter/cassette/permission_control.rs)<br>[tests/providers/openai/cassette/permission_control.rs](../../../../sources/0xPlaygrounds__rig/tests/providers/openai/cassette/permission_control.rs)<br>[tests/providers/mistral/permission_control.rs](../../../../sources/0xPlaygrounds__rig/tests/providers/mistral/permission_control.rs)<br>[tests/providers/llamafile/permission_control.rs](../../../../sources/0xPlaygrounds__rig/tests/providers/llamafile/permission_control.rs)<br>[tests/providers/llamacpp/permission_control.rs](../../../../sources/0xPlaygrounds__rig/tests/providers/llamacpp/permission_control.rs) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/0xPlaygrounds__rig/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `AGENTS.md`, `tests/providers/xai/agent.rs`, `tests/providers/xai/context.rs`.
2. entrypoint를 따라 실행 흐름 확인: `crates/rig-vertexai/src/lib.rs`, `crates/rig-vectorize/src/lib.rs`, `crates/rig-surrealdb/src/lib.rs`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tests/providers/xai/agent.rs`, `tests/providers/xai/context.rs`.
4. retrieval/memory/indexing 확인: `tests/core/embed_macro.rs`, `tests/cassettes/gemini/streaming/final_metadata_handles_terminal_finish_reason_chunk.yaml`, `examples/agent_with_memory_streaming.rs`.
5. test/eval 파일로 동작 검증: `tests/anthropic.rs`, `tests/azure.rs`, `tests/chatgpt.rs`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 ⚙️🦀 Build modular and scalable LLM Applications in Rust. 핵심 구조 신호는 Rust, Cargo.toml, README.md, AGENTS.md, LICENSE, mcp이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
