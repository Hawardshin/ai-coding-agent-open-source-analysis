# bosun-ai/swiftide 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Fast, streaming indexing, query, and agentic LLM applications in Rust

## 요약

- 조사 단위: `sources/bosun-ai__swiftide` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 389 files, 78 directories, depth score 98, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 mcp=swiftide-agents/src/tools/mcp.rs, examples/agents_mcp_tools.rs이고, 의존성 단서는 openai, anthropic, mcp, qdrant, pgvector, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | bosun-ai/swiftide |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Rust |
| Stars | 710 |
| Forks | 62 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/bosun-ai__swiftide](../../../../sources/bosun-ai__swiftide) |
| 기존 보고서 | [reports/global-trending/repositories/bosun-ai__swiftide.md](../../../global-trending/repositories/bosun-ai__swiftide.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 389 / 78 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .github, benchmarks, examples, images, swiftide, swiftide-agents, swiftide-core, swiftide-indexing, swiftide-integrations, swiftide-langfuse, swiftide-macros, swiftide-query, swiftide-tasks, swiftide-test-utils |
| 상위 확장자 | .rs: 292, .snap: 27, .toml: 19, .md: 14, .stderr: 13, .yml: 8, .sql: 4, .svg: 3, .png: 2, (none): 2, .json: 1, .lock: 1 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | qdrant, pgvector |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 47 | [AGENTS.md](../../../../sources/bosun-ai__swiftide/AGENTS.md)<br>[swiftide-tasks/src/executor.rs](../../../../sources/bosun-ai__swiftide/swiftide-tasks/src/executor.rs)<br>[swiftide-macros/tests/tool.rs](../../../../sources/bosun-ai__swiftide/swiftide-macros/tests/tool.rs)<br>[swiftide-macros/tests/tool/tool_derive_missing_description.rs](../../../../sources/bosun-ai__swiftide/swiftide-macros/tests/tool/tool_derive_missing_description.rs)<br>[swiftide-macros/tests/tool/tool_derive_missing_description.stderr](../../../../sources/bosun-ai__swiftide/swiftide-macros/tests/tool/tool_derive_missing_description.stderr)<br>[swiftide-macros/tests/tool/tool_derive_pass.rs](../../../../sources/bosun-ai__swiftide/swiftide-macros/tests/tool/tool_derive_pass.rs)<br>[swiftide-macros/tests/tool/tool_derive_vec_argument_pass.rs](../../../../sources/bosun-ai__swiftide/swiftide-macros/tests/tool/tool_derive_vec_argument_pass.rs)<br>[swiftide-macros/tests/tool/tool_missing_arg_fail.rs](../../../../sources/bosun-ai__swiftide/swiftide-macros/tests/tool/tool_missing_arg_fail.rs) |
| mcp | 2 | [swiftide-agents/src/tools/mcp.rs](../../../../sources/bosun-ai__swiftide/swiftide-agents/src/tools/mcp.rs)<br>[examples/agents_mcp_tools.rs](../../../../sources/bosun-ai__swiftide/examples/agents_mcp_tools.rs) |
| retrieval | 22 | [swiftide-query/src/query_transformers/embed.rs](../../../../sources/bosun-ai__swiftide/swiftide-query/src/query_transformers/embed.rs)<br>[swiftide-query/src/query_transformers/sparse_embed.rs](../../../../sources/bosun-ai__swiftide/swiftide-query/src/query_transformers/sparse_embed.rs)<br>[swiftide-integrations/src/treesitter/chunk_code.rs](../../../../sources/bosun-ai__swiftide/swiftide-integrations/src/treesitter/chunk_code.rs)<br>[swiftide-integrations/src/openai/embed.rs](../../../../sources/bosun-ai__swiftide/swiftide-integrations/src/openai/embed.rs)<br>[swiftide-integrations/src/fastembed/embedding_model.rs](../../../../sources/bosun-ai__swiftide/swiftide-integrations/src/fastembed/embedding_model.rs)<br>[swiftide-integrations/src/fastembed/sparse_embedding_model.rs](../../../../sources/bosun-ai__swiftide/swiftide-integrations/src/fastembed/sparse_embedding_model.rs)<br>[swiftide-indexing/src/transformers/chunk_markdown.rs](../../../../sources/bosun-ai__swiftide/swiftide-indexing/src/transformers/chunk_markdown.rs)<br>[swiftide-indexing/src/transformers/chunk_text.rs](../../../../sources/bosun-ai__swiftide/swiftide-indexing/src/transformers/chunk_text.rs) |
| spec | 1 | [swiftide-macros/src/tool/tool_spec.rs](../../../../sources/bosun-ai__swiftide/swiftide-macros/src/tool/tool_spec.rs) |
| eval | 88 | [swiftide-test-utils/Cargo.toml](../../../../sources/bosun-ai__swiftide/swiftide-test-utils/Cargo.toml)<br>[swiftide-test-utils/src/lib.rs](../../../../sources/bosun-ai__swiftide/swiftide-test-utils/src/lib.rs)<br>[swiftide-test-utils/src/test_utils.rs](../../../../sources/bosun-ai__swiftide/swiftide-test-utils/src/test_utils.rs)<br>[swiftide-tasks/tests/tasks_runtime.rs](../../../../sources/bosun-ai__swiftide/swiftide-tasks/tests/tasks_runtime.rs)<br>[swiftide-tasks/tests/tasks_ui.rs](../../../../sources/bosun-ai__swiftide/swiftide-tasks/tests/tasks_ui.rs)<br>[swiftide-tasks/tests/ui-pass/any_join_allows_mixed_payloads.rs](../../../../sources/bosun-ai__swiftide/swiftide-tasks/tests/ui-pass/any_join_allows_mixed_payloads.rs)<br>[swiftide-tasks/tests/ui-pass/fan_out_is_typed.rs](../../../../sources/bosun-ai__swiftide/swiftide-tasks/tests/ui-pass/fan_out_is_typed.rs)<br>[swiftide-tasks/tests/ui-pass/linear_chain_allows_changing_types.rs](../../../../sources/bosun-ai__swiftide/swiftide-tasks/tests/ui-pass/linear_chain_allows_changing_types.rs) |
| security | 0 | 명확하지 않음 |
| ci | 7 | [.github/workflows/bench.yml](../../../../sources/bosun-ai__swiftide/.github/workflows/bench.yml)<br>[.github/workflows/coverage.yml](../../../../sources/bosun-ai__swiftide/.github/workflows/coverage.yml)<br>[.github/workflows/discord.yml](../../../../sources/bosun-ai__swiftide/.github/workflows/discord.yml)<br>[.github/workflows/lint.yml](../../../../sources/bosun-ai__swiftide/.github/workflows/lint.yml)<br>[.github/workflows/pr.yml](../../../../sources/bosun-ai__swiftide/.github/workflows/pr.yml)<br>[.github/workflows/release.yml](../../../../sources/bosun-ai__swiftide/.github/workflows/release.yml)<br>[.github/workflows/test.yml](../../../../sources/bosun-ai__swiftide/.github/workflows/test.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [AGENTS.md](../../../../sources/bosun-ai__swiftide/AGENTS.md) |
| docs | 2 | [README.md](../../../../sources/bosun-ai__swiftide/README.md)<br>[swiftide-core/README.md](../../../../sources/bosun-ai__swiftide/swiftide-core/README.md) |
| config | 14 | [Cargo.lock](../../../../sources/bosun-ai__swiftide/Cargo.lock)<br>[Cargo.toml](../../../../sources/bosun-ai__swiftide/Cargo.toml)<br>[swiftide-test-utils/Cargo.toml](../../../../sources/bosun-ai__swiftide/swiftide-test-utils/Cargo.toml)<br>[swiftide-tasks/Cargo.toml](../../../../sources/bosun-ai__swiftide/swiftide-tasks/Cargo.toml)<br>[swiftide-query/Cargo.toml](../../../../sources/bosun-ai__swiftide/swiftide-query/Cargo.toml)<br>[swiftide-macros/Cargo.toml](../../../../sources/bosun-ai__swiftide/swiftide-macros/Cargo.toml)<br>[swiftide-langfuse/Cargo.toml](../../../../sources/bosun-ai__swiftide/swiftide-langfuse/Cargo.toml)<br>[swiftide-integrations/Cargo.toml](../../../../sources/bosun-ai__swiftide/swiftide-integrations/Cargo.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 88 | [swiftide-test-utils/Cargo.toml](../../../../sources/bosun-ai__swiftide/swiftide-test-utils/Cargo.toml)<br>[swiftide-test-utils/src/lib.rs](../../../../sources/bosun-ai__swiftide/swiftide-test-utils/src/lib.rs)<br>[swiftide-test-utils/src/test_utils.rs](../../../../sources/bosun-ai__swiftide/swiftide-test-utils/src/test_utils.rs)<br>[swiftide-tasks/tests/tasks_runtime.rs](../../../../sources/bosun-ai__swiftide/swiftide-tasks/tests/tasks_runtime.rs)<br>[swiftide-tasks/tests/tasks_ui.rs](../../../../sources/bosun-ai__swiftide/swiftide-tasks/tests/tasks_ui.rs)<br>[swiftide-tasks/tests/ui-pass/any_join_allows_mixed_payloads.rs](../../../../sources/bosun-ai__swiftide/swiftide-tasks/tests/ui-pass/any_join_allows_mixed_payloads.rs) |
| CI workflow | 7 | [.github/workflows/bench.yml](../../../../sources/bosun-ai__swiftide/.github/workflows/bench.yml)<br>[.github/workflows/coverage.yml](../../../../sources/bosun-ai__swiftide/.github/workflows/coverage.yml)<br>[.github/workflows/discord.yml](../../../../sources/bosun-ai__swiftide/.github/workflows/discord.yml)<br>[.github/workflows/lint.yml](../../../../sources/bosun-ai__swiftide/.github/workflows/lint.yml)<br>[.github/workflows/pr.yml](../../../../sources/bosun-ai__swiftide/.github/workflows/pr.yml)<br>[.github/workflows/release.yml](../../../../sources/bosun-ai__swiftide/.github/workflows/release.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/bosun-ai__swiftide/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `swiftide-agents/src/tools/mcp.rs`, `examples/agents_mcp_tools.rs`, `AGENTS.md`.
2. agent/tool runtime 매핑: `AGENTS.md`, `swiftide-tasks/src/executor.rs`, `swiftide-macros/tests/tool.rs`.
3. retrieval/memory/indexing 확인: `swiftide-query/src/query_transformers/embed.rs`, `swiftide-query/src/query_transformers/sparse_embed.rs`, `swiftide-integrations/src/treesitter/chunk_code.rs`.
4. test/eval 파일로 동작 검증: `swiftide-test-utils/Cargo.toml`, `swiftide-test-utils/src/lib.rs`, `swiftide-test-utils/src/test_utils.rs`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Fast, streaming indexing, query, and agentic LLM applications in Rust. 핵심 구조 신호는 Rust, Cargo.toml, README.md, AGENTS.md, LICENSE, openai이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
