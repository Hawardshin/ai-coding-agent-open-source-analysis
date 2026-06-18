# Shelpuk-AI-Technology-Consulting/kindly-web-search-mcp-server Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Kindly Web Search MCP Server: Web search + robust content retrieval for AI coding tools (Claude Code, Codex, Cursor, GitHub Copilot, Gemini, etc.) and AI agents (Claude Desktop, OpenClaw, Hermes, etc.). Supports Serper, Tavily, and SearXNG.

## 요약

- 조사 단위: `sources/Shelpuk-AI-Technology-Consulting__kindly-web-search-mcp-server` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 60 files, 9 directories, depth score 97, key references 10개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=src/kindly_web_search_mcp_server/__init__.py, src/kindly_web_search_mcp_server/__main__.py, src/kindly_web_search_mcp_server/cli.py이고, 의존성 단서는 codex, mcp, pydantic, click, 검증/운영 단서는 test/eval 경로가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Shelpuk-AI-Technology-Consulting/kindly-web-search-mcp-server |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 345 |
| Forks | 22 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/Shelpuk-AI-Technology-Consulting__kindly-web-search-mcp-server](../../../../sources/Shelpuk-AI-Technology-Consulting__kindly-web-search-mcp-server) |
| Existing report | [reports/global-trending/repositories/Shelpuk-AI-Technology-Consulting__kindly-web-search-mcp-server.md](../../../global-trending/repositories/Shelpuk-AI-Technology-Consulting__kindly-web-search-mcp-server.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 60 / 9 |
| Max observed depth | 4 |
| Top directories | assets, examples, src, tests |
| Top extensions | .py: 51, (none): 3, .example: 1, .json: 1, .md: 1, .png: 1, .toml: 1, .txt: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 30 |
| tests | validation surface | 25 |
| assets | top-level component | 1 |
| examples | top-level component | 1 |
| examples/script_run_mcp_tools.py | examples workspace | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | pyproject.toml | mcp-server | mcp-server |
| utility | pyproject.toml | mcp-web-search | mcp-web-search |
| utility | pyproject.toml | kindly-web-search | kindly-web-search |
| serve-dev | pyproject.toml | kindly-web-search-mcp-server | kindly-web-search-mcp-server |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | mcp, codex |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | click |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [src/kindly_web_search_mcp_server/__init__.py](../../../../sources/Shelpuk-AI-Technology-Consulting__kindly-web-search-mcp-server/src/kindly_web_search_mcp_server/__init__.py) | mcp signal |
| mcp | [src/kindly_web_search_mcp_server/__main__.py](../../../../sources/Shelpuk-AI-Technology-Consulting__kindly-web-search-mcp-server/src/kindly_web_search_mcp_server/__main__.py) | mcp signal |
| mcp | [src/kindly_web_search_mcp_server/cli.py](../../../../sources/Shelpuk-AI-Technology-Consulting__kindly-web-search-mcp-server/src/kindly_web_search_mcp_server/cli.py) | mcp signal |
| mcp | [src/kindly_web_search_mcp_server/models.py](../../../../sources/Shelpuk-AI-Technology-Consulting__kindly-web-search-mcp-server/src/kindly_web_search_mcp_server/models.py) | mcp signal |
| entrypoints | [src/kindly_web_search_mcp_server/server.py](../../../../sources/Shelpuk-AI-Technology-Consulting__kindly-web-search-mcp-server/src/kindly_web_search_mcp_server/server.py) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/Shelpuk-AI-Technology-Consulting__kindly-web-search-mcp-server/pyproject.toml) | config signal |
| config | [requirements.txt](../../../../sources/Shelpuk-AI-Technology-Consulting__kindly-web-search-mcp-server/requirements.txt) | config signal |
| container | [Dockerfile](../../../../sources/Shelpuk-AI-Technology-Consulting__kindly-web-search-mcp-server/Dockerfile) | container support |
| eval | [tests/__init__.py](../../../../sources/Shelpuk-AI-Technology-Consulting__kindly-web-search-mcp-server/tests/__init__.py) | eval support |
| eval | [tests/conftest.py](../../../../sources/Shelpuk-AI-Technology-Consulting__kindly-web-search-mcp-server/tests/conftest.py) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [src/kindly_web_search_mcp_server/__main__.py](../../../../sources/Shelpuk-AI-Technology-Consulting__kindly-web-search-mcp-server/src/kindly_web_search_mcp_server/__main__.py)<br>[src/kindly_web_search_mcp_server/server.py](../../../../sources/Shelpuk-AI-Technology-Consulting__kindly-web-search-mcp-server/src/kindly_web_search_mcp_server/server.py) |
| agentRuntime | 0 | not obvious |
| mcp | 28 | [src/kindly_web_search_mcp_server/__init__.py](../../../../sources/Shelpuk-AI-Technology-Consulting__kindly-web-search-mcp-server/src/kindly_web_search_mcp_server/__init__.py)<br>[src/kindly_web_search_mcp_server/__main__.py](../../../../sources/Shelpuk-AI-Technology-Consulting__kindly-web-search-mcp-server/src/kindly_web_search_mcp_server/__main__.py)<br>[src/kindly_web_search_mcp_server/cli.py](../../../../sources/Shelpuk-AI-Technology-Consulting__kindly-web-search-mcp-server/src/kindly_web_search_mcp_server/cli.py)<br>[src/kindly_web_search_mcp_server/models.py](../../../../sources/Shelpuk-AI-Technology-Consulting__kindly-web-search-mcp-server/src/kindly_web_search_mcp_server/models.py)<br>[src/kindly_web_search_mcp_server/server.py](../../../../sources/Shelpuk-AI-Technology-Consulting__kindly-web-search-mcp-server/src/kindly_web_search_mcp_server/server.py)<br>[src/kindly_web_search_mcp_server/settings.py](../../../../sources/Shelpuk-AI-Technology-Consulting__kindly-web-search-mcp-server/src/kindly_web_search_mcp_server/settings.py)<br>[src/kindly_web_search_mcp_server/utils/__init__.py](../../../../sources/Shelpuk-AI-Technology-Consulting__kindly-web-search-mcp-server/src/kindly_web_search_mcp_server/utils/__init__.py)<br>[src/kindly_web_search_mcp_server/utils/diagnostics.py](../../../../sources/Shelpuk-AI-Technology-Consulting__kindly-web-search-mcp-server/src/kindly_web_search_mcp_server/utils/diagnostics.py) |
| retrieval | 0 | not obvious |
| spec | 1 | [requirements.txt](../../../../sources/Shelpuk-AI-Technology-Consulting__kindly-web-search-mcp-server/requirements.txt) |
| eval | 23 | [tests/__init__.py](../../../../sources/Shelpuk-AI-Technology-Consulting__kindly-web-search-mcp-server/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/Shelpuk-AI-Technology-Consulting__kindly-web-search-mcp-server/tests/conftest.py)<br>[tests/test_arxiv.py](../../../../sources/Shelpuk-AI-Technology-Consulting__kindly-web-search-mcp-server/tests/test_arxiv.py)<br>[tests/test_content_resolver_universal_fallback.py](../../../../sources/Shelpuk-AI-Technology-Consulting__kindly-web-search-mcp-server/tests/test_content_resolver_universal_fallback.py)<br>[tests/test_github_discussions.py](../../../../sources/Shelpuk-AI-Technology-Consulting__kindly-web-search-mcp-server/tests/test_github_discussions.py)<br>[tests/test_github_issues.py](../../../../sources/Shelpuk-AI-Technology-Consulting__kindly-web-search-mcp-server/tests/test_github_issues.py)<br>[tests/test_live_fetch_urls.py](../../../../sources/Shelpuk-AI-Technology-Consulting__kindly-web-search-mcp-server/tests/test_live_fetch_urls.py)<br>[tests/test_nodriver_worker_sandbox.py](../../../../sources/Shelpuk-AI-Technology-Consulting__kindly-web-search-mcp-server/tests/test_nodriver_worker_sandbox.py) |
| security | 1 | [tests/test_nodriver_worker_sandbox.py](../../../../sources/Shelpuk-AI-Technology-Consulting__kindly-web-search-mcp-server/tests/test_nodriver_worker_sandbox.py) |
| ci | 0 | not obvious |
| container | 1 | [Dockerfile](../../../../sources/Shelpuk-AI-Technology-Consulting__kindly-web-search-mcp-server/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/Shelpuk-AI-Technology-Consulting__kindly-web-search-mcp-server/README.md) |
| config | 2 | [pyproject.toml](../../../../sources/Shelpuk-AI-Technology-Consulting__kindly-web-search-mcp-server/pyproject.toml)<br>[requirements.txt](../../../../sources/Shelpuk-AI-Technology-Consulting__kindly-web-search-mcp-server/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 23 | [tests/__init__.py](../../../../sources/Shelpuk-AI-Technology-Consulting__kindly-web-search-mcp-server/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/Shelpuk-AI-Technology-Consulting__kindly-web-search-mcp-server/tests/conftest.py)<br>[tests/test_arxiv.py](../../../../sources/Shelpuk-AI-Technology-Consulting__kindly-web-search-mcp-server/tests/test_arxiv.py)<br>[tests/test_content_resolver_universal_fallback.py](../../../../sources/Shelpuk-AI-Technology-Consulting__kindly-web-search-mcp-server/tests/test_content_resolver_universal_fallback.py)<br>[tests/test_github_discussions.py](../../../../sources/Shelpuk-AI-Technology-Consulting__kindly-web-search-mcp-server/tests/test_github_discussions.py)<br>[tests/test_github_issues.py](../../../../sources/Shelpuk-AI-Technology-Consulting__kindly-web-search-mcp-server/tests/test_github_issues.py) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 1 | [Dockerfile](../../../../sources/Shelpuk-AI-Technology-Consulting__kindly-web-search-mcp-server/Dockerfile) |
| Security / policy | 1 | [tests/test_nodriver_worker_sandbox.py](../../../../sources/Shelpuk-AI-Technology-Consulting__kindly-web-search-mcp-server/tests/test_nodriver_worker_sandbox.py) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/kindly_web_search_mcp_server/__init__.py`, `src/kindly_web_search_mcp_server/__main__.py`, `src/kindly_web_search_mcp_server/cli.py`.
2. Trace execution through entrypoints: `src/kindly_web_search_mcp_server/__main__.py`, `src/kindly_web_search_mcp_server/server.py`.
3. Verify behavior through test/eval files: `tests/__init__.py`, `tests/conftest.py`, `tests/test_arxiv.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Kindly Web Search MCP Server Web search + robust content retrieval for AI coding tools Claude Code, Codex, Cursor, GitHu. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, Dockerfile, README.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
