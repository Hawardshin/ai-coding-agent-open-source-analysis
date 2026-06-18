# iikarus/Dragon-Brain Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Dragon Brain — persistent long-term memory for AI agents via MCP (Model Context Protocol). Knowledge graph (FalkorDB) + vector search (Qdrant) + CUDA GPU embeddings. Works with Claude, Gemini CLI, Cursor, Windsurf, VS Code Copilot. 30 tools, 1121 tests.

## 요약

- 조사 단위: `sources/iikarus__Dragon-Brain` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 352 files, 33 directories, depth score 127, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp_config.example.json, mcp_config.json, scripts/mcp_smoke_test.py이고, 의존성 단서는 claude, mcp, fastapi, pydantic, transformers, qdrant, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | iikarus/Dragon-Brain |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | 48 |
| Forks | 7 |
| License | MIT |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/iikarus__Dragon-Brain](../../../../sources/iikarus__Dragon-Brain) |
| Existing report | [reports/llm-wiki/repositories/iikarus__Dragon-Brain.md](../../../llm-wiki/repositories/iikarus__Dragon-Brain.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 352 / 33 |
| Max observed depth | 3 |
| Top directories | .github, benchmarks, demos, docs, process, scripts, src, tests |
| Top extensions | .py: 229, .md: 93, .ps1: 7, (none): 5, .txt: 4, .json: 3, .toml: 3, .bat: 2, .yml: 2, .ini: 1, .lock: 1, .png: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 57 |
| docs | documentation surface | 44 |
| src | source boundary | 30 |
| .github | ci surface | 1 |
| benchmarks | validation surface | 1 |
| demos | top-level component | 1 |
| process | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | dragon-brain | dragon-brain |
| utility | pyproject.toml | claude-memory | claude-memory |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | claude |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | qdrant |
| modelRuntime | transformers |
| webRuntime | fastapi |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [mcp_config.example.json](../../../../sources/iikarus__Dragon-Brain/mcp_config.example.json) | mcp signal |
| mcp | [mcp_config.json](../../../../sources/iikarus__Dragon-Brain/mcp_config.json) | mcp signal |
| mcp | [scripts/mcp_smoke_test.py](../../../../sources/iikarus__Dragon-Brain/scripts/mcp_smoke_test.py) | mcp signal |
| mcp | [scripts/run_mcp_server.ps1](../../../../sources/iikarus__Dragon-Brain/scripts/run_mcp_server.ps1) | mcp signal |
| agentRuntime | [src/claude_memory/context_manager.py](../../../../sources/iikarus__Dragon-Brain/src/claude_memory/context_manager.py) | agentRuntime signal |
| agentRuntime | [src/claude_memory/tools_extra.py](../../../../sources/iikarus__Dragon-Brain/src/claude_memory/tools_extra.py) | agentRuntime signal |
| agentRuntime | [src/claude_memory/tools.py](../../../../sources/iikarus__Dragon-Brain/src/claude_memory/tools.py) | agentRuntime signal |
| agentRuntime | [scripts/hooks/branch_write_guard.py](../../../../sources/iikarus__Dragon-Brain/scripts/hooks/branch_write_guard.py) | agentRuntime signal |
| entrypoints | [src/claude_memory/server.py](../../../../sources/iikarus__Dragon-Brain/src/claude_memory/server.py) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/iikarus__Dragon-Brain/CLAUDE.md) | instruction signal |
| config | [pyproject.toml](../../../../sources/iikarus__Dragon-Brain/pyproject.toml) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/iikarus__Dragon-Brain/.github/workflows/ci.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [src/claude_memory/server.py](../../../../sources/iikarus__Dragon-Brain/src/claude_memory/server.py) |
| agentRuntime | 6 | [src/claude_memory/context_manager.py](../../../../sources/iikarus__Dragon-Brain/src/claude_memory/context_manager.py)<br>[src/claude_memory/tools_extra.py](../../../../sources/iikarus__Dragon-Brain/src/claude_memory/tools_extra.py)<br>[src/claude_memory/tools.py](../../../../sources/iikarus__Dragon-Brain/src/claude_memory/tools.py)<br>[scripts/hooks/branch_write_guard.py](../../../../sources/iikarus__Dragon-Brain/scripts/hooks/branch_write_guard.py)<br>[scripts/hooks/inject_handoff_hash.py](../../../../sources/iikarus__Dragon-Brain/scripts/hooks/inject_handoff_hash.py)<br>[benchmarks/longmemeval/runner.py](../../../../sources/iikarus__Dragon-Brain/benchmarks/longmemeval/runner.py) |
| mcp | 7 | [mcp_config.example.json](../../../../sources/iikarus__Dragon-Brain/mcp_config.example.json)<br>[mcp_config.json](../../../../sources/iikarus__Dragon-Brain/mcp_config.json)<br>[scripts/mcp_smoke_test.py](../../../../sources/iikarus__Dragon-Brain/scripts/mcp_smoke_test.py)<br>[scripts/run_mcp_server.ps1](../../../../sources/iikarus__Dragon-Brain/scripts/run_mcp_server.ps1)<br>[scripts/verify_mcp_server.py](../../../../sources/iikarus__Dragon-Brain/scripts/verify_mcp_server.py)<br>[scripts/internal/verify_mcp_server.py](../../../../sources/iikarus__Dragon-Brain/scripts/internal/verify_mcp_server.py)<br>[docs/MCP_TOOL_REFERENCE.md](../../../../sources/iikarus__Dragon-Brain/docs/MCP_TOOL_REFERENCE.md) |
| retrieval | 66 | [tests/unit/test_analyze_graph.py](../../../../sources/iikarus__Dragon-Brain/tests/unit/test_analyze_graph.py)<br>[tests/unit/test_archive_vector_cleanup.py](../../../../sources/iikarus__Dragon-Brain/tests/unit/test_archive_vector_cleanup.py)<br>[tests/unit/test_diff_knowledge_state.py](../../../../sources/iikarus__Dragon-Brain/tests/unit/test_diff_knowledge_state.py)<br>[tests/unit/test_embedding_client.py](../../../../sources/iikarus__Dragon-Brain/tests/unit/test_embedding_client.py)<br>[tests/unit/test_embedding_coverage.py](../../../../sources/iikarus__Dragon-Brain/tests/unit/test_embedding_coverage.py)<br>[tests/unit/test_embedding_filter.py](../../../../sources/iikarus__Dragon-Brain/tests/unit/test_embedding_filter.py)<br>[tests/unit/test_embedding_retry.py](../../../../sources/iikarus__Dragon-Brain/tests/unit/test_embedding_retry.py)<br>[tests/unit/test_embedding_server.py](../../../../sources/iikarus__Dragon-Brain/tests/unit/test_embedding_server.py) |
| spec | 33 | [requirements.lock](../../../../sources/iikarus__Dragon-Brain/requirements.lock)<br>[tests/integration/test_spec_pr5.py](../../../../sources/iikarus__Dragon-Brain/tests/integration/test_spec_pr5.py)<br>[process/REMEDIATION_AUDIT_SPEC.md](../../../../sources/iikarus__Dragon-Brain/process/REMEDIATION_AUDIT_SPEC.md)<br>[process/REMEDIATION_BUILD_SPEC.md](../../../../sources/iikarus__Dragon-Brain/process/REMEDIATION_BUILD_SPEC.md)<br>[process/issues/14_AUDIT_SPEC.md](../../../../sources/iikarus__Dragon-Brain/process/issues/14_AUDIT_SPEC.md)<br>[process/issues/14_BUILD_SPEC.md](../../../../sources/iikarus__Dragon-Brain/process/issues/14_BUILD_SPEC.md)<br>[process/issues/14a_AUDIT_SPEC.md](../../../../sources/iikarus__Dragon-Brain/process/issues/14a_AUDIT_SPEC.md)<br>[process/issues/14a_BUILD_SPEC.md](../../../../sources/iikarus__Dragon-Brain/process/issues/14a_BUILD_SPEC.md) |
| eval | 144 | [tests/__init__.py](../../../../sources/iikarus__Dragon-Brain/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/iikarus__Dragon-Brain/tests/conftest.py)<br>[tests/e2e_functional.py](../../../../sources/iikarus__Dragon-Brain/tests/e2e_functional.py)<br>[tests/test_schema.py](../../../../sources/iikarus__Dragon-Brain/tests/test_schema.py)<br>[tests/unit/conftest.py](../../../../sources/iikarus__Dragon-Brain/tests/unit/conftest.py)<br>[tests/unit/test_ablation.py](../../../../sources/iikarus__Dragon-Brain/tests/unit/test_ablation.py)<br>[tests/unit/test_activation_radar.py](../../../../sources/iikarus__Dragon-Brain/tests/unit/test_activation_radar.py)<br>[tests/unit/test_activation.py](../../../../sources/iikarus__Dragon-Brain/tests/unit/test_activation.py) |
| security | 13 | [audit_hammer.txt](../../../../sources/iikarus__Dragon-Brain/audit_hammer.txt)<br>[audit_polish.txt](../../../../sources/iikarus__Dragon-Brain/audit_polish.txt)<br>[audit_pulse.txt](../../../../sources/iikarus__Dragon-Brain/audit_pulse.txt)<br>[scripts/hooks/branch_write_guard.py](../../../../sources/iikarus__Dragon-Brain/scripts/hooks/branch_write_guard.py)<br>[process/REMEDIATION_AUDIT_SPEC.md](../../../../sources/iikarus__Dragon-Brain/process/REMEDIATION_AUDIT_SPEC.md)<br>[process/issues/14_AUDIT_SPEC.md](../../../../sources/iikarus__Dragon-Brain/process/issues/14_AUDIT_SPEC.md)<br>[process/issues/14a_AUDIT_SPEC.md](../../../../sources/iikarus__Dragon-Brain/process/issues/14a_AUDIT_SPEC.md)<br>[process/issues/14b_AUDIT_SPEC.md](../../../../sources/iikarus__Dragon-Brain/process/issues/14b_AUDIT_SPEC.md) |
| ci | 1 | [.github/workflows/ci.yml](../../../../sources/iikarus__Dragon-Brain/.github/workflows/ci.yml) |
| container | 2 | [docker-compose.yml](../../../../sources/iikarus__Dragon-Brain/docker-compose.yml)<br>[Dockerfile](../../../../sources/iikarus__Dragon-Brain/Dockerfile) |
| instruction | 1 | [CLAUDE.md](../../../../sources/iikarus__Dragon-Brain/CLAUDE.md) |
| docs | 60 | [README.de.md](../../../../sources/iikarus__Dragon-Brain/README.de.md)<br>[README.es.md](../../../../sources/iikarus__Dragon-Brain/README.es.md)<br>[README.fr.md](../../../../sources/iikarus__Dragon-Brain/README.fr.md)<br>[README.ja.md](../../../../sources/iikarus__Dragon-Brain/README.ja.md)<br>[README.ko.md](../../../../sources/iikarus__Dragon-Brain/README.ko.md)<br>[README.md](../../../../sources/iikarus__Dragon-Brain/README.md)<br>[README.pt-BR.md](../../../../sources/iikarus__Dragon-Brain/README.pt-BR.md)<br>[README.ru.md](../../../../sources/iikarus__Dragon-Brain/README.ru.md) |
| config | 1 | [pyproject.toml](../../../../sources/iikarus__Dragon-Brain/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 144 | [tests/__init__.py](../../../../sources/iikarus__Dragon-Brain/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/iikarus__Dragon-Brain/tests/conftest.py)<br>[tests/e2e_functional.py](../../../../sources/iikarus__Dragon-Brain/tests/e2e_functional.py)<br>[tests/test_schema.py](../../../../sources/iikarus__Dragon-Brain/tests/test_schema.py)<br>[tests/unit/conftest.py](../../../../sources/iikarus__Dragon-Brain/tests/unit/conftest.py)<br>[tests/unit/test_ablation.py](../../../../sources/iikarus__Dragon-Brain/tests/unit/test_ablation.py) |
| CI workflows | 1 | [.github/workflows/ci.yml](../../../../sources/iikarus__Dragon-Brain/.github/workflows/ci.yml) |
| Containers / deploy | 2 | [docker-compose.yml](../../../../sources/iikarus__Dragon-Brain/docker-compose.yml)<br>[Dockerfile](../../../../sources/iikarus__Dragon-Brain/Dockerfile) |
| Security / policy | 13 | [audit_hammer.txt](../../../../sources/iikarus__Dragon-Brain/audit_hammer.txt)<br>[audit_polish.txt](../../../../sources/iikarus__Dragon-Brain/audit_polish.txt)<br>[audit_pulse.txt](../../../../sources/iikarus__Dragon-Brain/audit_pulse.txt)<br>[scripts/hooks/branch_write_guard.py](../../../../sources/iikarus__Dragon-Brain/scripts/hooks/branch_write_guard.py)<br>[process/REMEDIATION_AUDIT_SPEC.md](../../../../sources/iikarus__Dragon-Brain/process/REMEDIATION_AUDIT_SPEC.md)<br>[process/issues/14_AUDIT_SPEC.md](../../../../sources/iikarus__Dragon-Brain/process/issues/14_AUDIT_SPEC.md) |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/iikarus__Dragon-Brain/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `mcp_config.example.json`, `mcp_config.json`, `scripts/mcp_smoke_test.py`.
2. Trace execution through entrypoints: `src/claude_memory/server.py`.
3. Map agent/tool runtime through: `src/claude_memory/context_manager.py`, `src/claude_memory/tools_extra.py`, `src/claude_memory/tools.py`.
4. Inspect retrieval/memory/indexing through: `tests/unit/test_analyze_graph.py`, `tests/unit/test_archive_vector_cleanup.py`, `tests/unit/test_diff_knowledge_state.py`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/conftest.py`, `tests/e2e_functional.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Dragon Brain — persistent long term memory for AI agents via MCP Model Context Protocol . Knowledge graph FalkorDB + vec. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, docker-compose.yml, README.md, CLAUDE.md이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 needs deeper structural scan입니다.
