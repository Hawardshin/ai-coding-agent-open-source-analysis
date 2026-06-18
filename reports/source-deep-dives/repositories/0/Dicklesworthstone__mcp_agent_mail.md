# Dicklesworthstone/mcp_agent_mail Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Asynchronous coordination layer for AI coding agents: identities, inboxes, searchable threads, and advisory file leases over FastMCP + Git + SQLite

## 요약

- 조사 단위: `sources/Dicklesworthstone__mcp_agent_mail` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 287 files, 34 directories, depth score 127, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=.mcp.json, cline.mcp.json, codex.mcp.json이고, 의존성 단서는 mcp, fastapi, vscode, typer, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Dicklesworthstone/mcp_agent_mail |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 1990 |
| Forks | 209 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/Dicklesworthstone__mcp_agent_mail](../../../../sources/Dicklesworthstone__mcp_agent_mail) |
| Existing report | [reports/global-trending/repositories/Dicklesworthstone__mcp_agent_mail.md](../../../global-trending/repositories/Dicklesworthstone__mcp_agent_mail.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 287 / 34 |
| Max observed depth | 4 |
| Top directories | .beads, .claude, .codex, .githooks, .github, deploy, docs, examples, screenshots, scripts, src, tests, third_party_docs, web |
| Top extensions | .py: 160, .md: 23, .sh: 23, .html: 22, .json: 12, (none): 10, .yml: 8, .webp: 7, .js: 3, .jsonl: 3, .toml: 3, .yaml: 3 |
| Source patterns | api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 57 |
| src | source boundary | 37 |
| docs | documentation surface | 19 |
| web | source boundary | 2 |
| .codex | top-level component | 1 |
| .github | ci surface | 1 |
| deploy | deployment surface | 1 |
| examples | top-level component | 1 |
| screenshots | top-level component | 1 |
| scripts | top-level component | 1 |
| third_party_docs | documentation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| serve-dev | Makefile | serve-http | make serve-http |
| utility | Makefile | migrate | make migrate |
| quality | Makefile | lint | make lint |
| quality | Makefile | typecheck | make typecheck |
| utility | Makefile | guard-install | make guard-install |
| utility | Makefile | guard-uninstall | make guard-uninstall |
| utility | Makefile | claims | make claims |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | fastapi |
| developerSurface | vscode, typer |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [.mcp.json](../../../../sources/Dicklesworthstone__mcp_agent_mail/.mcp.json) | mcp signal |
| mcp | [cline.mcp.json](../../../../sources/Dicklesworthstone__mcp_agent_mail/cline.mcp.json) | mcp signal |
| mcp | [codex.mcp.json](../../../../sources/Dicklesworthstone__mcp_agent_mail/codex.mcp.json) | mcp signal |
| mcp | [cursor.mcp.json](../../../../sources/Dicklesworthstone__mcp_agent_mail/cursor.mcp.json) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/Dicklesworthstone__mcp_agent_mail/AGENTS.md) | agentRuntime signal |
| agentRuntime | [SKILL.md](../../../../sources/Dicklesworthstone__mcp_agent_mail/SKILL.md) | agentRuntime signal |
| agentRuntime | [scripts/hooks/check_inbox.sh](../../../../sources/Dicklesworthstone__mcp_agent_mail/scripts/hooks/check_inbox.sh) | agentRuntime signal |
| agentRuntime | [scripts/hooks/codex_notify.sh](../../../../sources/Dicklesworthstone__mcp_agent_mail/scripts/hooks/codex_notify.sh) | agentRuntime signal |
| entrypoints | [src/mcp_agent_mail/__main__.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/src/mcp_agent_mail/__main__.py) | entrypoints signal |
| instruction | [.codex/config.toml](../../../../sources/Dicklesworthstone__mcp_agent_mail/.codex/config.toml) | instruction signal |
| config | [Makefile](../../../../sources/Dicklesworthstone__mcp_agent_mail/Makefile) | config signal |
| config | [pyproject.toml](../../../../sources/Dicklesworthstone__mcp_agent_mail/pyproject.toml) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [src/mcp_agent_mail/__main__.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/src/mcp_agent_mail/__main__.py) |
| agentRuntime | 10 | [AGENTS.md](../../../../sources/Dicklesworthstone__mcp_agent_mail/AGENTS.md)<br>[SKILL.md](../../../../sources/Dicklesworthstone__mcp_agent_mail/SKILL.md)<br>[scripts/hooks/check_inbox.sh](../../../../sources/Dicklesworthstone__mcp_agent_mail/scripts/hooks/check_inbox.sh)<br>[scripts/hooks/codex_notify.sh](../../../../sources/Dicklesworthstone__mcp_agent_mail/scripts/hooks/codex_notify.sh)<br>[screenshots/webp/agent_mail_overview.webp](../../../../sources/Dicklesworthstone__mcp_agent_mail/screenshots/webp/agent_mail_overview.webp)<br>[screenshots/output/agent_mail_showcase.gif](../../../../sources/Dicklesworthstone__mcp_agent_mail/screenshots/output/agent_mail_showcase.gif)<br>[screenshots/output/agent_mail_showcase.mp4](../../../../sources/Dicklesworthstone__mcp_agent_mail/screenshots/output/agent_mail_showcase.mp4)<br>[docs/planning/AGENT_FRIENDLINESS_REPORT.md](../../../../sources/Dicklesworthstone__mcp_agent_mail/docs/planning/AGENT_FRIENDLINESS_REPORT.md) |
| mcp | 54 | [.mcp.json](../../../../sources/Dicklesworthstone__mcp_agent_mail/.mcp.json)<br>[cline.mcp.json](../../../../sources/Dicklesworthstone__mcp_agent_mail/cline.mcp.json)<br>[codex.mcp.json](../../../../sources/Dicklesworthstone__mcp_agent_mail/codex.mcp.json)<br>[cursor.mcp.json](../../../../sources/Dicklesworthstone__mcp_agent_mail/cursor.mcp.json)<br>[gemini.mcp.json](../../../../sources/Dicklesworthstone__mcp_agent_mail/gemini.mcp.json)<br>[windsurf.mcp.json](../../../../sources/Dicklesworthstone__mcp_agent_mail/windsurf.mcp.json)<br>[third_party_docs/mcp_protocol_specs.md](../../../../sources/Dicklesworthstone__mcp_agent_mail/third_party_docs/mcp_protocol_specs.md)<br>[tests/test_mcp_resources.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/test_mcp_resources.py) |
| retrieval | 4 | [web/index.html](../../../../sources/Dicklesworthstone__mcp_agent_mail/web/index.html)<br>[tests/test_git_index_lock.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/test_git_index_lock.py)<br>[src/mcp_agent_mail/viewer_assets/index.html](../../../../sources/Dicklesworthstone__mcp_agent_mail/src/mcp_agent_mail/viewer_assets/index.html)<br>[src/mcp_agent_mail/templates/mail_index.html](../../../../sources/Dicklesworthstone__mcp_agent_mail/src/mcp_agent_mail/templates/mail_index.html) |
| spec | 3 | [docs/GUIDE_TO_OPTIMAL_MCP_SERVER_DESIGN.md](../../../../sources/Dicklesworthstone__mcp_agent_mail/docs/GUIDE_TO_OPTIMAL_MCP_SERVER_DESIGN.md)<br>[docs/adr/002-rust-optimization-analysis.md](../../../../sources/Dicklesworthstone__mcp_agent_mail/docs/adr/002-rust-optimization-analysis.md)<br>[docs/adr/README.md](../../../../sources/Dicklesworthstone__mcp_agent_mail/docs/adr/README.md) |
| eval | 147 | [tests/__init__.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/conftest.py)<br>[tests/test_ack_views_details.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/test_ack_views_details.py)<br>[tests/test_agent_name_validation.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/test_agent_name_validation.py)<br>[tests/test_am_run_basic.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/test_am_run_basic.py)<br>[tests/test_app_helpers.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/test_app_helpers.py)<br>[tests/test_archive_browser.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/test_archive_browser.py)<br>[tests/test_attachment_policy.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/test_attachment_policy.py) |
| security | 16 | [tests/test_attachment_policy.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/test_attachment_policy.py)<br>[tests/test_cli_guard_commands.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/test_cli_guard_commands.py)<br>[tests/test_contact_policy.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/test_contact_policy.py)<br>[tests/test_guard_edges.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/test_guard_edges.py)<br>[tests/test_guard_integration.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/test_guard_integration.py)<br>[tests/test_guard_prepush.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/test_guard_prepush.py)<br>[tests/test_guard_rename.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/test_guard_rename.py)<br>[tests/test_guard_render.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/test_guard_render.py) |
| ci | 5 | [.github/workflows/acfs-checksums-dispatch.yml](../../../../sources/Dicklesworthstone__mcp_agent_mail/.github/workflows/acfs-checksums-dispatch.yml)<br>[.github/workflows/ci.yml](../../../../sources/Dicklesworthstone__mcp_agent_mail/.github/workflows/ci.yml)<br>[.github/workflows/nightly.yml](../../../../sources/Dicklesworthstone__mcp_agent_mail/.github/workflows/nightly.yml)<br>[.github/workflows/notify-acfs.yml](../../../../sources/Dicklesworthstone__mcp_agent_mail/.github/workflows/notify-acfs.yml)<br>[.github/workflows/release.yml](../../../../sources/Dicklesworthstone__mcp_agent_mail/.github/workflows/release.yml) |
| container | 9 | [compose.yaml](../../../../sources/Dicklesworthstone__mcp_agent_mail/compose.yaml)<br>[docker-compose.yml](../../../../sources/Dicklesworthstone__mcp_agent_mail/docker-compose.yml)<br>[Dockerfile](../../../../sources/Dicklesworthstone__mcp_agent_mail/Dockerfile)<br>[deploy/gunicorn.conf.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/deploy/gunicorn.conf.py)<br>[deploy/systemd/mcp-agent-mail.service](../../../../sources/Dicklesworthstone__mcp_agent_mail/deploy/systemd/mcp-agent-mail.service)<br>[deploy/observability/prometheus_rules.sample.yml](../../../../sources/Dicklesworthstone__mcp_agent_mail/deploy/observability/prometheus_rules.sample.yml)<br>[deploy/logrotate/mcp-agent-mail](../../../../sources/Dicklesworthstone__mcp_agent_mail/deploy/logrotate/mcp-agent-mail)<br>[deploy/capabilities/agent_capabilities.example.yaml](../../../../sources/Dicklesworthstone__mcp_agent_mail/deploy/capabilities/agent_capabilities.example.yaml) |
| instruction | 2 | [AGENTS.md](../../../../sources/Dicklesworthstone__mcp_agent_mail/AGENTS.md)<br>[.codex/config.toml](../../../../sources/Dicklesworthstone__mcp_agent_mail/.codex/config.toml) |
| docs | 16 | [README.md](../../../../sources/Dicklesworthstone__mcp_agent_mail/README.md)<br>[docs/GUIDE_TO_OPTIMAL_MCP_SERVER_DESIGN.md](../../../../sources/Dicklesworthstone__mcp_agent_mail/docs/GUIDE_TO_OPTIMAL_MCP_SERVER_DESIGN.md)<br>[docs/IDENTITY_CONTRACT.md](../../../../sources/Dicklesworthstone__mcp_agent_mail/docs/IDENTITY_CONTRACT.md)<br>[docs/observability.md](../../../../sources/Dicklesworthstone__mcp_agent_mail/docs/observability.md)<br>[docs/operations_alignment_checklist.md](../../../../sources/Dicklesworthstone__mcp_agent_mail/docs/operations_alignment_checklist.md)<br>[docs/research/globtrie-analysis.md](../../../../sources/Dicklesworthstone__mcp_agent_mail/docs/research/globtrie-analysis.md)<br>[docs/planning/AGENT_FRIENDLINESS_REPORT.md](../../../../sources/Dicklesworthstone__mcp_agent_mail/docs/planning/AGENT_FRIENDLINESS_REPORT.md)<br>[docs/planning/PLAN_TO_ENABLE_EASY_AND_SECURE_SHARING_OF_AGENT_MAILBOX.md](../../../../sources/Dicklesworthstone__mcp_agent_mail/docs/planning/PLAN_TO_ENABLE_EASY_AND_SECURE_SHARING_OF_AGENT_MAILBOX.md) |
| config | 3 | [Makefile](../../../../sources/Dicklesworthstone__mcp_agent_mail/Makefile)<br>[pyproject.toml](../../../../sources/Dicklesworthstone__mcp_agent_mail/pyproject.toml)<br>[uv.lock](../../../../sources/Dicklesworthstone__mcp_agent_mail/uv.lock) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 147 | [tests/__init__.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/conftest.py)<br>[tests/test_ack_views_details.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/test_ack_views_details.py)<br>[tests/test_agent_name_validation.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/test_agent_name_validation.py)<br>[tests/test_am_run_basic.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/test_am_run_basic.py)<br>[tests/test_app_helpers.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/test_app_helpers.py) |
| CI workflows | 5 | [.github/workflows/acfs-checksums-dispatch.yml](../../../../sources/Dicklesworthstone__mcp_agent_mail/.github/workflows/acfs-checksums-dispatch.yml)<br>[.github/workflows/ci.yml](../../../../sources/Dicklesworthstone__mcp_agent_mail/.github/workflows/ci.yml)<br>[.github/workflows/nightly.yml](../../../../sources/Dicklesworthstone__mcp_agent_mail/.github/workflows/nightly.yml)<br>[.github/workflows/notify-acfs.yml](../../../../sources/Dicklesworthstone__mcp_agent_mail/.github/workflows/notify-acfs.yml)<br>[.github/workflows/release.yml](../../../../sources/Dicklesworthstone__mcp_agent_mail/.github/workflows/release.yml) |
| Containers / deploy | 9 | [compose.yaml](../../../../sources/Dicklesworthstone__mcp_agent_mail/compose.yaml)<br>[docker-compose.yml](../../../../sources/Dicklesworthstone__mcp_agent_mail/docker-compose.yml)<br>[Dockerfile](../../../../sources/Dicklesworthstone__mcp_agent_mail/Dockerfile)<br>[deploy/gunicorn.conf.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/deploy/gunicorn.conf.py)<br>[deploy/systemd/mcp-agent-mail.service](../../../../sources/Dicklesworthstone__mcp_agent_mail/deploy/systemd/mcp-agent-mail.service)<br>[deploy/observability/prometheus_rules.sample.yml](../../../../sources/Dicklesworthstone__mcp_agent_mail/deploy/observability/prometheus_rules.sample.yml) |
| Security / policy | 16 | [tests/test_attachment_policy.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/test_attachment_policy.py)<br>[tests/test_cli_guard_commands.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/test_cli_guard_commands.py)<br>[tests/test_contact_policy.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/test_contact_policy.py)<br>[tests/test_guard_edges.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/test_guard_edges.py)<br>[tests/test_guard_integration.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/test_guard_integration.py)<br>[tests/test_guard_prepush.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/test_guard_prepush.py) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/Dicklesworthstone__mcp_agent_mail/AGENTS.md)<br>[.codex/config.toml](../../../../sources/Dicklesworthstone__mcp_agent_mail/.codex/config.toml) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `.mcp.json`, `cline.mcp.json`, `codex.mcp.json`.
2. Trace execution through entrypoints: `src/mcp_agent_mail/__main__.py`.
3. Map agent/tool runtime through: `AGENTS.md`, `SKILL.md`, `scripts/hooks/check_inbox.sh`.
4. Inspect retrieval/memory/indexing through: `web/index.html`, `tests/test_git_index_lock.py`, `src/mcp_agent_mail/viewer_assets/index.html`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/conftest.py`, `tests/test_ack_views_details.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Asynchronous coordination layer for AI coding agents identities, inboxes, searchable threads, and advisory file leases o. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, docker-compose.yml, Makefile, README.md이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
