# xuiltul/animaworks Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Organization-as-Code for autonomous AI agents. Brain-inspired memory that grows, consolidates, and forgets. Multi-model (Claude/Codex/Gemini/Cursor/Ollama).

## 요약

- 조사 단위: `sources/xuiltul__animaworks` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 2,785 files, 505 directories, depth score 128, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=tests/unit/test_ipc_chunk.py, tests/unit/test_memory_lazy_init.py, tests/unit/test_rag_singleton_cuda_fallback.py이고, 의존성 단서는 openai, anthropic, claude, codex, fastapi, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | xuiltul/animaworks |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 240 |
| Forks | 39 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/xuiltul__animaworks](../../../../sources/xuiltul__animaworks) |
| Existing report | [reports/llm-wiki/repositories/xuiltul__animaworks.md](../../../llm-wiki/repositories/xuiltul__animaworks.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 2785 / 505 |
| Max observed depth | 7 |
| Top directories | .claude, .github, assets, benchmarks, cli, core, demo, deploy, docs, scripts, server, swe, templates, tests |
| Top extensions | .py: 1528, .md: 886, .js: 122, .png: 75, .json: 70, .jsonl: 24, .css: 21, .txt: 12, (none): 11, .sh: 8, .yml: 7, .html: 4 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 162 |
| docs | documentation surface | 34 |
| server | source boundary | 2 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| benchmarks | validation surface | 1 |
| cli | top-level component | 1 |
| core | top-level component | 1 |
| demo | top-level component | 1 |
| deploy | deployment surface | 1 |
| scripts | top-level component | 1 |
| swe | top-level component | 1 |
| templates | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | animaworks | animaworks |
| utility | pyproject.toml | animaworks-tool | animaworks-tool |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic, claude |
| agentProtocols | codex |
| agentFrameworks | none |
| vectorStores | chroma |
| modelRuntime | transformers, ollama, llama |
| webRuntime | fastapi |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [tests/unit/test_ipc_chunk.py](../../../../sources/xuiltul__animaworks/tests/unit/test_ipc_chunk.py) | retrieval signal |
| retrieval | [tests/unit/test_memory_lazy_init.py](../../../../sources/xuiltul__animaworks/tests/unit/test_memory_lazy_init.py) | retrieval signal |
| retrieval | [tests/unit/test_rag_singleton_cuda_fallback.py](../../../../sources/xuiltul__animaworks/tests/unit/test_rag_singleton_cuda_fallback.py) | retrieval signal |
| retrieval | [tests/unit/test_rag_singleton.py](../../../../sources/xuiltul__animaworks/tests/unit/test_rag_singleton.py) | retrieval signal |
| entrypoints | [main.py](../../../../sources/xuiltul__animaworks/main.py) | entrypoints signal |
| entrypoints | [core/mcp/server.py](../../../../sources/xuiltul__animaworks/core/mcp/server.py) | entrypoints signal |
| entrypoints | [core/i18n/strings/server.py](../../../../sources/xuiltul__animaworks/core/i18n/strings/server.py) | entrypoints signal |
| entrypoints | [cli/__main__.py](../../../../sources/xuiltul__animaworks/cli/__main__.py) | entrypoints signal |
| docs | [README_ja.md](../../../../sources/xuiltul__animaworks/README_ja.md) | docs signal |
| docs | [README_ko.md](../../../../sources/xuiltul__animaworks/README_ko.md) | docs signal |
| docs | [README_zh.md](../../../../sources/xuiltul__animaworks/README_zh.md) | docs signal |
| docs | [README.md](../../../../sources/xuiltul__animaworks/README.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 6 | [main.py](../../../../sources/xuiltul__animaworks/main.py)<br>[core/mcp/server.py](../../../../sources/xuiltul__animaworks/core/mcp/server.py)<br>[core/i18n/strings/server.py](../../../../sources/xuiltul__animaworks/core/i18n/strings/server.py)<br>[cli/__main__.py](../../../../sources/xuiltul__animaworks/cli/__main__.py)<br>[cli/commands/server.py](../../../../sources/xuiltul__animaworks/cli/commands/server.py)<br>[benchmarks/locomo/__main__.py](../../../../sources/xuiltul__animaworks/benchmarks/locomo/__main__.py) |
| agentRuntime | 568 | [tests/unit/tools/__init__.py](../../../../sources/xuiltul__animaworks/tests/unit/tools/__init__.py)<br>[tests/unit/tools/test_anima_icon_url.py](../../../../sources/xuiltul__animaworks/tests/unit/tools/test_anima_icon_url.py)<br>[tests/unit/tools/test_asset_optimization.py](../../../../sources/xuiltul__animaworks/tests/unit/tools/test_asset_optimization.py)<br>[tests/unit/tools/test_aws_collector.py](../../../../sources/xuiltul__animaworks/tests/unit/tools/test_aws_collector.py)<br>[tests/unit/tools/test_base.py](../../../../sources/xuiltul__animaworks/tests/unit/tools/test_base.py)<br>[tests/unit/tools/test_chatwork.py](../../../../sources/xuiltul__animaworks/tests/unit/tools/test_chatwork.py)<br>[tests/unit/tools/test_diffusers_local_backend.py](../../../../sources/xuiltul__animaworks/tests/unit/tools/test_diffusers_local_backend.py)<br>[tests/unit/tools/test_fal_kontext.py](../../../../sources/xuiltul__animaworks/tests/unit/tools/test_fal_kontext.py) |
| mcp | 4 | [tests/unit/core/test_agent_sdk_mcp.py](../../../../sources/xuiltul__animaworks/tests/unit/core/test_agent_sdk_mcp.py)<br>[tests/unit/core/test_mcp_server.py](../../../../sources/xuiltul__animaworks/tests/unit/core/test_mcp_server.py)<br>[core/mcp/__init__.py](../../../../sources/xuiltul__animaworks/core/mcp/__init__.py)<br>[core/mcp/server.py](../../../../sources/xuiltul__animaworks/core/mcp/server.py) |
| retrieval | 781 | [tests/unit/test_ipc_chunk.py](../../../../sources/xuiltul__animaworks/tests/unit/test_ipc_chunk.py)<br>[tests/unit/test_memory_lazy_init.py](../../../../sources/xuiltul__animaworks/tests/unit/test_memory_lazy_init.py)<br>[tests/unit/test_rag_singleton_cuda_fallback.py](../../../../sources/xuiltul__animaworks/tests/unit/test_rag_singleton_cuda_fallback.py)<br>[tests/unit/test_rag_singleton.py](../../../../sources/xuiltul__animaworks/tests/unit/test_rag_singleton.py)<br>[tests/unit/test_security_memory_rag_trust.py](../../../../sources/xuiltul__animaworks/tests/unit/test_security_memory_rag_trust.py)<br>[tests/unit/test_skill_index_integration_gaps.py](../../../../sources/xuiltul__animaworks/tests/unit/test_skill_index_integration_gaps.py)<br>[tests/unit/test_skills_index.py](../../../../sources/xuiltul__animaworks/tests/unit/test_skills_index.py)<br>[tests/unit/tooling/test_action_memory_gate.py](../../../../sources/xuiltul__animaworks/tests/unit/tooling/test_action_memory_gate.py) |
| spec | 286 | [tests/test_skill_creator_spec_fixes.py](../../../../sources/xuiltul__animaworks/tests/test_skill_creator_spec_fixes.py)<br>[tests/unit/frontend/test_responsive_design.py](../../../../sources/xuiltul__animaworks/tests/unit/frontend/test_responsive_design.py)<br>[tests/unit/core/test_design_fixes.py](../../../../sources/xuiltul__animaworks/tests/unit/core/test_design_fixes.py)<br>[tests/unit/core/memory/test_activity_spec_compliance.py](../../../../sources/xuiltul__animaworks/tests/unit/core/memory/test_activity_spec_compliance.py)<br>[tests/e2e/core/test_spec_compliance_e2e.py](../../../../sources/xuiltul__animaworks/tests/e2e/core/test_spec_compliance_e2e.py)<br>[templates/ko/prompts/character_design_guide.md](../../../../sources/xuiltul__animaworks/templates/ko/prompts/character_design_guide.md)<br>[templates/ko/common_knowledge/team-design/guide.md](../../../../sources/xuiltul__animaworks/templates/ko/common_knowledge/team-design/guide.md)<br>[templates/ko/common_knowledge/team-design/org-chart-template.md](../../../../sources/xuiltul__animaworks/templates/ko/common_knowledge/team-design/org-chart-template.md) |
| eval | 999 | [tests/__init__.py](../../../../sources/xuiltul__animaworks/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/xuiltul__animaworks/tests/conftest.py)<br>[tests/test_anima_rename.py](../../../../sources/xuiltul__animaworks/tests/test_anima_rename.py)<br>[tests/test_housekeeping.py](../../../../sources/xuiltul__animaworks/tests/test_housekeeping.py)<br>[tests/test_llm_api_retry.py](../../../../sources/xuiltul__animaworks/tests/test_llm_api_retry.py)<br>[tests/test_outbound_rate_limiting.py](../../../../sources/xuiltul__animaworks/tests/test_outbound_rate_limiting.py)<br>[tests/test_skill_creator_spec_fixes.py](../../../../sources/xuiltul__animaworks/tests/test_skill_creator_spec_fixes.py)<br>[tests/unit/__init__.py](../../../../sources/xuiltul__animaworks/tests/unit/__init__.py) |
| security | 58 | [tests/unit/test_a1_output_guard.py](../../../../sources/xuiltul__animaworks/tests/unit/test_a1_output_guard.py)<br>[tests/unit/test_audit_org.py](../../../../sources/xuiltul__animaworks/tests/unit/test_audit_org.py)<br>[tests/unit/test_audit_subordinate.py](../../../../sources/xuiltul__animaworks/tests/unit/test_audit_subordinate.py)<br>[tests/unit/test_prompt_size_guard.py](../../../../sources/xuiltul__animaworks/tests/unit/test_prompt_size_guard.py)<br>[tests/unit/test_runner_heartbeat_guard.py](../../../../sources/xuiltul__animaworks/tests/unit/test_runner_heartbeat_guard.py)<br>[tests/unit/test_security_memory_rag_trust.py](../../../../sources/xuiltul__animaworks/tests/unit/test_security_memory_rag_trust.py)<br>[tests/unit/test_skill_activation_policy.py](../../../../sources/xuiltul__animaworks/tests/unit/test_skill_activation_policy.py)<br>[tests/unit/test_skills_guard.py](../../../../sources/xuiltul__animaworks/tests/unit/test_skills_guard.py) |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/xuiltul__animaworks/.github/workflows/ci.yml)<br>[.github/workflows/publish.yml](../../../../sources/xuiltul__animaworks/.github/workflows/publish.yml) |
| container | 9 | [docker-compose.neo4j.yml](../../../../sources/xuiltul__animaworks/docker-compose.neo4j.yml)<br>[docker-compose.yml](../../../../sources/xuiltul__animaworks/docker-compose.yml)<br>[Dockerfile](../../../../sources/xuiltul__animaworks/Dockerfile)<br>[swe/docker-compose.yml](../../../../sources/xuiltul__animaworks/swe/docker-compose.yml)<br>[swe/Dockerfile](../../../../sources/xuiltul__animaworks/swe/Dockerfile)<br>[deploy/animaworks.service](../../../../sources/xuiltul__animaworks/deploy/animaworks.service)<br>[demo/docker-compose.dev.yml](../../../../sources/xuiltul__animaworks/demo/docker-compose.dev.yml)<br>[demo/docker-compose.yml](../../../../sources/xuiltul__animaworks/demo/docker-compose.yml) |
| instruction | 0 | not obvious |
| docs | 72 | [README_ja.md](../../../../sources/xuiltul__animaworks/README_ja.md)<br>[README_ko.md](../../../../sources/xuiltul__animaworks/README_ko.md)<br>[README_zh.md](../../../../sources/xuiltul__animaworks/README_zh.md)<br>[README.md](../../../../sources/xuiltul__animaworks/README.md)<br>[tests/integration/README.md](../../../../sources/xuiltul__animaworks/tests/integration/README.md)<br>[tests/evaluation/README.md](../../../../sources/xuiltul__animaworks/tests/evaluation/README.md)<br>[swe/README.md](../../../../sources/xuiltul__animaworks/swe/README.md)<br>[docs/api-reference.ja.md](../../../../sources/xuiltul__animaworks/docs/api-reference.ja.md) |
| config | 1 | [pyproject.toml](../../../../sources/xuiltul__animaworks/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 999 | [tests/__init__.py](../../../../sources/xuiltul__animaworks/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/xuiltul__animaworks/tests/conftest.py)<br>[tests/test_anima_rename.py](../../../../sources/xuiltul__animaworks/tests/test_anima_rename.py)<br>[tests/test_housekeeping.py](../../../../sources/xuiltul__animaworks/tests/test_housekeeping.py)<br>[tests/test_llm_api_retry.py](../../../../sources/xuiltul__animaworks/tests/test_llm_api_retry.py)<br>[tests/test_outbound_rate_limiting.py](../../../../sources/xuiltul__animaworks/tests/test_outbound_rate_limiting.py) |
| CI workflows | 2 | [.github/workflows/ci.yml](../../../../sources/xuiltul__animaworks/.github/workflows/ci.yml)<br>[.github/workflows/publish.yml](../../../../sources/xuiltul__animaworks/.github/workflows/publish.yml) |
| Containers / deploy | 9 | [docker-compose.neo4j.yml](../../../../sources/xuiltul__animaworks/docker-compose.neo4j.yml)<br>[docker-compose.yml](../../../../sources/xuiltul__animaworks/docker-compose.yml)<br>[Dockerfile](../../../../sources/xuiltul__animaworks/Dockerfile)<br>[swe/docker-compose.yml](../../../../sources/xuiltul__animaworks/swe/docker-compose.yml)<br>[swe/Dockerfile](../../../../sources/xuiltul__animaworks/swe/Dockerfile)<br>[deploy/animaworks.service](../../../../sources/xuiltul__animaworks/deploy/animaworks.service) |
| Security / policy | 58 | [tests/unit/test_a1_output_guard.py](../../../../sources/xuiltul__animaworks/tests/unit/test_a1_output_guard.py)<br>[tests/unit/test_audit_org.py](../../../../sources/xuiltul__animaworks/tests/unit/test_audit_org.py)<br>[tests/unit/test_audit_subordinate.py](../../../../sources/xuiltul__animaworks/tests/unit/test_audit_subordinate.py)<br>[tests/unit/test_prompt_size_guard.py](../../../../sources/xuiltul__animaworks/tests/unit/test_prompt_size_guard.py)<br>[tests/unit/test_runner_heartbeat_guard.py](../../../../sources/xuiltul__animaworks/tests/unit/test_runner_heartbeat_guard.py)<br>[tests/unit/test_security_memory_rag_trust.py](../../../../sources/xuiltul__animaworks/tests/unit/test_security_memory_rag_trust.py) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/unit/test_ipc_chunk.py`, `tests/unit/test_memory_lazy_init.py`, `tests/unit/test_rag_singleton_cuda_fallback.py`.
2. Trace execution through entrypoints: `main.py`, `core/mcp/server.py`, `core/i18n/strings/server.py`.
3. Map agent/tool runtime through: `tests/unit/tools/__init__.py`, `tests/unit/tools/test_anima_icon_url.py`, `tests/unit/tools/test_asset_optimization.py`.
4. Inspect retrieval/memory/indexing through: `tests/unit/test_ipc_chunk.py`, `tests/unit/test_memory_lazy_init.py`, `tests/unit/test_rag_singleton_cuda_fallback.py`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/conftest.py`, `tests/test_anima_rename.py`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Organization as Code for autonomous AI agents. Brain inspired memory that grows, consolidates, and forgets. Multi model . 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, docker-compose.yml, README.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 needs deeper structural scan입니다.
