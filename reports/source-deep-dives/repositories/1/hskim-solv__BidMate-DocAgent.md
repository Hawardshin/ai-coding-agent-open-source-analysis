# hskim-solv/BidMate-DocAgent Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Agentic RAG for Korean RFP intelligence — extractive grounded-answer pipeline with metadata-first retrieval, comparison-aware balanced top-k, and bootstrap-CI eval rigor (ADR-driven).

## 요약

- 조사 단위: `sources/hskim-solv__BidMate-DocAgent` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,155 files, 107 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/test_agent_loop_mcp.py, scripts/agent_loop_mcp.py이고, 의존성 단서는 claude, fastapi, torch, transformers, chroma, qdrant, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | hskim-solv/BidMate-DocAgent |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/hskim-solv__BidMate-DocAgent](../../../../sources/hskim-solv__BidMate-DocAgent) |
| Existing report | [reports/korea-trending/repositories/hskim-solv__BidMate-DocAgent.md](../../../korea-trending/repositories/hskim-solv__BidMate-DocAgent.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1155 / 107 |
| Max observed depth | 5 |
| Top directories | .claude, .githooks, .github, agent-evals, api, benchmarks, configs, data, demo, docs, eval, harness, notebooks, outputs, reports, schemas, scripts, tasks, tests |
| Top extensions | .py: 599, .md: 340, .json: 88, .sh: 23, .yaml: 22, .png: 14, .svg: 14, .yml: 13, (none): 12, .jsonl: 9, .txt: 8, .npy: 3 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 77 |
| docs | documentation surface | 73 |
| api | source boundary | 2 |
| .github | ci surface | 1 |
| agent-evals | top-level component | 1 |
| benchmarks | validation surface | 1 |
| configs | top-level component | 1 |
| data | top-level component | 1 |
| demo | top-level component | 1 |
| eval | top-level component | 1 |
| harness | top-level component | 1 |
| notebooks | top-level component | 1 |
| outputs | top-level component | 1 |
| reports | top-level component | 1 |
| schemas | top-level component | 1 |
| scripts | top-level component | 1 |
| tasks | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | package.json | ui-smoke | node scripts/ui_smoke.mjs |
| test | package.json | test | echo "Error: no test specified" && exit 1 |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | setup | make setup |
| utility | Makefile | install-hooks | make install-hooks |
| quality | Makefile | check-branch | make check-branch |
| quality | Makefile | governance-check | make governance-check |
| quality | Makefile | check-baseline-provenance | make check-baseline-provenance |
| quality | Makefile | check-doc-links | make check-doc-links |
| utility | Makefile | index | make index |
| build | Makefile | build-kordoc-manifest | make build-kordoc-manifest |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | claude |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | chroma, qdrant |
| modelRuntime | torch, transformers |
| webRuntime | fastapi |
| developerSurface | none |
| observability | none |
| browserAutomation | playwright |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [tests/test_agent_loop_mcp.py](../../../../sources/hskim-solv__BidMate-DocAgent/tests/test_agent_loop_mcp.py) | mcp signal |
| mcp | [scripts/agent_loop_mcp.py](../../../../sources/hskim-solv__BidMate-DocAgent/scripts/agent_loop_mcp.py) | mcp signal |
| agentRuntime | [scripts/agent_evals_report.py](../../../../sources/hskim-solv__BidMate-DocAgent/scripts/agent_evals_report.py) | agentRuntime signal |
| agentRuntime | [scripts/agent_evals_run.py](../../../../sources/hskim-solv__BidMate-DocAgent/scripts/agent_evals_run.py) | agentRuntime signal |
| agentRuntime | [scripts/agent_loop_claude_turn.py](../../../../sources/hskim-solv__BidMate-DocAgent/scripts/agent_loop_claude_turn.py) | agentRuntime signal |
| agentRuntime | [scripts/agent_loop_codex_turn.py](../../../../sources/hskim-solv__BidMate-DocAgent/scripts/agent_loop_codex_turn.py) | agentRuntime signal |
| entrypoints | [api/main.py](../../../../sources/hskim-solv__BidMate-DocAgent/api/main.py) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/hskim-solv__BidMate-DocAgent/CLAUDE.md) | instruction signal |
| config | [Makefile](../../../../sources/hskim-solv__BidMate-DocAgent/Makefile) | config signal |
| config | [package.json](../../../../sources/hskim-solv__BidMate-DocAgent/package.json) | config signal |
| config | [pyproject.toml](../../../../sources/hskim-solv__BidMate-DocAgent/pyproject.toml) | config signal |
| config | [requirements-bm25s.txt](../../../../sources/hskim-solv__BidMate-DocAgent/requirements-bm25s.txt) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [api/main.py](../../../../sources/hskim-solv__BidMate-DocAgent/api/main.py) |
| agentRuntime | 52 | [scripts/agent_evals_report.py](../../../../sources/hskim-solv__BidMate-DocAgent/scripts/agent_evals_report.py)<br>[scripts/agent_evals_run.py](../../../../sources/hskim-solv__BidMate-DocAgent/scripts/agent_evals_run.py)<br>[scripts/agent_loop_claude_turn.py](../../../../sources/hskim-solv__BidMate-DocAgent/scripts/agent_loop_claude_turn.py)<br>[scripts/agent_loop_codex_turn.py](../../../../sources/hskim-solv__BidMate-DocAgent/scripts/agent_loop_codex_turn.py)<br>[scripts/agent_loop_mcp.py](../../../../sources/hskim-solv__BidMate-DocAgent/scripts/agent_loop_mcp.py)<br>[scripts/agent_loop_quota.example.json](../../../../sources/hskim-solv__BidMate-DocAgent/scripts/agent_loop_quota.example.json)<br>[scripts/agent_loop_quota.py](../../../../sources/hskim-solv__BidMate-DocAgent/scripts/agent_loop_quota.py)<br>[scripts/agent_loop.py](../../../../sources/hskim-solv__BidMate-DocAgent/scripts/agent_loop.py) |
| mcp | 2 | [tests/test_agent_loop_mcp.py](../../../../sources/hskim-solv__BidMate-DocAgent/tests/test_agent_loop_mcp.py)<br>[scripts/agent_loop_mcp.py](../../../../sources/hskim-solv__BidMate-DocAgent/scripts/agent_loop_mcp.py) |
| retrieval | 204 | [rag_agent_tools.py](../../../../sources/hskim-solv__BidMate-DocAgent/rag_agent_tools.py)<br>[rag_answer_schema.py](../../../../sources/hskim-solv__BidMate-DocAgent/rag_answer_schema.py)<br>[rag_answer.py](../../../../sources/hskim-solv__BidMate-DocAgent/rag_answer.py)<br>[rag_clarification.py](../../../../sources/hskim-solv__BidMate-DocAgent/rag_clarification.py)<br>[rag_conversation_state.py](../../../../sources/hskim-solv__BidMate-DocAgent/rag_conversation_state.py)<br>[rag_core.py](../../../../sources/hskim-solv__BidMate-DocAgent/rag_core.py)<br>[rag_embedding.py](../../../../sources/hskim-solv__BidMate-DocAgent/rag_embedding.py)<br>[rag_graph_agentic_full.py](../../../../sources/hskim-solv__BidMate-DocAgent/rag_graph_agentic_full.py) |
| spec | 140 | [requirements-bm25s.txt](../../../../sources/hskim-solv__BidMate-DocAgent/requirements-bm25s.txt)<br>[requirements-dev.txt](../../../../sources/hskim-solv__BidMate-DocAgent/requirements-dev.txt)<br>[requirements-graph.txt](../../../../sources/hskim-solv__BidMate-DocAgent/requirements-graph.txt)<br>[requirements-lora.txt](../../../../sources/hskim-solv__BidMate-DocAgent/requirements-lora.txt)<br>[requirements-m3.txt](../../../../sources/hskim-solv__BidMate-DocAgent/requirements-m3.txt)<br>[requirements-observability.txt](../../../../sources/hskim-solv__BidMate-DocAgent/requirements-observability.txt)<br>[requirements-pymupdf4llm.txt](../../../../sources/hskim-solv__BidMate-DocAgent/requirements-pymupdf4llm.txt)<br>[requirements.txt](../../../../sources/hskim-solv__BidMate-DocAgent/requirements.txt) |
| eval | 589 | [rag_observability.py](../../../../sources/hskim-solv__BidMate-DocAgent/rag_observability.py)<br>[rag_tracing.py](../../../../sources/hskim-solv__BidMate-DocAgent/rag_tracing.py)<br>[requirements-observability.txt](../../../../sources/hskim-solv__BidMate-DocAgent/requirements-observability.txt)<br>[tests/_chroma_safe_clone.py](../../../../sources/hskim-solv__BidMate-DocAgent/tests/_chroma_safe_clone.py)<br>[tests/conftest.py](../../../../sources/hskim-solv__BidMate-DocAgent/tests/conftest.py)<br>[tests/test__ship_env.py](../../../../sources/hskim-solv__BidMate-DocAgent/tests/test__ship_env.py)<br>[tests/test__ship_private_preserve.py](../../../../sources/hskim-solv__BidMate-DocAgent/tests/test__ship_private_preserve.py)<br>[tests/test__ship_run.py](../../../../sources/hskim-solv__BidMate-DocAgent/tests/test__ship_run.py) |
| security | 45 | [bidmate_security.py](../../../../sources/hskim-solv__BidMate-DocAgent/bidmate_security.py)<br>[tests/test_api_security_screen.py](../../../../sources/hskim-solv__BidMate-DocAgent/tests/test_api_security_screen.py)<br>[tests/test_audit_private_data_readiness.py](../../../../sources/hskim-solv__BidMate-DocAgent/tests/test_audit_private_data_readiness.py)<br>[tests/test_audit_real100_v2_gold_labels.py](../../../../sources/hskim-solv__BidMate-DocAgent/tests/test_audit_real100_v2_gold_labels.py)<br>[tests/test_bash_guard_adversarial.py](../../../../sources/hskim-solv__BidMate-DocAgent/tests/test_bash_guard_adversarial.py)<br>[tests/test_hook_pretooluse_bash_guard.py](../../../../sources/hskim-solv__BidMate-DocAgent/tests/test_hook_pretooluse_bash_guard.py)<br>[tests/test_memory_backend_default_guard_regression.py](../../../../sources/hskim-solv__BidMate-DocAgent/tests/test_memory_backend_default_guard_regression.py)<br>[tests/test_page_metadata_recovery_audit.py](../../../../sources/hskim-solv__BidMate-DocAgent/tests/test_page_metadata_recovery_audit.py) |
| ci | 9 | [.github/workflows/agent-loop-artifacts.yml](../../../../sources/hskim-solv__BidMate-DocAgent/.github/workflows/agent-loop-artifacts.yml)<br>[.github/workflows/branch-and-issue-check.yml](../../../../sources/hskim-solv__BidMate-DocAgent/.github/workflows/branch-and-issue-check.yml)<br>[.github/workflows/deploy-fly.yml](../../../../sources/hskim-solv__BidMate-DocAgent/.github/workflows/deploy-fly.yml)<br>[.github/workflows/docker-publish.yml](../../../../sources/hskim-solv__BidMate-DocAgent/.github/workflows/docker-publish.yml)<br>[.github/workflows/pages.yml](../../../../sources/hskim-solv__BidMate-DocAgent/.github/workflows/pages.yml)<br>[.github/workflows/pr-eval.yml](../../../../sources/hskim-solv__BidMate-DocAgent/.github/workflows/pr-eval.yml)<br>[.github/workflows/slow-tests.yml](../../../../sources/hskim-solv__BidMate-DocAgent/.github/workflows/slow-tests.yml)<br>[.github/workflows/staging-self-ship-guard.yml](../../../../sources/hskim-solv__BidMate-DocAgent/.github/workflows/staging-self-ship-guard.yml) |
| container | 2 | [docker-compose.qdrant.yml](../../../../sources/hskim-solv__BidMate-DocAgent/docker-compose.qdrant.yml)<br>[Dockerfile](../../../../sources/hskim-solv__BidMate-DocAgent/Dockerfile) |
| instruction | 1 | [CLAUDE.md](../../../../sources/hskim-solv__BidMate-DocAgent/CLAUDE.md) |
| docs | 299 | [README.md](../../../../sources/hskim-solv__BidMate-DocAgent/README.md)<br>[tasks/README.md](../../../../sources/hskim-solv__BidMate-DocAgent/tasks/README.md)<br>[scripts/claude-hooks/README.md](../../../../sources/hskim-solv__BidMate-DocAgent/scripts/claude-hooks/README.md)<br>[reports/real100_v2/README.md](../../../../sources/hskim-solv__BidMate-DocAgent/reports/real100_v2/README.md)<br>[eval/korean_public/README.md](../../../../sources/hskim-solv__BidMate-DocAgent/eval/korean_public/README.md)<br>[docs/_config.yml](../../../../sources/hskim-solv__BidMate-DocAgent/docs/_config.yml)<br>[docs/agent-utilization.md](../../../../sources/hskim-solv__BidMate-DocAgent/docs/agent-utilization.md)<br>[docs/architecture-deep-dive.md](../../../../sources/hskim-solv__BidMate-DocAgent/docs/architecture-deep-dive.md) |
| config | 11 | [Makefile](../../../../sources/hskim-solv__BidMate-DocAgent/Makefile)<br>[package.json](../../../../sources/hskim-solv__BidMate-DocAgent/package.json)<br>[pyproject.toml](../../../../sources/hskim-solv__BidMate-DocAgent/pyproject.toml)<br>[requirements-bm25s.txt](../../../../sources/hskim-solv__BidMate-DocAgent/requirements-bm25s.txt)<br>[requirements-dev.txt](../../../../sources/hskim-solv__BidMate-DocAgent/requirements-dev.txt)<br>[requirements-graph.txt](../../../../sources/hskim-solv__BidMate-DocAgent/requirements-graph.txt)<br>[requirements-lora.txt](../../../../sources/hskim-solv__BidMate-DocAgent/requirements-lora.txt)<br>[requirements-m3.txt](../../../../sources/hskim-solv__BidMate-DocAgent/requirements-m3.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 589 | [rag_observability.py](../../../../sources/hskim-solv__BidMate-DocAgent/rag_observability.py)<br>[rag_tracing.py](../../../../sources/hskim-solv__BidMate-DocAgent/rag_tracing.py)<br>[requirements-observability.txt](../../../../sources/hskim-solv__BidMate-DocAgent/requirements-observability.txt)<br>[tests/_chroma_safe_clone.py](../../../../sources/hskim-solv__BidMate-DocAgent/tests/_chroma_safe_clone.py)<br>[tests/conftest.py](../../../../sources/hskim-solv__BidMate-DocAgent/tests/conftest.py)<br>[tests/test__ship_env.py](../../../../sources/hskim-solv__BidMate-DocAgent/tests/test__ship_env.py) |
| CI workflows | 9 | [.github/workflows/agent-loop-artifacts.yml](../../../../sources/hskim-solv__BidMate-DocAgent/.github/workflows/agent-loop-artifacts.yml)<br>[.github/workflows/branch-and-issue-check.yml](../../../../sources/hskim-solv__BidMate-DocAgent/.github/workflows/branch-and-issue-check.yml)<br>[.github/workflows/deploy-fly.yml](../../../../sources/hskim-solv__BidMate-DocAgent/.github/workflows/deploy-fly.yml)<br>[.github/workflows/docker-publish.yml](../../../../sources/hskim-solv__BidMate-DocAgent/.github/workflows/docker-publish.yml)<br>[.github/workflows/pages.yml](../../../../sources/hskim-solv__BidMate-DocAgent/.github/workflows/pages.yml)<br>[.github/workflows/pr-eval.yml](../../../../sources/hskim-solv__BidMate-DocAgent/.github/workflows/pr-eval.yml) |
| Containers / deploy | 2 | [docker-compose.qdrant.yml](../../../../sources/hskim-solv__BidMate-DocAgent/docker-compose.qdrant.yml)<br>[Dockerfile](../../../../sources/hskim-solv__BidMate-DocAgent/Dockerfile) |
| Security / policy | 45 | [bidmate_security.py](../../../../sources/hskim-solv__BidMate-DocAgent/bidmate_security.py)<br>[tests/test_api_security_screen.py](../../../../sources/hskim-solv__BidMate-DocAgent/tests/test_api_security_screen.py)<br>[tests/test_audit_private_data_readiness.py](../../../../sources/hskim-solv__BidMate-DocAgent/tests/test_audit_private_data_readiness.py)<br>[tests/test_audit_real100_v2_gold_labels.py](../../../../sources/hskim-solv__BidMate-DocAgent/tests/test_audit_real100_v2_gold_labels.py)<br>[tests/test_bash_guard_adversarial.py](../../../../sources/hskim-solv__BidMate-DocAgent/tests/test_bash_guard_adversarial.py)<br>[tests/test_hook_pretooluse_bash_guard.py](../../../../sources/hskim-solv__BidMate-DocAgent/tests/test_hook_pretooluse_bash_guard.py) |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/hskim-solv__BidMate-DocAgent/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/test_agent_loop_mcp.py`, `scripts/agent_loop_mcp.py`, `scripts/agent_evals_report.py`.
2. Trace execution through entrypoints: `api/main.py`.
3. Map agent/tool runtime through: `scripts/agent_evals_report.py`, `scripts/agent_evals_run.py`, `scripts/agent_loop_claude_turn.py`.
4. Inspect retrieval/memory/indexing through: `rag_agent_tools.py`, `rag_answer_schema.py`, `rag_answer.py`.
5. Verify behavior through test/eval files: `rag_observability.py`, `rag_tracing.py`, `requirements-observability.txt`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Agentic RAG for Korean RFP intelligence — extractive grounded answer pipeline with metadata first retrieval, comparison . 핵심 구조 신호는 Python, package.json, pyproject.toml, requirements.txt, Dockerfile, Makefile이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
