# oleksiijko/pmb Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local-first persistent memory for AI coding agents (Claude Code, Cursor, Codex) over MCP. Decisions, lessons and facts live in one SQLite file on your disk. Offline, multilingual.

## 요약

- 조사 단위: `sources/oleksiijko__pmb` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 432 files, 56 directories, depth score 124, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/mcp/test_daemon_singleton.py, tests/mcp/test_daemon.py, tests/mcp/test_lazy_mcp_import.py이고, 의존성 단서는 anthropic, claude, codex, mcp, next, typer, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | oleksiijko/pmb |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 79 |
| Forks | 7 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/oleksiijko__pmb](../../../../sources/oleksiijko__pmb) |
| Existing report | [reports/global-trending/repositories/oleksiijko__pmb.md](../../../global-trending/repositories/oleksiijko__pmb.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 432 / 56 |
| Max observed depth | 5 |
| Top directories | .claude, .github, docker, docs, npm, scripts, src, tests |
| Top extensions | .py: 352, .md: 39, .yml: 9, (none): 8, .json: 7, .yaml: 5, .js: 4, .png: 2, .cff: 1, .css: 1, .html: 1, .in: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 86 |
| src | source boundary | 56 |
| docs | documentation surface | 41 |
| .github | ci surface | 1 |
| docker | documentation surface | 1 |
| npm | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| utility | Makefile | install | make install |
| serve-dev | Makefile | dev | make dev |
| test | Makefile | test | make test |
| test | Makefile | test-core | make test-core |
| test | Makefile | test-smoke | make test-smoke |
| test | Makefile | test-all-WARN | make test-all-WARN |
| quality | Makefile | lint | make lint |
| quality | Makefile | format | make format |
| utility | Makefile | clean | make clean |
| utility | Makefile | bench | make bench |
| utility | Makefile | bench-quick | make bench-quick |
| utility | Makefile | tui | make tui |
| utility | Makefile | dashboard | make dashboard |
| build | Makefile | docker-build | make docker-build |
| container | Makefile | docker-shell | make docker-shell |
| container | Makefile | docker-dashboard | make docker-dashboard |
| container | Makefile | docker-mcp | make docker-mcp |
| test | Makefile | docker-test | make docker-test |
| utility | pyproject.toml | pmb | pmb |
| utility | pyproject.toml | pmb-ai | pmb-ai |
| utility | pyproject.toml | pmb-mcp | pmb-mcp |
| utility | pyproject.toml | pmb-chat | pmb-chat |
| utility | pyproject.toml | pmb-hook | pmb-hook |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | anthropic, claude |
| agentProtocols | mcp, codex |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | transformers |
| webRuntime | next |
| developerSurface | typer |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [tests/mcp/test_daemon_singleton.py](../../../../sources/oleksiijko__pmb/tests/mcp/test_daemon_singleton.py) | mcp signal |
| mcp | [tests/mcp/test_daemon.py](../../../../sources/oleksiijko__pmb/tests/mcp/test_daemon.py) | mcp signal |
| mcp | [tests/mcp/test_lazy_mcp_import.py](../../../../sources/oleksiijko__pmb/tests/mcp/test_lazy_mcp_import.py) | mcp signal |
| mcp | [tests/mcp/test_mcp_compaction.py](../../../../sources/oleksiijko__pmb/tests/mcp/test_mcp_compaction.py) | mcp signal |
| agentRuntime | [tests/hooks/test_adherence_metric.py](../../../../sources/oleksiijko__pmb/tests/hooks/test_adherence_metric.py) | agentRuntime signal |
| agentRuntime | [tests/hooks/test_agent_wrapper.py](../../../../sources/oleksiijko__pmb/tests/hooks/test_agent_wrapper.py) | agentRuntime signal |
| agentRuntime | [tests/hooks/test_auto_recall.py](../../../../sources/oleksiijko__pmb/tests/hooks/test_auto_recall.py) | agentRuntime signal |
| agentRuntime | [tests/hooks/test_autowrite_importance.py](../../../../sources/oleksiijko__pmb/tests/hooks/test_autowrite_importance.py) | agentRuntime signal |
| entrypoints | [server.json](../../../../sources/oleksiijko__pmb/server.json) | entrypoints signal |
| entrypoints | [src/pmb/mcp/server.py](../../../../sources/oleksiijko__pmb/src/pmb/mcp/server.py) | entrypoints signal |
| entrypoints | [src/pmb/hookclient/__main__.py](../../../../sources/oleksiijko__pmb/src/pmb/hookclient/__main__.py) | entrypoints signal |
| entrypoints | [src/pmb/dashboard/server.py](../../../../sources/oleksiijko__pmb/src/pmb/dashboard/server.py) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 10 | [server.json](../../../../sources/oleksiijko__pmb/server.json)<br>[src/pmb/mcp/server.py](../../../../sources/oleksiijko__pmb/src/pmb/mcp/server.py)<br>[src/pmb/hookclient/__main__.py](../../../../sources/oleksiijko__pmb/src/pmb/hookclient/__main__.py)<br>[src/pmb/dashboard/server.py](../../../../sources/oleksiijko__pmb/src/pmb/dashboard/server.py)<br>[src/pmb/cli/__main__.py](../../../../sources/oleksiijko__pmb/src/pmb/cli/__main__.py)<br>[src/pmb/cli/main.py](../../../../sources/oleksiijko__pmb/src/pmb/cli/main.py)<br>[src/pmb/agent_wrapper/__main__.py](../../../../sources/oleksiijko__pmb/src/pmb/agent_wrapper/__main__.py)<br>[npm/bin/bootstrap.js](../../../../sources/oleksiijko__pmb/npm/bin/bootstrap.js) |
| agentRuntime | 34 | [tests/hooks/test_adherence_metric.py](../../../../sources/oleksiijko__pmb/tests/hooks/test_adherence_metric.py)<br>[tests/hooks/test_agent_wrapper.py](../../../../sources/oleksiijko__pmb/tests/hooks/test_agent_wrapper.py)<br>[tests/hooks/test_auto_recall.py](../../../../sources/oleksiijko__pmb/tests/hooks/test_auto_recall.py)<br>[tests/hooks/test_autowrite_importance.py](../../../../sources/oleksiijko__pmb/tests/hooks/test_autowrite_importance.py)<br>[tests/hooks/test_feedback.py](../../../../sources/oleksiijko__pmb/tests/hooks/test_feedback.py)<br>[tests/hooks/test_followcheck.py](../../../../sources/oleksiijko__pmb/tests/hooks/test_followcheck.py)<br>[tests/hooks/test_hook_client.py](../../../../sources/oleksiijko__pmb/tests/hooks/test_hook_client.py)<br>[tests/hooks/test_lesson_idf_gate.py](../../../../sources/oleksiijko__pmb/tests/hooks/test_lesson_idf_gate.py) |
| mcp | 16 | [tests/mcp/test_daemon_singleton.py](../../../../sources/oleksiijko__pmb/tests/mcp/test_daemon_singleton.py)<br>[tests/mcp/test_daemon.py](../../../../sources/oleksiijko__pmb/tests/mcp/test_daemon.py)<br>[tests/mcp/test_lazy_mcp_import.py](../../../../sources/oleksiijko__pmb/tests/mcp/test_lazy_mcp_import.py)<br>[tests/mcp/test_mcp_compaction.py](../../../../sources/oleksiijko__pmb/tests/mcp/test_mcp_compaction.py)<br>[tests/mcp/test_mcp_registry.py](../../../../sources/oleksiijko__pmb/tests/mcp/test_mcp_registry.py)<br>[tests/mcp/test_toolspec_budget.py](../../../../sources/oleksiijko__pmb/tests/mcp/test_toolspec_budget.py)<br>[tests/integration/test_mcp_e2e.py](../../../../sources/oleksiijko__pmb/tests/integration/test_mcp_e2e.py)<br>[tests/cli/test_mcp_proxy.py](../../../../sources/oleksiijko__pmb/tests/cli/test_mcp_proxy.py) |
| retrieval | 42 | [tests/recall/test_memory_quality.py](../../../../sources/oleksiijko__pmb/tests/recall/test_memory_quality.py)<br>[tests/ingest/test_git_sync.py](../../../../sources/oleksiijko__pmb/tests/ingest/test_git_sync.py)<br>[tests/ingest/test_known_projects_filter.py](../../../../sources/oleksiijko__pmb/tests/ingest/test_known_projects_filter.py)<br>[tests/ingest/test_multimodal.py](../../../../sources/oleksiijko__pmb/tests/ingest/test_multimodal.py)<br>[tests/ingest/test_pdf_headings.py](../../../../sources/oleksiijko__pmb/tests/ingest/test_pdf_headings.py)<br>[tests/ingest/test_project_index_hygiene.py](../../../../sources/oleksiijko__pmb/tests/ingest/test_project_index_hygiene.py)<br>[tests/ingest/test_project_observer.py](../../../../sources/oleksiijko__pmb/tests/ingest/test_project_observer.py)<br>[tests/ingest/test_reference_data.py](../../../../sources/oleksiijko__pmb/tests/ingest/test_reference_data.py) |
| spec | 3 | [docs/ROADMAP.md](../../../../sources/oleksiijko__pmb/docs/ROADMAP.md)<br>[docs/concepts/architecture.md](../../../../sources/oleksiijko__pmb/docs/concepts/architecture.md)<br>[docs/concepts/design-and-tech.md](../../../../sources/oleksiijko__pmb/docs/concepts/design-and-tech.md) |
| eval | 183 | [tests/conftest.py](../../../../sources/oleksiijko__pmb/tests/conftest.py)<br>[tests/security/test_encryption.py](../../../../sources/oleksiijko__pmb/tests/security/test_encryption.py)<br>[tests/security/test_escalation.py](../../../../sources/oleksiijko__pmb/tests/security/test_escalation.py)<br>[tests/security/test_redact.py](../../../../sources/oleksiijko__pmb/tests/security/test_redact.py)<br>[tests/security/test_security.py](../../../../sources/oleksiijko__pmb/tests/security/test_security.py)<br>[tests/recall/test_arcs.py](../../../../sources/oleksiijko__pmb/tests/recall/test_arcs.py)<br>[tests/recall/test_causation.py](../../../../sources/oleksiijko__pmb/tests/recall/test_causation.py)<br>[tests/recall/test_conversational_gate.py](../../../../sources/oleksiijko__pmb/tests/recall/test_conversational_gate.py) |
| security | 12 | [SECURITY.md](../../../../sources/oleksiijko__pmb/SECURITY.md)<br>[tests/security/test_encryption.py](../../../../sources/oleksiijko__pmb/tests/security/test_encryption.py)<br>[tests/security/test_escalation.py](../../../../sources/oleksiijko__pmb/tests/security/test_escalation.py)<br>[tests/security/test_redact.py](../../../../sources/oleksiijko__pmb/tests/security/test_redact.py)<br>[tests/security/test_security.py](../../../../sources/oleksiijko__pmb/tests/security/test_security.py)<br>[tests/integration/test_http_bearer_auth.py](../../../../sources/oleksiijko__pmb/tests/integration/test_http_bearer_auth.py)<br>[tests/hooks/test_pretool_command_guard.py](../../../../sources/oleksiijko__pmb/tests/hooks/test_pretool_command_guard.py)<br>[tests/hooks/test_pretool_guard.py](../../../../sources/oleksiijko__pmb/tests/hooks/test_pretool_guard.py) |
| ci | 6 | [.github/workflows/benchmark.yml](../../../../sources/oleksiijko__pmb/.github/workflows/benchmark.yml)<br>[.github/workflows/ci.yml](../../../../sources/oleksiijko__pmb/.github/workflows/ci.yml)<br>[.github/workflows/docs.yml](../../../../sources/oleksiijko__pmb/.github/workflows/docs.yml)<br>[.github/workflows/publish-npm.yml](../../../../sources/oleksiijko__pmb/.github/workflows/publish-npm.yml)<br>[.github/workflows/publish.yml](../../../../sources/oleksiijko__pmb/.github/workflows/publish.yml)<br>[.github/workflows/release-drafter.yml](../../../../sources/oleksiijko__pmb/.github/workflows/release-drafter.yml) |
| container | 2 | [compose.yaml](../../../../sources/oleksiijko__pmb/compose.yaml)<br>[docker/Dockerfile](../../../../sources/oleksiijko__pmb/docker/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 36 | [mkdocs.yml](../../../../sources/oleksiijko__pmb/mkdocs.yml)<br>[README.md](../../../../sources/oleksiijko__pmb/README.md)<br>[scripts/README.md](../../../../sources/oleksiijko__pmb/scripts/README.md)<br>[npm/README.md](../../../../sources/oleksiijko__pmb/npm/README.md)<br>[docs/404.md](../../../../sources/oleksiijko__pmb/docs/404.md)<br>[docs/assistant-integration-notes.md](../../../../sources/oleksiijko__pmb/docs/assistant-integration-notes.md)<br>[docs/HARDENING_NOTES.md](../../../../sources/oleksiijko__pmb/docs/HARDENING_NOTES.md)<br>[docs/README.md](../../../../sources/oleksiijko__pmb/docs/README.md) |
| config | 3 | [Makefile](../../../../sources/oleksiijko__pmb/Makefile)<br>[pyproject.toml](../../../../sources/oleksiijko__pmb/pyproject.toml)<br>[npm/package.json](../../../../sources/oleksiijko__pmb/npm/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 183 | [tests/conftest.py](../../../../sources/oleksiijko__pmb/tests/conftest.py)<br>[tests/security/test_encryption.py](../../../../sources/oleksiijko__pmb/tests/security/test_encryption.py)<br>[tests/security/test_escalation.py](../../../../sources/oleksiijko__pmb/tests/security/test_escalation.py)<br>[tests/security/test_redact.py](../../../../sources/oleksiijko__pmb/tests/security/test_redact.py)<br>[tests/security/test_security.py](../../../../sources/oleksiijko__pmb/tests/security/test_security.py)<br>[tests/recall/test_arcs.py](../../../../sources/oleksiijko__pmb/tests/recall/test_arcs.py) |
| CI workflows | 6 | [.github/workflows/benchmark.yml](../../../../sources/oleksiijko__pmb/.github/workflows/benchmark.yml)<br>[.github/workflows/ci.yml](../../../../sources/oleksiijko__pmb/.github/workflows/ci.yml)<br>[.github/workflows/docs.yml](../../../../sources/oleksiijko__pmb/.github/workflows/docs.yml)<br>[.github/workflows/publish-npm.yml](../../../../sources/oleksiijko__pmb/.github/workflows/publish-npm.yml)<br>[.github/workflows/publish.yml](../../../../sources/oleksiijko__pmb/.github/workflows/publish.yml)<br>[.github/workflows/release-drafter.yml](../../../../sources/oleksiijko__pmb/.github/workflows/release-drafter.yml) |
| Containers / deploy | 2 | [compose.yaml](../../../../sources/oleksiijko__pmb/compose.yaml)<br>[docker/Dockerfile](../../../../sources/oleksiijko__pmb/docker/Dockerfile) |
| Security / policy | 12 | [SECURITY.md](../../../../sources/oleksiijko__pmb/SECURITY.md)<br>[tests/security/test_encryption.py](../../../../sources/oleksiijko__pmb/tests/security/test_encryption.py)<br>[tests/security/test_escalation.py](../../../../sources/oleksiijko__pmb/tests/security/test_escalation.py)<br>[tests/security/test_redact.py](../../../../sources/oleksiijko__pmb/tests/security/test_redact.py)<br>[tests/security/test_security.py](../../../../sources/oleksiijko__pmb/tests/security/test_security.py)<br>[tests/integration/test_http_bearer_auth.py](../../../../sources/oleksiijko__pmb/tests/integration/test_http_bearer_auth.py) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/mcp/test_daemon_singleton.py`, `tests/mcp/test_daemon.py`, `tests/mcp/test_lazy_mcp_import.py`.
2. Trace execution through entrypoints: `server.json`, `src/pmb/mcp/server.py`, `src/pmb/hookclient/__main__.py`.
3. Map agent/tool runtime through: `tests/hooks/test_adherence_metric.py`, `tests/hooks/test_agent_wrapper.py`, `tests/hooks/test_auto_recall.py`.
4. Inspect retrieval/memory/indexing through: `tests/recall/test_memory_quality.py`, `tests/ingest/test_git_sync.py`, `tests/ingest/test_known_projects_filter.py`.
5. Verify behavior through test/eval files: `tests/conftest.py`, `tests/security/test_encryption.py`, `tests/security/test_escalation.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local first persistent memory for AI coding agents Claude Code, Cursor, Codex over MCP. Decisions, lessons and facts liv. 핵심 구조 신호는 Python, pyproject.toml, Makefile, README.md, LICENSE, anthropic이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
