# MarcoPorcellato/matryca-plumber Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local-first AI daemon for Logseq OG: background semantic indexing, link hygiene, and agent-ready CLI/MCP — edits Markdown on disk (no cloud, no Logseq API). Karpathy LLM-Wiki inspired.

## 요약

- 조사 단위: `sources/MarcoPorcellato__matryca-plumber` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 370 files, 36 directories, depth score 121, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/test_hermes_mcp_handshake.py, tests/test_mcp_server.py, tests/test_mcp_telemetry.py이고, 의존성 단서는 openai, mcp, fastapi, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | MarcoPorcellato/matryca-plumber |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | 64 |
| Forks | 4 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/MarcoPorcellato__matryca-plumber](../../../../sources/MarcoPorcellato__matryca-plumber) |
| Existing report | [reports/global-trending/repositories/MarcoPorcellato__matryca-plumber.md](../../../global-trending/repositories/MarcoPorcellato__matryca-plumber.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 370 / 36 |
| Max observed depth | 4 |
| Top directories | .cursor, .github, .well-known, docs, frontend, images, scripts, src, tests |
| Top extensions | .py: 228, .md: 58, .tsx: 13, .ts: 12, .yml: 12, .mdc: 10, (none): 8, .json: 7, .svg: 4, .js: 3, .png: 3, .sh: 2 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 79 |
| tests | validation surface | 63 |
| docs | documentation surface | 48 |
| .github | ci surface | 1 |
| frontend | top-level component | 1 |
| images | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| utility | Makefile | install | make install |
| quality | Makefile | format | make format |
| quality | Makefile | lint | make lint |
| quality | Makefile | typecheck | make typecheck |
| quality | Makefile | sandbox-read-check | make sandbox-read-check |
| test | Makefile | test | make test |
| test | Makefile | test-fast | make test-fast |
| test | Makefile | test-fast-parallel | make test-fast-parallel |
| test | Makefile | test-resilience | make test-resilience |
| utility | Makefile | perf | make perf |
| quality | Makefile | format-check | make format-check |
| quality | Makefile | check | make check |
| utility | Makefile | ci | make ci |
| utility | Makefile | clean | make clean |
| utility | pyproject.toml | matryca-plumber | matryca-plumber |
| utility | pyproject.toml | matryca-logseq-llm-wiki | matryca-logseq-llm-wiki |
| utility | pyproject.toml | matryca | matryca |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | fastapi |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [tests/test_hermes_mcp_handshake.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_hermes_mcp_handshake.py) | mcp signal |
| mcp | [tests/test_mcp_server.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_mcp_server.py) | mcp signal |
| mcp | [tests/test_mcp_telemetry.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_mcp_telemetry.py) | mcp signal |
| mcp | [src/agent/mcp_server.py](../../../../sources/MarcoPorcellato__matryca-plumber/src/agent/mcp_server.py) | mcp signal |
| agentRuntime | [src/utils/agent_debug_log.py](../../../../sources/MarcoPorcellato__matryca-plumber/src/utils/agent_debug_log.py) | agentRuntime signal |
| agentRuntime | [src/agent/__init__.py](../../../../sources/MarcoPorcellato__matryca-plumber/src/agent/__init__.py) | agentRuntime signal |
| agentRuntime | [src/agent/alias_state.py](../../../../sources/MarcoPorcellato__matryca-plumber/src/agent/alias_state.py) | agentRuntime signal |
| agentRuntime | [src/agent/context_compressor.py](../../../../sources/MarcoPorcellato__matryca-plumber/src/agent/context_compressor.py) | agentRuntime signal |
| entrypoints | [src/main.py](../../../../sources/MarcoPorcellato__matryca-plumber/src/main.py) | entrypoints signal |
| entrypoints | [src/cli/__main__.py](../../../../sources/MarcoPorcellato__matryca-plumber/src/cli/__main__.py) | entrypoints signal |
| entrypoints | [frontend/src/App.tsx](../../../../sources/MarcoPorcellato__matryca-plumber/frontend/src/App.tsx) | entrypoints signal |
| entrypoints | [frontend/src/index.css](../../../../sources/MarcoPorcellato__matryca-plumber/frontend/src/index.css) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 5 | [src/main.py](../../../../sources/MarcoPorcellato__matryca-plumber/src/main.py)<br>[src/cli/__main__.py](../../../../sources/MarcoPorcellato__matryca-plumber/src/cli/__main__.py)<br>[frontend/src/App.tsx](../../../../sources/MarcoPorcellato__matryca-plumber/frontend/src/App.tsx)<br>[frontend/src/index.css](../../../../sources/MarcoPorcellato__matryca-plumber/frontend/src/index.css)<br>[frontend/src/main.tsx](../../../../sources/MarcoPorcellato__matryca-plumber/frontend/src/main.tsx) |
| agentRuntime | 46 | [src/utils/agent_debug_log.py](../../../../sources/MarcoPorcellato__matryca-plumber/src/utils/agent_debug_log.py)<br>[src/agent/__init__.py](../../../../sources/MarcoPorcellato__matryca-plumber/src/agent/__init__.py)<br>[src/agent/alias_state.py](../../../../sources/MarcoPorcellato__matryca-plumber/src/agent/alias_state.py)<br>[src/agent/context_compressor.py](../../../../sources/MarcoPorcellato__matryca-plumber/src/agent/context_compressor.py)<br>[src/agent/context_load.py](../../../../sources/MarcoPorcellato__matryca-plumber/src/agent/context_load.py)<br>[src/agent/control_room_progress.py](../../../../sources/MarcoPorcellato__matryca-plumber/src/agent/control_room_progress.py)<br>[src/agent/cooperative_yield.py](../../../../sources/MarcoPorcellato__matryca-plumber/src/agent/cooperative_yield.py)<br>[src/agent/graph_dispatch.py](../../../../sources/MarcoPorcellato__matryca-plumber/src/agent/graph_dispatch.py) |
| mcp | 6 | [tests/test_hermes_mcp_handshake.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_hermes_mcp_handshake.py)<br>[tests/test_mcp_server.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_mcp_server.py)<br>[tests/test_mcp_telemetry.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_mcp_telemetry.py)<br>[src/agent/mcp_server.py](../../../../sources/MarcoPorcellato__matryca-plumber/src/agent/mcp_server.py)<br>[src/agent/mcp_telemetry.py](../../../../sources/MarcoPorcellato__matryca-plumber/src/agent/mcp_telemetry.py)<br>[src/agent/mcp_tool_guard.py](../../../../sources/MarcoPorcellato__matryca-plumber/src/agent/mcp_tool_guard.py) |
| retrieval | 75 | [matryca-wiki.example.yml](../../../../sources/MarcoPorcellato__matryca-plumber/matryca-wiki.example.yml)<br>[tests/test_alias_index.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_alias_index.py)<br>[tests/test_backlink_index.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_backlink_index.py)<br>[tests/test_dual_embedding.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_dual_embedding.py)<br>[tests/test_graph_analytics.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_graph_analytics.py)<br>[tests/test_graph_dispatch_search.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_graph_dispatch_search.py)<br>[tests/test_graph_path_hygiene.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_graph_path_hygiene.py)<br>[tests/test_graph_path_validate.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_graph_path_validate.py) |
| spec | 8 | [ROADMAP.md](../../../../sources/MarcoPorcellato__matryca-plumber/ROADMAP.md)<br>[docs/ARCHITECTURE.md](../../../../sources/MarcoPorcellato__matryca-plumber/docs/ARCHITECTURE.md)<br>[docs/roadmaps/ROADMAP_IRONCLAD_SHIELD.md](../../../../sources/MarcoPorcellato__matryca-plumber/docs/roadmaps/ROADMAP_IRONCLAD_SHIELD.md)<br>[docs/roadmaps/ROADMAP_LLM_WIKI_PHASE_3.md](../../../../sources/MarcoPorcellato__matryca-plumber/docs/roadmaps/ROADMAP_LLM_WIKI_PHASE_3.md)<br>[docs/roadmaps/ROADMAP_LLM_WIKI.md](../../../../sources/MarcoPorcellato__matryca-plumber/docs/roadmaps/ROADMAP_LLM_WIKI.md)<br>[docs/roadmaps/ROADMAP_LOGSEQ_SUPERPOWERS.md](../../../../sources/MarcoPorcellato__matryca-plumber/docs/roadmaps/ROADMAP_LOGSEQ_SUPERPOWERS.md)<br>[docs/roadmaps/ROADMAP_MLDOC_COMPLIANCE.md](../../../../sources/MarcoPorcellato__matryca-plumber/docs/roadmaps/ROADMAP_MLDOC_COMPLIANCE.md)<br>[docs/roadmaps/ROADMAP_PHASE_5_6.md](../../../../sources/MarcoPorcellato__matryca-plumber/docs/roadmaps/ROADMAP_PHASE_5_6.md) |
| eval | 98 | [tests/__init__.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/conftest.py)<br>[tests/test_advanced_query_block.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_advanced_query_block.py)<br>[tests/test_adversarial_security.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_adversarial_security.py)<br>[tests/test_agent_debug_log.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_agent_debug_log.py)<br>[tests/test_agent_experience_robustness.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_agent_experience_robustness.py)<br>[tests/test_alias_index.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_alias_index.py)<br>[tests/test_alias_state.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_alias_state.py) |
| security | 20 | [SECURITY.md](../../../../sources/MarcoPorcellato__matryca-plumber/SECURITY.md)<br>[tests/test_adversarial_security.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_adversarial_security.py)<br>[tests/test_git_audit.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_git_audit.py)<br>[tests/test_llm_url_policy.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_llm_url_policy.py)<br>[tests/test_sandbox_read_check.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_sandbox_read_check.py)<br>[tests/test_security_remediation.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_security_remediation.py)<br>[tests/test_ui_auth_lan.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_ui_auth_lan.py)<br>[src/utils/llm_url_policy.py](../../../../sources/MarcoPorcellato__matryca-plumber/src/utils/llm_url_policy.py) |
| ci | 4 | [.github/workflows/ci.yml](../../../../sources/MarcoPorcellato__matryca-plumber/.github/workflows/ci.yml)<br>[.github/workflows/dependabot-uv-fix.yml](../../../../sources/MarcoPorcellato__matryca-plumber/.github/workflows/dependabot-uv-fix.yml)<br>[.github/workflows/metrics-saver.yml](../../../../sources/MarcoPorcellato__matryca-plumber/.github/workflows/metrics-saver.yml)<br>[.github/workflows/release.yml](../../../../sources/MarcoPorcellato__matryca-plumber/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 10 | [.cursor/rules/00-karpathy-agent-behavior.mdc](../../../../sources/MarcoPorcellato__matryca-plumber/.cursor/rules/00-karpathy-agent-behavior.mdc)<br>[.cursor/rules/01-core-paradigm.mdc](../../../../sources/MarcoPorcellato__matryca-plumber/.cursor/rules/01-core-paradigm.mdc)<br>[.cursor/rules/02-python-standards.mdc](../../../../sources/MarcoPorcellato__matryca-plumber/.cursor/rules/02-python-standards.mdc)<br>[.cursor/rules/03-logseq-api.mdc](../../../../sources/MarcoPorcellato__matryca-plumber/.cursor/rules/03-logseq-api.mdc)<br>[.cursor/rules/04-spatial-parser.mdc](../../../../sources/MarcoPorcellato__matryca-plumber/.cursor/rules/04-spatial-parser.mdc)<br>[.cursor/rules/05-release-preparation.mdc](../../../../sources/MarcoPorcellato__matryca-plumber/.cursor/rules/05-release-preparation.mdc)<br>[.cursor/rules/06-auto-changelog.mdc](../../../../sources/MarcoPorcellato__matryca-plumber/.cursor/rules/06-auto-changelog.mdc)<br>[.cursor/rules/07-env-example.mdc](../../../../sources/MarcoPorcellato__matryca-plumber/.cursor/rules/07-env-example.mdc) |
| docs | 43 | [README.md](../../../../sources/MarcoPorcellato__matryca-plumber/README.md)<br>[frontend/README.md](../../../../sources/MarcoPorcellato__matryca-plumber/frontend/README.md)<br>[docs/ARCHITECTURE.md](../../../../sources/MarcoPorcellato__matryca-plumber/docs/ARCHITECTURE.md)<br>[docs/BRANDING.md](../../../../sources/MarcoPorcellato__matryca-plumber/docs/BRANDING.md)<br>[docs/PROJECT_DIARY.md](../../../../sources/MarcoPorcellato__matryca-plumber/docs/PROJECT_DIARY.md)<br>[docs/RELEASE_PROCESS.md](../../../../sources/MarcoPorcellato__matryca-plumber/docs/RELEASE_PROCESS.md)<br>[docs/resilience-llm-json-triz.md](../../../../sources/MarcoPorcellato__matryca-plumber/docs/resilience-llm-json-triz.md)<br>[docs/v1.8-OPTIMIZATION-PLAN.md](../../../../sources/MarcoPorcellato__matryca-plumber/docs/v1.8-OPTIMIZATION-PLAN.md) |
| config | 5 | [Makefile](../../../../sources/MarcoPorcellato__matryca-plumber/Makefile)<br>[pyproject.toml](../../../../sources/MarcoPorcellato__matryca-plumber/pyproject.toml)<br>[uv.lock](../../../../sources/MarcoPorcellato__matryca-plumber/uv.lock)<br>[frontend/package.json](../../../../sources/MarcoPorcellato__matryca-plumber/frontend/package.json)<br>[frontend/tsconfig.json](../../../../sources/MarcoPorcellato__matryca-plumber/frontend/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 98 | [tests/__init__.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/conftest.py)<br>[tests/test_advanced_query_block.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_advanced_query_block.py)<br>[tests/test_adversarial_security.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_adversarial_security.py)<br>[tests/test_agent_debug_log.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_agent_debug_log.py)<br>[tests/test_agent_experience_robustness.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_agent_experience_robustness.py) |
| CI workflows | 4 | [.github/workflows/ci.yml](../../../../sources/MarcoPorcellato__matryca-plumber/.github/workflows/ci.yml)<br>[.github/workflows/dependabot-uv-fix.yml](../../../../sources/MarcoPorcellato__matryca-plumber/.github/workflows/dependabot-uv-fix.yml)<br>[.github/workflows/metrics-saver.yml](../../../../sources/MarcoPorcellato__matryca-plumber/.github/workflows/metrics-saver.yml)<br>[.github/workflows/release.yml](../../../../sources/MarcoPorcellato__matryca-plumber/.github/workflows/release.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 20 | [SECURITY.md](../../../../sources/MarcoPorcellato__matryca-plumber/SECURITY.md)<br>[tests/test_adversarial_security.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_adversarial_security.py)<br>[tests/test_git_audit.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_git_audit.py)<br>[tests/test_llm_url_policy.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_llm_url_policy.py)<br>[tests/test_sandbox_read_check.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_sandbox_read_check.py)<br>[tests/test_security_remediation.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_security_remediation.py) |
| Agent instructions | 10 | [.cursor/rules/00-karpathy-agent-behavior.mdc](../../../../sources/MarcoPorcellato__matryca-plumber/.cursor/rules/00-karpathy-agent-behavior.mdc)<br>[.cursor/rules/01-core-paradigm.mdc](../../../../sources/MarcoPorcellato__matryca-plumber/.cursor/rules/01-core-paradigm.mdc)<br>[.cursor/rules/02-python-standards.mdc](../../../../sources/MarcoPorcellato__matryca-plumber/.cursor/rules/02-python-standards.mdc)<br>[.cursor/rules/03-logseq-api.mdc](../../../../sources/MarcoPorcellato__matryca-plumber/.cursor/rules/03-logseq-api.mdc)<br>[.cursor/rules/04-spatial-parser.mdc](../../../../sources/MarcoPorcellato__matryca-plumber/.cursor/rules/04-spatial-parser.mdc)<br>[.cursor/rules/05-release-preparation.mdc](../../../../sources/MarcoPorcellato__matryca-plumber/.cursor/rules/05-release-preparation.mdc) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/test_hermes_mcp_handshake.py`, `tests/test_mcp_server.py`, `tests/test_mcp_telemetry.py`.
2. Trace execution through entrypoints: `src/main.py`, `src/cli/__main__.py`, `frontend/src/App.tsx`.
3. Map agent/tool runtime through: `src/utils/agent_debug_log.py`, `src/agent/__init__.py`, `src/agent/alias_state.py`.
4. Inspect retrieval/memory/indexing through: `matryca-wiki.example.yml`, `tests/test_alias_index.py`, `tests/test_backlink_index.py`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/conftest.py`, `tests/test_advanced_query_block.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local first AI daemon for Logseq OG background semantic indexing, link hygiene, and agent ready CLI/MCP — edits Markdown. 핵심 구조 신호는 Python, pyproject.toml, Makefile, README.md, LICENSE, openai이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
