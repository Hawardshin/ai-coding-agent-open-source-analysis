# jacob-bd/notebooklm-mcp-cli Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Programmatic access to Google NotebookLM — via command-line interface (CLI), Model Context Protocol (MCP) server, and AI agent skills.

## 요약

- 조사 단위: `sources/jacob-bd__notebooklm-mcp-cli` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 205 files, 22 directories, depth score 104, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/test_mcp_auth_studio_failures.py, tests/test_mcp_e2e.py, tests/test_mcp_file_upload.py이고, 의존성 단서는 mcp, pydantic, typer, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | jacob-bd/notebooklm-mcp-cli |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | 4941 |
| Forks | 772 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/jacob-bd__notebooklm-mcp-cli](../../../../sources/jacob-bd__notebooklm-mcp-cli) |
| Existing report | [reports/global-trending/repositories/jacob-bd__notebooklm-mcp-cli.md](../../../global-trending/repositories/jacob-bd__notebooklm-mcp-cli.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 205 / 22 |
| Max observed depth | 5 |
| Top directories | .github, desktop-extension, docs, scripts, src, tests |
| Top extensions | .py: 171, .md: 23, .yml: 4, (none): 2, .jpg: 1, .json: 1, .lock: 1, .toml: 1, .txt: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 54 |
| src | source boundary | 51 |
| docs | documentation surface | 14 |
| .github | ci surface | 1 |
| desktop-extension | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | nlm | nlm |
| utility | pyproject.toml | notebooklm-mcp | notebooklm-mcp |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | typer |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [tests/test_mcp_auth_studio_failures.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_mcp_auth_studio_failures.py) | mcp signal |
| mcp | [tests/test_mcp_e2e.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_mcp_e2e.py) | mcp signal |
| mcp | [tests/test_mcp_file_upload.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_mcp_file_upload.py) | mcp signal |
| mcp | [tests/test_mcp_sources.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_mcp_sources.py) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/jacob-bd__notebooklm-mcp-cli/AGENTS.md) | agentRuntime signal |
| agentRuntime | [src/notebooklm_tools/mcp/tools/__init__.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/src/notebooklm_tools/mcp/tools/__init__.py) | agentRuntime signal |
| agentRuntime | [src/notebooklm_tools/mcp/tools/_utils.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/src/notebooklm_tools/mcp/tools/_utils.py) | agentRuntime signal |
| agentRuntime | [src/notebooklm_tools/mcp/tools/auth.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/src/notebooklm_tools/mcp/tools/auth.py) | agentRuntime signal |
| entrypoints | [src/notebooklm_tools/mcp/server.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/src/notebooklm_tools/mcp/server.py) | entrypoints signal |
| entrypoints | [src/notebooklm_tools/mcp/tools/server.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/src/notebooklm_tools/mcp/tools/server.py) | entrypoints signal |
| entrypoints | [src/notebooklm_tools/cli/main.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/src/notebooklm_tools/cli/main.py) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/jacob-bd__notebooklm-mcp-cli/CLAUDE.md) | instruction signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [src/notebooklm_tools/mcp/server.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/src/notebooklm_tools/mcp/server.py)<br>[src/notebooklm_tools/mcp/tools/server.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/src/notebooklm_tools/mcp/tools/server.py)<br>[src/notebooklm_tools/cli/main.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/src/notebooklm_tools/cli/main.py) |
| agentRuntime | 23 | [AGENTS.md](../../../../sources/jacob-bd__notebooklm-mcp-cli/AGENTS.md)<br>[src/notebooklm_tools/mcp/tools/__init__.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/src/notebooklm_tools/mcp/tools/__init__.py)<br>[src/notebooklm_tools/mcp/tools/_utils.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/src/notebooklm_tools/mcp/tools/_utils.py)<br>[src/notebooklm_tools/mcp/tools/auth.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/src/notebooklm_tools/mcp/tools/auth.py)<br>[src/notebooklm_tools/mcp/tools/batch.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/src/notebooklm_tools/mcp/tools/batch.py)<br>[src/notebooklm_tools/mcp/tools/chat.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/src/notebooklm_tools/mcp/tools/chat.py)<br>[src/notebooklm_tools/mcp/tools/cross_notebook.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/src/notebooklm_tools/mcp/tools/cross_notebook.py)<br>[src/notebooklm_tools/mcp/tools/downloads.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/src/notebooklm_tools/mcp/tools/downloads.py) |
| mcp | 28 | [tests/test_mcp_auth_studio_failures.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_mcp_auth_studio_failures.py)<br>[tests/test_mcp_e2e.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_mcp_e2e.py)<br>[tests/test_mcp_file_upload.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_mcp_file_upload.py)<br>[tests/test_mcp_sources.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_mcp_sources.py)<br>[tests/test_mcp_studio.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_mcp_studio.py)<br>[src/notebooklm_tools/mcp/__init__.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/src/notebooklm_tools/mcp/__init__.py)<br>[src/notebooklm_tools/mcp/server.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/src/notebooklm_tools/mcp/server.py)<br>[src/notebooklm_tools/mcp/tools/__init__.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/src/notebooklm_tools/mcp/tools/__init__.py) |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 72 | [tests/test_api_client.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_api_client.py)<br>[tests/test_auth_browser.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_auth_browser.py)<br>[tests/test_auth_migration.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_auth_migration.py)<br>[tests/test_cdp_proxy_bypass.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_cdp_proxy_bypass.py)<br>[tests/test_cdp_url_check.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_cdp_url_check.py)<br>[tests/test_coerce_list.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_coerce_list.py)<br>[tests/test_cookie_parsing.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_cookie_parsing.py)<br>[tests/test_download_integration.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_download_integration.py) |
| security | 12 | [tests/test_auth_browser.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_auth_browser.py)<br>[tests/test_auth_migration.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_auth_migration.py)<br>[tests/test_mcp_auth_studio_failures.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_mcp_auth_studio_failures.py)<br>[tests/test_profile_aware_headless_auth.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_profile_aware_headless_auth.py)<br>[tests/services/test_auth_health.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/services/test_auth_health.py)<br>[tests/services/test_auth_service.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/services/test_auth_service.py)<br>[tests/core/test_auth_check.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/core/test_auth_check.py)<br>[tests/core/test_auth_guard.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/core/test_auth_guard.py) |
| ci | 4 | [.github/workflows/lint-test.yml](../../../../sources/jacob-bd__notebooklm-mcp-cli/.github/workflows/lint-test.yml)<br>[.github/workflows/publish.yml](../../../../sources/jacob-bd__notebooklm-mcp-cli/.github/workflows/publish.yml)<br>[.github/workflows/release-gate.yml](../../../../sources/jacob-bd__notebooklm-mcp-cli/.github/workflows/release-gate.yml)<br>[.github/workflows/version-check.yml](../../../../sources/jacob-bd__notebooklm-mcp-cli/.github/workflows/version-check.yml) |
| container | 0 | not obvious |
| instruction | 3 | [AGENTS.md](../../../../sources/jacob-bd__notebooklm-mcp-cli/AGENTS.md)<br>[CLAUDE.md](../../../../sources/jacob-bd__notebooklm-mcp-cli/CLAUDE.md)<br>[GEMINI.md](../../../../sources/jacob-bd__notebooklm-mcp-cli/GEMINI.md) |
| docs | 12 | [README.md](../../../../sources/jacob-bd__notebooklm-mcp-cli/README.md)<br>[docs/API_REFERENCE.md](../../../../sources/jacob-bd__notebooklm-mcp-cli/docs/API_REFERENCE.md)<br>[docs/AUTHENTICATION.md](../../../../sources/jacob-bd__notebooklm-mcp-cli/docs/AUTHENTICATION.md)<br>[docs/CLI_GUIDE.md](../../../../sources/jacob-bd__notebooklm-mcp-cli/docs/CLI_GUIDE.md)<br>[docs/FILE_UPLOAD_IMPLEMENTATION.md](../../../../sources/jacob-bd__notebooklm-mcp-cli/docs/FILE_UPLOAD_IMPLEMENTATION.md)<br>[docs/GETTING_STARTED.md](../../../../sources/jacob-bd__notebooklm-mcp-cli/docs/GETTING_STARTED.md)<br>[docs/KNOWN_ISSUES.md](../../../../sources/jacob-bd__notebooklm-mcp-cli/docs/KNOWN_ISSUES.md)<br>[docs/MCP_CLI_TEST_PLAN.md](../../../../sources/jacob-bd__notebooklm-mcp-cli/docs/MCP_CLI_TEST_PLAN.md) |
| config | 2 | [pyproject.toml](../../../../sources/jacob-bd__notebooklm-mcp-cli/pyproject.toml)<br>[uv.lock](../../../../sources/jacob-bd__notebooklm-mcp-cli/uv.lock) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 72 | [tests/test_api_client.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_api_client.py)<br>[tests/test_auth_browser.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_auth_browser.py)<br>[tests/test_auth_migration.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_auth_migration.py)<br>[tests/test_cdp_proxy_bypass.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_cdp_proxy_bypass.py)<br>[tests/test_cdp_url_check.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_cdp_url_check.py)<br>[tests/test_coerce_list.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_coerce_list.py) |
| CI workflows | 4 | [.github/workflows/lint-test.yml](../../../../sources/jacob-bd__notebooklm-mcp-cli/.github/workflows/lint-test.yml)<br>[.github/workflows/publish.yml](../../../../sources/jacob-bd__notebooklm-mcp-cli/.github/workflows/publish.yml)<br>[.github/workflows/release-gate.yml](../../../../sources/jacob-bd__notebooklm-mcp-cli/.github/workflows/release-gate.yml)<br>[.github/workflows/version-check.yml](../../../../sources/jacob-bd__notebooklm-mcp-cli/.github/workflows/version-check.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 12 | [tests/test_auth_browser.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_auth_browser.py)<br>[tests/test_auth_migration.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_auth_migration.py)<br>[tests/test_mcp_auth_studio_failures.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_mcp_auth_studio_failures.py)<br>[tests/test_profile_aware_headless_auth.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_profile_aware_headless_auth.py)<br>[tests/services/test_auth_health.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/services/test_auth_health.py)<br>[tests/services/test_auth_service.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/services/test_auth_service.py) |
| Agent instructions | 3 | [AGENTS.md](../../../../sources/jacob-bd__notebooklm-mcp-cli/AGENTS.md)<br>[CLAUDE.md](../../../../sources/jacob-bd__notebooklm-mcp-cli/CLAUDE.md)<br>[GEMINI.md](../../../../sources/jacob-bd__notebooklm-mcp-cli/GEMINI.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/test_mcp_auth_studio_failures.py`, `tests/test_mcp_e2e.py`, `tests/test_mcp_file_upload.py`.
2. Trace execution through entrypoints: `src/notebooklm_tools/mcp/server.py`, `src/notebooklm_tools/mcp/tools/server.py`, `src/notebooklm_tools/cli/main.py`.
3. Map agent/tool runtime through: `AGENTS.md`, `src/notebooklm_tools/mcp/tools/__init__.py`, `src/notebooklm_tools/mcp/tools/_utils.py`.
4. Verify behavior through test/eval files: `tests/test_api_client.py`, `tests/test_auth_browser.py`, `tests/test_auth_migration.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Programmatic access to Google NotebookLM — via command line interface CLI , Model Context Protocol MCP server, and AI ag. 핵심 구조 신호는 Python, pyproject.toml, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
