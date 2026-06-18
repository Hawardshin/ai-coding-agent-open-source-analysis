# DemonDamon/AgenticX Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

AgenticX is a unified, production-ready multi-agent platform — Python SDK + CLI (agx) + Studio server + Machi desktop app. Features Meta-Agent orchestration, 15+ LLM providers, MCP Hub, hierarchical memory, avatar & group chat, skill ecosystem, safety sandbox, and IM gateway (Feishu/WeChat).

## 요약

- 조사 단위: `sources/DemonDamon__AgenticX` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 3,182 files, 626 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/direct_mcp_test.py, tests/test_global_mcp_manager.py, tests/test_global_mcp_state_restore.py이고, 의존성 단서는 openai, anthropic, mcp, fastapi, pydantic, click, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | DemonDamon/AgenticX |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 162 |
| Forks | 26 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/DemonDamon__AgenticX](../../../../sources/DemonDamon__AgenticX) |
| Existing report | [reports/global-trending/repositories/DemonDamon__AgenticX.md](../../../global-trending/repositories/DemonDamon__AgenticX.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 3182 / 626 |
| Max observed depth | 13 |
| Top directories | .cursor, .githooks, .github, agenticx, assets, deploy, desktop, docs, enterprise, examples, packaging, research, scripts, tests |
| Top extensions | .py: 1334, .ts: 526, .md: 517, .tsx: 227, .go: 205, .json: 80, .png: 64, .yaml: 34, .sql: 28, (none): 27, .sh: 26, .txt: 19 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 154 |
| examples/agenticx-for-intent-recognition | examples workspace | 35 |
| docs | documentation surface | 9 |
| examples/agenticx-for-docparser | examples workspace | 5 |
| examples/agenticx-for-sandbox | examples workspace | 5 |
| examples/agenticx-for-agentkit | examples workspace | 4 |
| examples/agenticx-for-graphrag | examples workspace | 2 |
| examples/simple_chat_agent | examples workspace | 2 |
| .github | ci surface | 1 |
| agenticx | top-level component | 1 |
| assets | top-level component | 1 |
| deploy | deployment surface | 1 |
| desktop | top-level component | 1 |
| enterprise | top-level component | 1 |
| examples | top-level component | 1 |
| examples/agenticx-for-deepresearch | examples workspace | 1 |
| examples/agenticx-for-guiagent | examples workspace | 1 |
| examples/browser-use-mcp.md | examples workspace | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | agenticx | agenticx |
| utility | pyproject.toml | agx | agx |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | chroma, qdrant, milvus |
| modelRuntime | torch, ollama, llama |
| webRuntime | fastapi |
| developerSurface | click, typer |
| observability | opentelemetry, prometheus |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [tests/direct_mcp_test.py](../../../../sources/DemonDamon__AgenticX/tests/direct_mcp_test.py) | mcp signal |
| mcp | [tests/test_global_mcp_manager.py](../../../../sources/DemonDamon__AgenticX/tests/test_global_mcp_manager.py) | mcp signal |
| mcp | [tests/test_global_mcp_state_restore.py](../../../../sources/DemonDamon__AgenticX/tests/test_global_mcp_state_restore.py) | mcp signal |
| mcp | [tests/test_mcp_call_error_surface.py](../../../../sources/DemonDamon__AgenticX/tests/test_mcp_call_error_surface.py) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/DemonDamon__AgenticX/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tests/tools/test_api_connector_resolver.py](../../../../sources/DemonDamon__AgenticX/tests/tools/test_api_connector_resolver.py) | agentRuntime signal |
| agentRuntime | [tests/tools/test_computer_use_resolver.py](../../../../sources/DemonDamon__AgenticX/tests/tools/test_computer_use_resolver.py) | agentRuntime signal |
| agentRuntime | [tests/tools/test_fallback_chain.py](../../../../sources/DemonDamon__AgenticX/tests/tools/test_fallback_chain.py) | agentRuntime signal |
| entrypoints | [packaging/wechat-sidecar/main.go](../../../../sources/DemonDamon__AgenticX/packaging/wechat-sidecar/main.go) | entrypoints signal |
| entrypoints | [examples/agenticx-for-intent-recognition/main.py](../../../../sources/DemonDamon__AgenticX/examples/agenticx-for-intent-recognition/main.py) | entrypoints signal |
| entrypoints | [examples/agenticx-for-docparser/main.py](../../../../sources/DemonDamon__AgenticX/examples/agenticx-for-docparser/main.py) | entrypoints signal |
| entrypoints | [enterprise/scripts/perf/mock-upstream/main.go](../../../../sources/DemonDamon__AgenticX/enterprise/scripts/perf/mock-upstream/main.go) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 275 | [packaging/wechat-sidecar/main.go](../../../../sources/DemonDamon__AgenticX/packaging/wechat-sidecar/main.go)<br>[examples/agenticx-for-intent-recognition/main.py](../../../../sources/DemonDamon__AgenticX/examples/agenticx-for-intent-recognition/main.py)<br>[examples/agenticx-for-docparser/main.py](../../../../sources/DemonDamon__AgenticX/examples/agenticx-for-docparser/main.py)<br>[enterprise/scripts/perf/mock-upstream/main.go](../../../../sources/DemonDamon__AgenticX/enterprise/scripts/perf/mock-upstream/main.go)<br>[enterprise/scripts/perf/mint-perf-jwt/main.go](../../../../sources/DemonDamon__AgenticX/enterprise/scripts/perf/mint-perf-jwt/main.go)<br>[enterprise/packages/ui/src/index.ts](../../../../sources/DemonDamon__AgenticX/enterprise/packages/ui/src/index.ts)<br>[enterprise/packages/telemetry/src/index.ts](../../../../sources/DemonDamon__AgenticX/enterprise/packages/telemetry/src/index.ts)<br>[enterprise/packages/sdk-ts/src/index.ts](../../../../sources/DemonDamon__AgenticX/enterprise/packages/sdk-ts/src/index.ts) |
| agentRuntime | 386 | [AGENTS.md](../../../../sources/DemonDamon__AgenticX/AGENTS.md)<br>[tests/tools/test_api_connector_resolver.py](../../../../sources/DemonDamon__AgenticX/tests/tools/test_api_connector_resolver.py)<br>[tests/tools/test_computer_use_resolver.py](../../../../sources/DemonDamon__AgenticX/tests/tools/test_computer_use_resolver.py)<br>[tests/tools/test_fallback_chain.py](../../../../sources/DemonDamon__AgenticX/tests/tools/test_fallback_chain.py)<br>[tests/tools/test_liteparse_adapter.py](../../../../sources/DemonDamon__AgenticX/tests/tools/test_liteparse_adapter.py)<br>[tests/tools/test_lsp_manager.py](../../../../sources/DemonDamon__AgenticX/tests/tools/test_lsp_manager.py)<br>[tests/tools/test_policy_categories.py](../../../../sources/DemonDamon__AgenticX/tests/tools/test_policy_categories.py)<br>[tests/tools/test_unified_document_liteparse_fallback.py](../../../../sources/DemonDamon__AgenticX/tests/tools/test_unified_document_liteparse_fallback.py) |
| mcp | 109 | [tests/direct_mcp_test.py](../../../../sources/DemonDamon__AgenticX/tests/direct_mcp_test.py)<br>[tests/test_global_mcp_manager.py](../../../../sources/DemonDamon__AgenticX/tests/test_global_mcp_manager.py)<br>[tests/test_global_mcp_state_restore.py](../../../../sources/DemonDamon__AgenticX/tests/test_global_mcp_state_restore.py)<br>[tests/test_mcp_call_error_surface.py](../../../../sources/DemonDamon__AgenticX/tests/test_mcp_call_error_surface.py)<br>[tests/test_mcp_crash_guard.py](../../../../sources/DemonDamon__AgenticX/tests/test_mcp_crash_guard.py)<br>[tests/test_mcp_discovery_api.py](../../../../sources/DemonDamon__AgenticX/tests/test_mcp_discovery_api.py)<br>[tests/test_mcp_discovery.py](../../../../sources/DemonDamon__AgenticX/tests/test_mcp_discovery.py)<br>[tests/test_mcp_hub_extract_errors.py](../../../../sources/DemonDamon__AgenticX/tests/test_mcp_hub_extract_errors.py) |
| retrieval | 319 | [tests/test_chunk_rerank_config.py](../../../../sources/DemonDamon__AgenticX/tests/test_chunk_rerank_config.py)<br>[tests/test_favorite_to_memory.py](../../../../sources/DemonDamon__AgenticX/tests/test_favorite_to_memory.py)<br>[tests/test_hierarchical_memory.py](../../../../sources/DemonDamon__AgenticX/tests/test_hierarchical_memory.py)<br>[tests/test_m5_memory_intelligence.py](../../../../sources/DemonDamon__AgenticX/tests/test_m5_memory_intelligence.py)<br>[tests/test_mem0_memory.py](../../../../sources/DemonDamon__AgenticX/tests/test_mem0_memory.py)<br>[tests/test_memory_append_tool.py](../../../../sources/DemonDamon__AgenticX/tests/test_memory_append_tool.py)<br>[tests/test_memory_graph_api.py](../../../../sources/DemonDamon__AgenticX/tests/test_memory_graph_api.py)<br>[tests/test_memory_graph_isolation.py](../../../../sources/DemonDamon__AgenticX/tests/test_memory_graph_isolation.py) |
| spec | 40 | [requirements.lock](../../../../sources/DemonDamon__AgenticX/requirements.lock)<br>[requirements.txt](../../../../sources/DemonDamon__AgenticX/requirements.txt)<br>[examples/agenticx-for-intent-recognition/requirements.txt](../../../../sources/DemonDamon__AgenticX/examples/agenticx-for-intent-recognition/requirements.txt)<br>[examples/agenticx-for-intent-recognition/docs/intent-understanding-agent-architecture.md](../../../../sources/DemonDamon__AgenticX/examples/agenticx-for-intent-recognition/docs/intent-understanding-agent-architecture.md)<br>[examples/agenticx-for-intent-recognition/docs/intent-understanding-agent-prd.md](../../../../sources/DemonDamon__AgenticX/examples/agenticx-for-intent-recognition/docs/intent-understanding-agent-prd.md)<br>[examples/agenticx-for-docparser/requirements.txt](../../../../sources/DemonDamon__AgenticX/examples/agenticx-for-docparser/requirements.txt)<br>[examples/agenticx-for-agentkit/hi-agent/requirements.txt](../../../../sources/DemonDamon__AgenticX/examples/agenticx-for-agentkit/hi-agent/requirements.txt)<br>[enterprise/plugins/tool-doc-review/requirements.txt](../../../../sources/DemonDamon__AgenticX/enterprise/plugins/tool-doc-review/requirements.txt) |
| eval | 664 | [tests/demo_e2e_test.py](../../../../sources/DemonDamon__AgenticX/tests/demo_e2e_test.py)<br>[tests/direct_mcp_test.py](../../../../sources/DemonDamon__AgenticX/tests/direct_mcp_test.py)<br>[tests/env_template.txt](../../../../sources/DemonDamon__AgenticX/tests/env_template.txt)<br>[tests/mineru_output_universal.md](../../../../sources/DemonDamon__AgenticX/tests/mineru_output_universal.md)<br>[tests/RAGAS_parsed.md](../../../../sources/DemonDamon__AgenticX/tests/RAGAS_parsed.md)<br>[tests/RAGAs.pdf](../../../../sources/DemonDamon__AgenticX/tests/RAGAs.pdf)<br>[tests/README.md](../../../../sources/DemonDamon__AgenticX/tests/README.md)<br>[tests/run_core_tests.py](../../../../sources/DemonDamon__AgenticX/tests/run_core_tests.py) |
| security | 280 | [tests/test_mcp_crash_guard.py](../../../../sources/DemonDamon__AgenticX/tests/test_mcp_crash_guard.py)<br>[tests/test_meta_agent_kb_policy.py](../../../../sources/DemonDamon__AgenticX/tests/test_meta_agent_kb_policy.py)<br>[tests/test_prompt_cache_policy.py](../../../../sources/DemonDamon__AgenticX/tests/test_prompt_cache_policy.py)<br>[tests/test_safety_audit.py](../../../../sources/DemonDamon__AgenticX/tests/test_safety_audit.py)<br>[tests/test_safety_policy.py](../../../../sources/DemonDamon__AgenticX/tests/test_safety_policy.py)<br>[tests/test_safety_sandbox_policy.py](../../../../sources/DemonDamon__AgenticX/tests/test_safety_sandbox_policy.py)<br>[tests/test_sandbox_audit.py](../../../../sources/DemonDamon__AgenticX/tests/test_sandbox_audit.py)<br>[tests/test_sandbox_integration.py](../../../../sources/DemonDamon__AgenticX/tests/test_sandbox_integration.py) |
| ci | 2 | [.github/workflows/build-desktop.yml](../../../../sources/DemonDamon__AgenticX/.github/workflows/build-desktop.yml)<br>[.github/workflows/security-scan.yml](../../../../sources/DemonDamon__AgenticX/.github/workflows/security-scan.yml) |
| container | 59 | [examples/agenticx-for-agentkit/hi-agent/Dockerfile](../../../../sources/DemonDamon__AgenticX/examples/agenticx-for-agentkit/hi-agent/Dockerfile)<br>[enterprise/scripts/perf/mock-upstream/Dockerfile](../../../../sources/DemonDamon__AgenticX/enterprise/scripts/perf/mock-upstream/Dockerfile)<br>[enterprise/packages/ui/src/components/charts/ChartCard.tsx](../../../../sources/DemonDamon__AgenticX/enterprise/packages/ui/src/components/charts/ChartCard.tsx)<br>[enterprise/packages/ui/src/components/charts/theme.ts](../../../../sources/DemonDamon__AgenticX/enterprise/packages/ui/src/components/charts/theme.ts)<br>[enterprise/docs/deployment/2026-05-12-supabase-seed-tls-pitfall.md](../../../../sources/DemonDamon__AgenticX/enterprise/docs/deployment/2026-05-12-supabase-seed-tls-pitfall.md)<br>[enterprise/docs/deployment/local-selfhost.md](../../../../sources/DemonDamon__AgenticX/enterprise/docs/deployment/local-selfhost.md)<br>[enterprise/docs/deployment/README.md](../../../../sources/DemonDamon__AgenticX/enterprise/docs/deployment/README.md)<br>[enterprise/docs/deployment/supabase-migration-guide.md](../../../../sources/DemonDamon__AgenticX/enterprise/docs/deployment/supabase-migration-guide.md) |
| instruction | 2 | [AGENTS.md](../../../../sources/DemonDamon__AgenticX/AGENTS.md)<br>[docs/api/agents.md](../../../../sources/DemonDamon__AgenticX/docs/api/agents.md) |
| docs | 219 | [mkdocs.yml](../../../../sources/DemonDamon__AgenticX/mkdocs.yml)<br>[README_ZN.md](../../../../sources/DemonDamon__AgenticX/README_ZN.md)<br>[README.md](../../../../sources/DemonDamon__AgenticX/README.md)<br>[tests/README.md](../../../../sources/DemonDamon__AgenticX/tests/README.md)<br>[packaging/wechat-sidecar/README.md](../../../../sources/DemonDamon__AgenticX/packaging/wechat-sidecar/README.md)<br>[examples/README_embeddings.md](../../../../sources/DemonDamon__AgenticX/examples/README_embeddings.md)<br>[examples/README_HITL.md](../../../../sources/DemonDamon__AgenticX/examples/README_HITL.md)<br>[examples/simple_chat_agent/README.md](../../../../sources/DemonDamon__AgenticX/examples/simple_chat_agent/README.md) |
| config | 72 | [pyproject.toml](../../../../sources/DemonDamon__AgenticX/pyproject.toml)<br>[requirements.txt](../../../../sources/DemonDamon__AgenticX/requirements.txt)<br>[packaging/wechat-sidecar/go.mod](../../../../sources/DemonDamon__AgenticX/packaging/wechat-sidecar/go.mod)<br>[packaging/wechat-sidecar/Makefile](../../../../sources/DemonDamon__AgenticX/packaging/wechat-sidecar/Makefile)<br>[examples/agenticx-for-intent-recognition/requirements.txt](../../../../sources/DemonDamon__AgenticX/examples/agenticx-for-intent-recognition/requirements.txt)<br>[examples/agenticx-for-docparser/requirements.txt](../../../../sources/DemonDamon__AgenticX/examples/agenticx-for-docparser/requirements.txt)<br>[examples/agenticx-for-agentkit/hi-agent/requirements.txt](../../../../sources/DemonDamon__AgenticX/examples/agenticx-for-agentkit/hi-agent/requirements.txt)<br>[enterprise/package.json](../../../../sources/DemonDamon__AgenticX/enterprise/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 664 | [tests/demo_e2e_test.py](../../../../sources/DemonDamon__AgenticX/tests/demo_e2e_test.py)<br>[tests/direct_mcp_test.py](../../../../sources/DemonDamon__AgenticX/tests/direct_mcp_test.py)<br>[tests/env_template.txt](../../../../sources/DemonDamon__AgenticX/tests/env_template.txt)<br>[tests/mineru_output_universal.md](../../../../sources/DemonDamon__AgenticX/tests/mineru_output_universal.md)<br>[tests/RAGAS_parsed.md](../../../../sources/DemonDamon__AgenticX/tests/RAGAS_parsed.md)<br>[tests/RAGAs.pdf](../../../../sources/DemonDamon__AgenticX/tests/RAGAs.pdf) |
| CI workflows | 2 | [.github/workflows/build-desktop.yml](../../../../sources/DemonDamon__AgenticX/.github/workflows/build-desktop.yml)<br>[.github/workflows/security-scan.yml](../../../../sources/DemonDamon__AgenticX/.github/workflows/security-scan.yml) |
| Containers / deploy | 59 | [examples/agenticx-for-agentkit/hi-agent/Dockerfile](../../../../sources/DemonDamon__AgenticX/examples/agenticx-for-agentkit/hi-agent/Dockerfile)<br>[enterprise/scripts/perf/mock-upstream/Dockerfile](../../../../sources/DemonDamon__AgenticX/enterprise/scripts/perf/mock-upstream/Dockerfile)<br>[enterprise/packages/ui/src/components/charts/ChartCard.tsx](../../../../sources/DemonDamon__AgenticX/enterprise/packages/ui/src/components/charts/ChartCard.tsx)<br>[enterprise/packages/ui/src/components/charts/theme.ts](../../../../sources/DemonDamon__AgenticX/enterprise/packages/ui/src/components/charts/theme.ts)<br>[enterprise/docs/deployment/2026-05-12-supabase-seed-tls-pitfall.md](../../../../sources/DemonDamon__AgenticX/enterprise/docs/deployment/2026-05-12-supabase-seed-tls-pitfall.md)<br>[enterprise/docs/deployment/local-selfhost.md](../../../../sources/DemonDamon__AgenticX/enterprise/docs/deployment/local-selfhost.md) |
| Security / policy | 280 | [tests/test_mcp_crash_guard.py](../../../../sources/DemonDamon__AgenticX/tests/test_mcp_crash_guard.py)<br>[tests/test_meta_agent_kb_policy.py](../../../../sources/DemonDamon__AgenticX/tests/test_meta_agent_kb_policy.py)<br>[tests/test_prompt_cache_policy.py](../../../../sources/DemonDamon__AgenticX/tests/test_prompt_cache_policy.py)<br>[tests/test_safety_audit.py](../../../../sources/DemonDamon__AgenticX/tests/test_safety_audit.py)<br>[tests/test_safety_policy.py](../../../../sources/DemonDamon__AgenticX/tests/test_safety_policy.py)<br>[tests/test_safety_sandbox_policy.py](../../../../sources/DemonDamon__AgenticX/tests/test_safety_sandbox_policy.py) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/DemonDamon__AgenticX/AGENTS.md)<br>[docs/api/agents.md](../../../../sources/DemonDamon__AgenticX/docs/api/agents.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/direct_mcp_test.py`, `tests/test_global_mcp_manager.py`, `tests/test_global_mcp_state_restore.py`.
2. Trace execution through entrypoints: `packaging/wechat-sidecar/main.go`, `examples/agenticx-for-intent-recognition/main.py`, `examples/agenticx-for-docparser/main.py`.
3. Map agent/tool runtime through: `AGENTS.md`, `tests/tools/test_api_connector_resolver.py`, `tests/tools/test_computer_use_resolver.py`.
4. Inspect retrieval/memory/indexing through: `tests/test_chunk_rerank_config.py`, `tests/test_favorite_to_memory.py`, `tests/test_hierarchical_memory.py`.
5. Verify behavior through test/eval files: `tests/demo_e2e_test.py`, `tests/direct_mcp_test.py`, `tests/env_template.txt`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 AgenticX is a unified, production ready multi agent platform — Python SDK + CLI agx + Studio server + Machi desktop app.. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, README.md, AGENTS.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
