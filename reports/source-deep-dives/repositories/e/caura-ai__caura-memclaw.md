# caura-ai/caura-memclaw Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Governed shared memory for AI agent fleets — multi-agent, multi-tenant, MCP-native. Trust tiers, keystone policies, audit trails, knowledge graph, self-improving retrieval. Apache 2.0.

## 요약

- 조사 단위: `sources/caura-ai__caura-memclaw` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 802 files, 82 directories, depth score 127, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=.mcp.json, tests/_mcp_test_helpers.py, tests/test_api_mcp.py이고, 의존성 단서는 openai, mcp, fastapi, pydantic, pgvector, playwright, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | caura-ai/caura-memclaw |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 127 |
| Forks | 12 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/caura-ai__caura-memclaw](../../../../sources/caura-ai__caura-memclaw) |
| Existing report | [reports/global-trending/repositories/caura-ai__caura-memclaw.md](../../../global-trending/repositories/caura-ai__caura-memclaw.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 802 / 82 |
| Max observed depth | 7 |
| Top directories | .claude, .github, clients, common, core-api, core-operations, core-storage-api, core-worker, docs, e2e, plugin, scripts, static, tests |
| Top extensions | .py: 624, .ts: 44, .md: 30, .yml: 21, .json: 19, .svg: 13, (none): 11, .png: 6, .sh: 6, .ini: 5, .lock: 5, .toml: 5 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 101 |
| docs | documentation surface | 43 |
| .github | ci surface | 1 |
| clients | source boundary | 1 |
| common | top-level component | 1 |
| core-api | source boundary | 1 |
| core-operations | top-level component | 1 |
| core-storage-api | source boundary | 1 |
| core-worker | top-level component | 1 |
| e2e | validation surface | 1 |
| plugin | top-level component | 1 |
| scripts | top-level component | 1 |
| static | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| test | package.json | test | echo "Error: no test specified" && exit 1 |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | pgvector |
| modelRuntime | none |
| webRuntime | fastapi |
| developerSurface | none |
| observability | none |
| browserAutomation | playwright |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [.mcp.json](../../../../sources/caura-ai__caura-memclaw/.mcp.json) | mcp signal |
| mcp | [tests/_mcp_test_helpers.py](../../../../sources/caura-ai__caura-memclaw/tests/_mcp_test_helpers.py) | mcp signal |
| mcp | [tests/test_api_mcp.py](../../../../sources/caura-ai__caura-memclaw/tests/test_api_mcp.py) | mcp signal |
| mcp | [tests/test_direct_mcp_skill.py](../../../../sources/caura-ai__caura-memclaw/tests/test_direct_mcp_skill.py) | mcp signal |
| agentRuntime | [AGENT-INSTALL.md](../../../../sources/caura-ai__caura-memclaw/AGENT-INSTALL.md) | agentRuntime signal |
| agentRuntime | [tests/fixtures/tool_descriptions_baseline_v1.json](../../../../sources/caura-ai__caura-memclaw/tests/fixtures/tool_descriptions_baseline_v1.json) | agentRuntime signal |
| agentRuntime | [tests/fixtures/tool_descriptions_enriched_baseline_v1.json](../../../../sources/caura-ai__caura-memclaw/tests/fixtures/tool_descriptions_enriched_baseline_v1.json) | agentRuntime signal |
| agentRuntime | [tests/fixtures/tools_list_baseline_v1.json](../../../../sources/caura-ai__caura-memclaw/tests/fixtures/tools_list_baseline_v1.json) | agentRuntime signal |
| entrypoints | [plugin/src/index.ts](../../../../sources/caura-ai__caura-memclaw/plugin/src/index.ts) | entrypoints signal |
| entrypoints | [clients/typescript/src/index.test.ts](../../../../sources/caura-ai__caura-memclaw/clients/typescript/src/index.test.ts) | entrypoints signal |
| entrypoints | [clients/typescript/src/index.ts](../../../../sources/caura-ai__caura-memclaw/clients/typescript/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/caura-ai__caura-memclaw/package.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [plugin/src/index.ts](../../../../sources/caura-ai__caura-memclaw/plugin/src/index.ts)<br>[clients/typescript/src/index.test.ts](../../../../sources/caura-ai__caura-memclaw/clients/typescript/src/index.test.ts)<br>[clients/typescript/src/index.ts](../../../../sources/caura-ai__caura-memclaw/clients/typescript/src/index.ts) |
| agentRuntime | 59 | [AGENT-INSTALL.md](../../../../sources/caura-ai__caura-memclaw/AGENT-INSTALL.md)<br>[tests/fixtures/tool_descriptions_baseline_v1.json](../../../../sources/caura-ai__caura-memclaw/tests/fixtures/tool_descriptions_baseline_v1.json)<br>[tests/fixtures/tool_descriptions_enriched_baseline_v1.json](../../../../sources/caura-ai__caura-memclaw/tests/fixtures/tool_descriptions_enriched_baseline_v1.json)<br>[tests/fixtures/tools_list_baseline_v1.json](../../../../sources/caura-ai__caura-memclaw/tests/fixtures/tools_list_baseline_v1.json)<br>[static/skills/memclaw/SKILL.md](../../../../sources/caura-ai__caura-memclaw/static/skills/memclaw/SKILL.md)<br>[plugin/tools.json](../../../../sources/caura-ai__caura-memclaw/plugin/tools.json)<br>[plugin/src/agent-auth.ts](../../../../sources/caura-ai__caura-memclaw/plugin/src/agent-auth.ts)<br>[plugin/src/context-engine.internal.ts](../../../../sources/caura-ai__caura-memclaw/plugin/src/context-engine.internal.ts) |
| mcp | 22 | [.mcp.json](../../../../sources/caura-ai__caura-memclaw/.mcp.json)<br>[tests/_mcp_test_helpers.py](../../../../sources/caura-ai__caura-memclaw/tests/_mcp_test_helpers.py)<br>[tests/test_api_mcp.py](../../../../sources/caura-ai__caura-memclaw/tests/test_api_mcp.py)<br>[tests/test_direct_mcp_skill.py](../../../../sources/caura-ai__caura-memclaw/tests/test_direct_mcp_skill.py)<br>[tests/test_mcp_call_tool_e2e.py](../../../../sources/caura-ai__caura-memclaw/tests/test_mcp_call_tool_e2e.py)<br>[tests/test_mcp_default_agent_guard_a14.py](../../../../sources/caura-ai__caura-memclaw/tests/test_mcp_default_agent_guard_a14.py)<br>[tests/test_mcp_default_agent_guard_a29.py](../../../../sources/caura-ai__caura-memclaw/tests/test_mcp_default_agent_guard_a29.py)<br>[tests/test_mcp_doc.py](../../../../sources/caura-ai__caura-memclaw/tests/test_mcp_doc.py) |
| retrieval | 83 | [tests/test_c3_c8_reserved_memory_types.py](../../../../sources/caura-ai__caura-memclaw/tests/test_c3_c8_reserved_memory_types.py)<br>[tests/test_c9_embedding_cache_instruction_key.py](../../../../sources/caura-ai__caura-memclaw/tests/test_c9_embedding_cache_instruction_key.py)<br>[tests/test_caura_000_graph_frontier_cap.py](../../../../sources/caura-ai__caura-memclaw/tests/test_caura_000_graph_frontier_cap.py)<br>[tests/test_d7_parallel_embed_per_task_timeout.py](../../../../sources/caura-ai__caura-memclaw/tests/test_d7_parallel_embed_per_task_timeout.py)<br>[tests/test_embed_off_hot_path.py](../../../../sources/caura-ai__caura-memclaw/tests/test_embed_off_hot_path.py)<br>[tests/test_embed_stability.py](../../../../sources/caura-ai__caura-memclaw/tests/test_embed_stability.py)<br>[tests/test_embedding_backfill.py](../../../../sources/caura-ai__caura-memclaw/tests/test_embedding_backfill.py)<br>[tests/test_embedding_openai_compat.py](../../../../sources/caura-ai__caura-memclaw/tests/test_embedding_openai_compat.py) |
| spec | 5 | [requirements.txt](../../../../sources/caura-ai__caura-memclaw/requirements.txt)<br>[static/images/memclaw-architecture.png](../../../../sources/caura-ai__caura-memclaw/static/images/memclaw-architecture.png)<br>[e2e/navbar-audit.spec.ts](../../../../sources/caura-ai__caura-memclaw/e2e/navbar-audit.spec.ts)<br>[docs/live-memory-pitch/08-skill-factory-architecture.svg](../../../../sources/caura-ai__caura-memclaw/docs/live-memory-pitch/08-skill-factory-architecture.svg)<br>[docs/live-memory-pitch/skill-factory-spec.md](../../../../sources/caura-ai__caura-memclaw/docs/live-memory-pitch/skill-factory-spec.md) |
| eval | 298 | [tests/__init__.py](../../../../sources/caura-ai__caura-memclaw/tests/__init__.py)<br>[tests/_contradiction_batch_compat.py](../../../../sources/caura-ai__caura-memclaw/tests/_contradiction_batch_compat.py)<br>[tests/_mcp_test_helpers.py](../../../../sources/caura-ai__caura-memclaw/tests/_mcp_test_helpers.py)<br>[tests/conftest.py](../../../../sources/caura-ai__caura-memclaw/tests/conftest.py)<br>[tests/test_a1_15_two_tier_dedup_constants.py](../../../../sources/caura-ai__caura-memclaw/tests/test_a1_15_two_tier_dedup_constants.py)<br>[tests/test_a1_16_dedup_judge_dispatch.py](../../../../sources/caura-ai__caura-memclaw/tests/test_a1_16_dedup_judge_dispatch.py)<br>[tests/test_a1_17_subject_entity_preflight.py](../../../../sources/caura-ai__caura-memclaw/tests/test_a1_17_subject_entity_preflight.py)<br>[tests/test_a1_18_dedup_review_queue.py](../../../../sources/caura-ai__caura-memclaw/tests/test_a1_18_dedup_review_queue.py) |
| security | 35 | [SECURITY.md](../../../../sources/caura-ai__caura-memclaw/SECURITY.md)<br>[tests/test_api_audit.py](../../../../sources/caura-ai__caura-memclaw/tests/test_api_audit.py)<br>[tests/test_audit_chain.py](../../../../sources/caura-ai__caura-memclaw/tests/test_audit_chain.py)<br>[tests/test_audit_queue.py](../../../../sources/caura-ai__caura-memclaw/tests/test_audit_queue.py)<br>[tests/test_audit_s6_c1_events.py](../../../../sources/caura-ai__caura-memclaw/tests/test_audit_s6_c1_events.py)<br>[tests/test_auth_context.py](../../../../sources/caura-ai__caura-memclaw/tests/test_auth_context.py)<br>[tests/test_cross_tenant_audit_surfaces.py](../../../../sources/caura-ai__caura-memclaw/tests/test_cross_tenant_audit_surfaces.py)<br>[tests/test_cross_tenant_auth.py](../../../../sources/caura-ai__caura-memclaw/tests/test_cross_tenant_auth.py) |
| ci | 14 | [.github/workflows/ci.yml](../../../../sources/caura-ai__caura-memclaw/.github/workflows/ci.yml)<br>[.github/workflows/claude_code_review.yml](../../../../sources/caura-ai__caura-memclaw/.github/workflows/claude_code_review.yml)<br>[.github/workflows/client-python-ci.yml](../../../../sources/caura-ai__caura-memclaw/.github/workflows/client-python-ci.yml)<br>[.github/workflows/client-typescript-ci.yml](../../../../sources/caura-ai__caura-memclaw/.github/workflows/client-typescript-ci.yml)<br>[.github/workflows/codeql.yml](../../../../sources/caura-ai__caura-memclaw/.github/workflows/codeql.yml)<br>[.github/workflows/dco.yml](../../../../sources/caura-ai__caura-memclaw/.github/workflows/dco.yml)<br>[.github/workflows/labels-sync.yml](../../../../sources/caura-ai__caura-memclaw/.github/workflows/labels-sync.yml)<br>[.github/workflows/notify-enterprise-staging.yml](../../../../sources/caura-ai__caura-memclaw/.github/workflows/notify-enterprise-staging.yml) |
| container | 6 | [docker-compose.dev.yml](../../../../sources/caura-ai__caura-memclaw/docker-compose.dev.yml)<br>[docker-compose.yml](../../../../sources/caura-ai__caura-memclaw/docker-compose.yml)<br>[core-worker/Dockerfile](../../../../sources/caura-ai__caura-memclaw/core-worker/Dockerfile)<br>[core-storage-api/Dockerfile](../../../../sources/caura-ai__caura-memclaw/core-storage-api/Dockerfile)<br>[core-operations/Dockerfile](../../../../sources/caura-ai__caura-memclaw/core-operations/Dockerfile)<br>[core-api/Dockerfile](../../../../sources/caura-ai__caura-memclaw/core-api/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 28 | [README.md](../../../../sources/caura-ai__caura-memclaw/README.md)<br>[tests/fixtures/README.md](../../../../sources/caura-ai__caura-memclaw/tests/fixtures/README.md)<br>[static/docs/integration-guide.md](../../../../sources/caura-ai__caura-memclaw/static/docs/integration-guide.md)<br>[docs/api-surfaces.md](../../../../sources/caura-ai__caura-memclaw/docs/api-surfaces.md)<br>[docs/integration-without-plugin.md](../../../../sources/caura-ai__caura-memclaw/docs/integration-without-plugin.md)<br>[docs/local-embedder.md](../../../../sources/caura-ai__caura-memclaw/docs/local-embedder.md)<br>[docs/mcp-skill-delivery.md](../../../../sources/caura-ai__caura-memclaw/docs/mcp-skill-delivery.md)<br>[docs/operator-forge-cron.md](../../../../sources/caura-ai__caura-memclaw/docs/operator-forge-cron.md) |
| config | 15 | [package.json](../../../../sources/caura-ai__caura-memclaw/package.json)<br>[requirements.txt](../../../../sources/caura-ai__caura-memclaw/requirements.txt)<br>[plugin/package.json](../../../../sources/caura-ai__caura-memclaw/plugin/package.json)<br>[plugin/tsconfig.json](../../../../sources/caura-ai__caura-memclaw/plugin/tsconfig.json)<br>[core-worker/pyproject.toml](../../../../sources/caura-ai__caura-memclaw/core-worker/pyproject.toml)<br>[core-worker/uv.lock](../../../../sources/caura-ai__caura-memclaw/core-worker/uv.lock)<br>[core-storage-api/pyproject.toml](../../../../sources/caura-ai__caura-memclaw/core-storage-api/pyproject.toml)<br>[core-storage-api/uv.lock](../../../../sources/caura-ai__caura-memclaw/core-storage-api/uv.lock) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 298 | [tests/__init__.py](../../../../sources/caura-ai__caura-memclaw/tests/__init__.py)<br>[tests/_contradiction_batch_compat.py](../../../../sources/caura-ai__caura-memclaw/tests/_contradiction_batch_compat.py)<br>[tests/_mcp_test_helpers.py](../../../../sources/caura-ai__caura-memclaw/tests/_mcp_test_helpers.py)<br>[tests/conftest.py](../../../../sources/caura-ai__caura-memclaw/tests/conftest.py)<br>[tests/test_a1_15_two_tier_dedup_constants.py](../../../../sources/caura-ai__caura-memclaw/tests/test_a1_15_two_tier_dedup_constants.py)<br>[tests/test_a1_16_dedup_judge_dispatch.py](../../../../sources/caura-ai__caura-memclaw/tests/test_a1_16_dedup_judge_dispatch.py) |
| CI workflows | 14 | [.github/workflows/ci.yml](../../../../sources/caura-ai__caura-memclaw/.github/workflows/ci.yml)<br>[.github/workflows/claude_code_review.yml](../../../../sources/caura-ai__caura-memclaw/.github/workflows/claude_code_review.yml)<br>[.github/workflows/client-python-ci.yml](../../../../sources/caura-ai__caura-memclaw/.github/workflows/client-python-ci.yml)<br>[.github/workflows/client-typescript-ci.yml](../../../../sources/caura-ai__caura-memclaw/.github/workflows/client-typescript-ci.yml)<br>[.github/workflows/codeql.yml](../../../../sources/caura-ai__caura-memclaw/.github/workflows/codeql.yml)<br>[.github/workflows/dco.yml](../../../../sources/caura-ai__caura-memclaw/.github/workflows/dco.yml) |
| Containers / deploy | 6 | [docker-compose.dev.yml](../../../../sources/caura-ai__caura-memclaw/docker-compose.dev.yml)<br>[docker-compose.yml](../../../../sources/caura-ai__caura-memclaw/docker-compose.yml)<br>[core-worker/Dockerfile](../../../../sources/caura-ai__caura-memclaw/core-worker/Dockerfile)<br>[core-storage-api/Dockerfile](../../../../sources/caura-ai__caura-memclaw/core-storage-api/Dockerfile)<br>[core-operations/Dockerfile](../../../../sources/caura-ai__caura-memclaw/core-operations/Dockerfile)<br>[core-api/Dockerfile](../../../../sources/caura-ai__caura-memclaw/core-api/Dockerfile) |
| Security / policy | 35 | [SECURITY.md](../../../../sources/caura-ai__caura-memclaw/SECURITY.md)<br>[tests/test_api_audit.py](../../../../sources/caura-ai__caura-memclaw/tests/test_api_audit.py)<br>[tests/test_audit_chain.py](../../../../sources/caura-ai__caura-memclaw/tests/test_audit_chain.py)<br>[tests/test_audit_queue.py](../../../../sources/caura-ai__caura-memclaw/tests/test_audit_queue.py)<br>[tests/test_audit_s6_c1_events.py](../../../../sources/caura-ai__caura-memclaw/tests/test_audit_s6_c1_events.py)<br>[tests/test_auth_context.py](../../../../sources/caura-ai__caura-memclaw/tests/test_auth_context.py) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `.mcp.json`, `tests/_mcp_test_helpers.py`, `tests/test_api_mcp.py`.
2. Trace execution through entrypoints: `plugin/src/index.ts`, `clients/typescript/src/index.test.ts`, `clients/typescript/src/index.ts`.
3. Map agent/tool runtime through: `AGENT-INSTALL.md`, `tests/fixtures/tool_descriptions_baseline_v1.json`, `tests/fixtures/tool_descriptions_enriched_baseline_v1.json`.
4. Inspect retrieval/memory/indexing through: `tests/test_c3_c8_reserved_memory_types.py`, `tests/test_c9_embedding_cache_instruction_key.py`, `tests/test_caura_000_graph_frontier_cap.py`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/_contradiction_batch_compat.py`, `tests/_mcp_test_helpers.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Governed shared memory for AI agent fleets — multi agent, multi tenant, MCP native. Trust tiers, keystone policies, audi. 핵심 구조 신호는 Python, package.json, requirements.txt, docker-compose.yml, README.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
