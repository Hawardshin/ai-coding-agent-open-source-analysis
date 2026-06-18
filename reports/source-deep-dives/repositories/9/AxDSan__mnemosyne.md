# AxDSan/mnemosyne Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

The Zero-Dependency, Sub-Millisecond AI Memory System for Hermes Agents and Everyone Else!

## 요약

- 조사 단위: `sources/AxDSan__mnemosyne` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 327 files, 43 directories, depth score 120, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/test_mcp_server.py, tests/test_s1_mcp_sse_auth.py, mnemosyne/mcp_server.py이고, 의존성 단서는 claude, codex, mcp, transformers, llama, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | AxDSan/mnemosyne |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 1170 |
| Forks | 109 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/AxDSan__mnemosyne](../../../../sources/AxDSan__mnemosyne) |
| Existing report | [reports/global-trending/repositories/AxDSan__mnemosyne.md](../../../global-trending/repositories/AxDSan__mnemosyne.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 327 / 43 |
| Max observed depth | 5 |
| Top directories | .agents, .claude, .githooks, .github, assets, deploy, docs, examples, hermes_memory_provider, integrations, mnemosyne, scripts, skills, tests, tools |
| Top extensions | .py: 229, .md: 55, (none): 9, .json: 6, .yml: 6, .ts: 5, .sh: 4, .toml: 3, .yaml: 3, .mdx: 2, .in: 1, .jpg: 1 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 49 |
| tests | validation surface | 49 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| deploy | deployment surface | 1 |
| examples | top-level component | 1 |
| examples/embedding_server.py | examples workspace | 1 |
| hermes_memory_provider | top-level component | 1 |
| integrations | top-level component | 1 |
| mnemosyne | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |
| tools | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | mnemosyne-install | mnemosyne-install |
| utility | pyproject.toml | mnemosyne-uninstall | mnemosyne-uninstall |
| utility | pyproject.toml | mnemosyne | mnemosyne |
| utility | pyproject.toml | mnemosyne-browser | mnemosyne-browser |
| utility | pyproject.toml | mnemosyne-auto-save | mnemosyne-auto-save |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | claude |
| agentProtocols | mcp, codex |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | transformers, llama |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [tests/test_mcp_server.py](../../../../sources/AxDSan__mnemosyne/tests/test_mcp_server.py) | mcp signal |
| mcp | [tests/test_s1_mcp_sse_auth.py](../../../../sources/AxDSan__mnemosyne/tests/test_s1_mcp_sse_auth.py) | mcp signal |
| mcp | [mnemosyne/mcp_server.py](../../../../sources/AxDSan__mnemosyne/mnemosyne/mcp_server.py) | mcp signal |
| mcp | [mnemosyne/mcp_tools.py](../../../../sources/AxDSan__mnemosyne/mnemosyne/mcp_tools.py) | mcp signal |
| agentRuntime | [tools/beam_phase3_test.py](../../../../sources/AxDSan__mnemosyne/tools/beam_phase3_test.py) | agentRuntime signal |
| agentRuntime | [tools/bench_100k_fast.py](../../../../sources/AxDSan__mnemosyne/tools/bench_100k_fast.py) | agentRuntime signal |
| agentRuntime | [tools/bench_100k_gemma.py](../../../../sources/AxDSan__mnemosyne/tools/bench_100k_gemma.py) | agentRuntime signal |
| agentRuntime | [tools/bench_audit_log.py](../../../../sources/AxDSan__mnemosyne/tools/bench_audit_log.py) | agentRuntime signal |
| entrypoints | [integrations/obsidian-mnemosyne/main.ts](../../../../sources/AxDSan__mnemosyne/integrations/obsidian-mnemosyne/main.ts) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/AxDSan__mnemosyne/pyproject.toml) | config signal |
| config | [requirements-benchmark.txt](../../../../sources/AxDSan__mnemosyne/requirements-benchmark.txt) | config signal |
| config | [uv.lock](../../../../sources/AxDSan__mnemosyne/uv.lock) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [integrations/obsidian-mnemosyne/main.ts](../../../../sources/AxDSan__mnemosyne/integrations/obsidian-mnemosyne/main.ts) |
| agentRuntime | 23 | [tools/beam_phase3_test.py](../../../../sources/AxDSan__mnemosyne/tools/beam_phase3_test.py)<br>[tools/bench_100k_fast.py](../../../../sources/AxDSan__mnemosyne/tools/bench_100k_fast.py)<br>[tools/bench_100k_gemma.py](../../../../sources/AxDSan__mnemosyne/tools/bench_100k_gemma.py)<br>[tools/bench_audit_log.py](../../../../sources/AxDSan__mnemosyne/tools/bench_audit_log.py)<br>[tools/bench_nai0.py](../../../../sources/AxDSan__mnemosyne/tools/bench_nai0.py)<br>[tools/bench_nai1.py](../../../../sources/AxDSan__mnemosyne/tools/bench_nai1.py)<br>[tools/bench_nai2.py](../../../../sources/AxDSan__mnemosyne/tools/bench_nai2.py)<br>[tools/bench_rerank.py](../../../../sources/AxDSan__mnemosyne/tools/bench_rerank.py) |
| mcp | 9 | [tests/test_mcp_server.py](../../../../sources/AxDSan__mnemosyne/tests/test_mcp_server.py)<br>[tests/test_s1_mcp_sse_auth.py](../../../../sources/AxDSan__mnemosyne/tests/test_s1_mcp_sse_auth.py)<br>[mnemosyne/mcp_server.py](../../../../sources/AxDSan__mnemosyne/mnemosyne/mcp_server.py)<br>[mnemosyne/mcp_tools.py](../../../../sources/AxDSan__mnemosyne/mnemosyne/mcp_tools.py)<br>[docs/integrations/claude-code-mcp.md](../../../../sources/AxDSan__mnemosyne/docs/integrations/claude-code-mcp.md)<br>[docs/integrations/codex-mcp.md](../../../../sources/AxDSan__mnemosyne/docs/integrations/codex-mcp.md)<br>[docs/integrations/cursor-mcp.md](../../../../sources/AxDSan__mnemosyne/docs/integrations/cursor-mcp.md)<br>[docs/integrations/hermes-mcp.md](../../../../sources/AxDSan__mnemosyne/docs/integrations/hermes-mcp.md) |
| retrieval | 30 | [tests/benchmark_beam_working_memory.py](../../../../sources/AxDSan__mnemosyne/tests/benchmark_beam_working_memory.py)<br>[tests/test_degrade_vector.py](../../../../sources/AxDSan__mnemosyne/tests/test_degrade_vector.py)<br>[tests/test_e5a_vector_voice_dense_rewire.py](../../../../sources/AxDSan__mnemosyne/tests/test_e5a_vector_voice_dense_rewire.py)<br>[tests/test_episodic_stats_vector_fallback.py](../../../../sources/AxDSan__mnemosyne/tests/test_episodic_stats_vector_fallback.py)<br>[tests/test_graph_tools.py](../../../../sources/AxDSan__mnemosyne/tests/test_graph_tools.py)<br>[tests/test_hermes_memory_provider_audit.py](../../../../sources/AxDSan__mnemosyne/tests/test_hermes_memory_provider_audit.py)<br>[tests/test_hermes_memory_provider_diagnose_active_db.py](../../../../sources/AxDSan__mnemosyne/tests/test_hermes_memory_provider_diagnose_active_db.py)<br>[tests/test_hermes_memory_provider_shared_crud.py](../../../../sources/AxDSan__mnemosyne/tests/test_hermes_memory_provider_shared_crud.py) |
| spec | 2 | [requirements-benchmark.txt](../../../../sources/AxDSan__mnemosyne/requirements-benchmark.txt)<br>[docs/architecture.md](../../../../sources/AxDSan__mnemosyne/docs/architecture.md) |
| eval | 136 | [requirements-benchmark.txt](../../../../sources/AxDSan__mnemosyne/requirements-benchmark.txt)<br>[run_beam_bench.sh](../../../../sources/AxDSan__mnemosyne/run_beam_bench.sh)<br>[tools/beam_phase3_test.py](../../../../sources/AxDSan__mnemosyne/tools/beam_phase3_test.py)<br>[tools/bench_100k_fast.py](../../../../sources/AxDSan__mnemosyne/tools/bench_100k_fast.py)<br>[tools/bench_100k_gemma.py](../../../../sources/AxDSan__mnemosyne/tools/bench_100k_gemma.py)<br>[tools/bench_audit_log.py](../../../../sources/AxDSan__mnemosyne/tools/bench_audit_log.py)<br>[tools/bench_nai0.py](../../../../sources/AxDSan__mnemosyne/tools/bench_nai0.py)<br>[tools/bench_nai1.py](../../../../sources/AxDSan__mnemosyne/tools/bench_nai1.py) |
| security | 13 | [SECURITY.md](../../../../sources/AxDSan__mnemosyne/SECURITY.md)<br>[tools/bench_audit_log.py](../../../../sources/AxDSan__mnemosyne/tools/bench_audit_log.py)<br>[tests/test_hermes_memory_provider_audit.py](../../../../sources/AxDSan__mnemosyne/tests/test_hermes_memory_provider_audit.py)<br>[tests/test_s1_mcp_sse_auth.py](../../../../sources/AxDSan__mnemosyne/tests/test_s1_mcp_sse_auth.py)<br>[tests/test_vec_dim_guard.py](../../../../sources/AxDSan__mnemosyne/tests/test_vec_dim_guard.py)<br>[scripts/memoria_audit.py](../../../../sources/AxDSan__mnemosyne/scripts/memoria_audit.py)<br>[integrations/hermes/src/mnemosyne_hermes/audit.py](../../../../sources/AxDSan__mnemosyne/integrations/hermes/src/mnemosyne_hermes/audit.py)<br>[hermes_memory_provider/audit.py](../../../../sources/AxDSan__mnemosyne/hermes_memory_provider/audit.py) |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/AxDSan__mnemosyne/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/AxDSan__mnemosyne/.github/workflows/release.yml) |
| container | 6 | [docker-compose.yml](../../../../sources/AxDSan__mnemosyne/docker-compose.yml)<br>[Dockerfile](../../../../sources/AxDSan__mnemosyne/Dockerfile)<br>[deploy/sync/Caddyfile](../../../../sources/AxDSan__mnemosyne/deploy/sync/Caddyfile)<br>[deploy/sync/docker-compose.yml](../../../../sources/AxDSan__mnemosyne/deploy/sync/docker-compose.yml)<br>[deploy/sync/fly.toml](../../../../sources/AxDSan__mnemosyne/deploy/sync/fly.toml)<br>[deploy/sync/README.md](../../../../sources/AxDSan__mnemosyne/deploy/sync/README.md) |
| instruction | 0 | not obvious |
| docs | 43 | [README.md](../../../../sources/AxDSan__mnemosyne/README.md)<br>[integrations/vscode-mnemosyne/README.md](../../../../sources/AxDSan__mnemosyne/integrations/vscode-mnemosyne/README.md)<br>[integrations/obsidian-mnemosyne/README.md](../../../../sources/AxDSan__mnemosyne/integrations/obsidian-mnemosyne/README.md)<br>[integrations/hermes/README.md](../../../../sources/AxDSan__mnemosyne/integrations/hermes/README.md)<br>[hermes_memory_provider/README.md](../../../../sources/AxDSan__mnemosyne/hermes_memory_provider/README.md)<br>[docs/api-reference.md](../../../../sources/AxDSan__mnemosyne/docs/api-reference.md)<br>[docs/architecture.md](../../../../sources/AxDSan__mnemosyne/docs/architecture.md)<br>[docs/audit-report-2026-05-11.md](../../../../sources/AxDSan__mnemosyne/docs/audit-report-2026-05-11.md) |
| config | 7 | [pyproject.toml](../../../../sources/AxDSan__mnemosyne/pyproject.toml)<br>[requirements-benchmark.txt](../../../../sources/AxDSan__mnemosyne/requirements-benchmark.txt)<br>[uv.lock](../../../../sources/AxDSan__mnemosyne/uv.lock)<br>[integrations/vscode-mnemosyne/package.json](../../../../sources/AxDSan__mnemosyne/integrations/vscode-mnemosyne/package.json)<br>[integrations/vscode-mnemosyne/tsconfig.json](../../../../sources/AxDSan__mnemosyne/integrations/vscode-mnemosyne/tsconfig.json)<br>[integrations/obsidian-mnemosyne/package.json](../../../../sources/AxDSan__mnemosyne/integrations/obsidian-mnemosyne/package.json)<br>[integrations/hermes/pyproject.toml](../../../../sources/AxDSan__mnemosyne/integrations/hermes/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 136 | [requirements-benchmark.txt](../../../../sources/AxDSan__mnemosyne/requirements-benchmark.txt)<br>[run_beam_bench.sh](../../../../sources/AxDSan__mnemosyne/run_beam_bench.sh)<br>[tools/beam_phase3_test.py](../../../../sources/AxDSan__mnemosyne/tools/beam_phase3_test.py)<br>[tools/bench_100k_fast.py](../../../../sources/AxDSan__mnemosyne/tools/bench_100k_fast.py)<br>[tools/bench_100k_gemma.py](../../../../sources/AxDSan__mnemosyne/tools/bench_100k_gemma.py)<br>[tools/bench_audit_log.py](../../../../sources/AxDSan__mnemosyne/tools/bench_audit_log.py) |
| CI workflows | 2 | [.github/workflows/ci.yml](../../../../sources/AxDSan__mnemosyne/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/AxDSan__mnemosyne/.github/workflows/release.yml) |
| Containers / deploy | 6 | [docker-compose.yml](../../../../sources/AxDSan__mnemosyne/docker-compose.yml)<br>[Dockerfile](../../../../sources/AxDSan__mnemosyne/Dockerfile)<br>[deploy/sync/Caddyfile](../../../../sources/AxDSan__mnemosyne/deploy/sync/Caddyfile)<br>[deploy/sync/docker-compose.yml](../../../../sources/AxDSan__mnemosyne/deploy/sync/docker-compose.yml)<br>[deploy/sync/fly.toml](../../../../sources/AxDSan__mnemosyne/deploy/sync/fly.toml)<br>[deploy/sync/README.md](../../../../sources/AxDSan__mnemosyne/deploy/sync/README.md) |
| Security / policy | 13 | [SECURITY.md](../../../../sources/AxDSan__mnemosyne/SECURITY.md)<br>[tools/bench_audit_log.py](../../../../sources/AxDSan__mnemosyne/tools/bench_audit_log.py)<br>[tests/test_hermes_memory_provider_audit.py](../../../../sources/AxDSan__mnemosyne/tests/test_hermes_memory_provider_audit.py)<br>[tests/test_s1_mcp_sse_auth.py](../../../../sources/AxDSan__mnemosyne/tests/test_s1_mcp_sse_auth.py)<br>[tests/test_vec_dim_guard.py](../../../../sources/AxDSan__mnemosyne/tests/test_vec_dim_guard.py)<br>[scripts/memoria_audit.py](../../../../sources/AxDSan__mnemosyne/scripts/memoria_audit.py) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/test_mcp_server.py`, `tests/test_s1_mcp_sse_auth.py`, `mnemosyne/mcp_server.py`.
2. Trace execution through entrypoints: `integrations/obsidian-mnemosyne/main.ts`.
3. Map agent/tool runtime through: `tools/beam_phase3_test.py`, `tools/bench_100k_fast.py`, `tools/bench_100k_gemma.py`.
4. Inspect retrieval/memory/indexing through: `tests/benchmark_beam_working_memory.py`, `tests/test_degrade_vector.py`, `tests/test_e5a_vector_voice_dense_rewire.py`.
5. Verify behavior through test/eval files: `requirements-benchmark.txt`, `run_beam_bench.sh`, `tools/beam_phase3_test.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 The Zero Dependency, Sub Millisecond AI Memory System for Hermes Agents and Everyone Else!. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, docker-compose.yml, README.md, LICENSE이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
