# ai-frendly-datahub/KoreanNLPMCPRadar Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Korean NLP and language MCP radar

## 요약

- 조사 단위: `sources/ai-frendly-datahub__KoreanNLPMCPRadar` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 343 files, 57 directories, depth score 113, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/unit/test_mcp_category_config.py, tests/unit/test_mcp_server_source_collector.py, tests/unit/test_mcp_tools.py이고, 의존성 단서는 mcp, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | ai-frendly-datahub/KoreanNLPMCPRadar |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | HTML |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/ai-frendly-datahub__KoreanNLPMCPRadar](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar) |
| Existing report | [reports/korea-trending/repositories/ai-frendly-datahub__KoreanNLPMCPRadar.md](../../../korea-trending/repositories/ai-frendly-datahub__KoreanNLPMCPRadar.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 343 / 57 |
| Max observed depth | 4 |
| Top directories | .github, config, data, fixtures, mcp_server, radar, radar_core, reports, scripts, tests |
| Top extensions | .json: 98, .jsonl: 90, .py: 56, .html: 39, .duckdb: 36, .yml: 5, (none): 4, .yaml: 3, .js: 2, .md: 2, .txt: 2, .cfg: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 27 |
| .github | ci surface | 1 |
| config | top-level component | 1 |
| data | top-level component | 1 |
| fixtures | top-level component | 1 |
| mcp_server | source boundary | 1 |
| radar | top-level component | 1 |
| radar_core | top-level component | 1 |
| reports | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [tests/unit/test_mcp_category_config.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/tests/unit/test_mcp_category_config.py) | mcp signal |
| mcp | [tests/unit/test_mcp_server_source_collector.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/tests/unit/test_mcp_server_source_collector.py) | mcp signal |
| mcp | [tests/unit/test_mcp_tools.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/tests/unit/test_mcp_tools.py) | mcp signal |
| mcp | [reports/korean_nlp_mcp_20260413_quality.json](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/reports/korean_nlp_mcp_20260413_quality.json) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/AGENTS.md) | agentRuntime signal |
| agentRuntime | [mcp_server/tools.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/mcp_server/tools.py) | agentRuntime signal |
| entrypoints | [main.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/main.py) | entrypoints signal |
| entrypoints | [mcp_server/server.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/mcp_server/server.py) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/pyproject.toml) | config signal |
| config | [requirements-dev.txt](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/requirements-dev.txt) | config signal |
| config | [requirements.txt](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/requirements.txt) | config signal |
| ci | [.github/workflows/deploy-pages.yml](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/.github/workflows/deploy-pages.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [main.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/main.py)<br>[mcp_server/server.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/mcp_server/server.py) |
| agentRuntime | 2 | [AGENTS.md](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/AGENTS.md)<br>[mcp_server/tools.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/mcp_server/tools.py) |
| mcp | 212 | [tests/unit/test_mcp_category_config.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/tests/unit/test_mcp_category_config.py)<br>[tests/unit/test_mcp_server_source_collector.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/tests/unit/test_mcp_server_source_collector.py)<br>[tests/unit/test_mcp_tools.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/tests/unit/test_mcp_tools.py)<br>[reports/korean_nlp_mcp_20260413_quality.json](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/reports/korean_nlp_mcp_20260413_quality.json)<br>[reports/korean_nlp_mcp_20260413_summary.json](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/reports/korean_nlp_mcp_20260413_summary.json)<br>[reports/korean_nlp_mcp_20260414_quality.json](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/reports/korean_nlp_mcp_20260414_quality.json)<br>[reports/korean_nlp_mcp_20260422_quality.json](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/reports/korean_nlp_mcp_20260422_quality.json)<br>[reports/korean_nlp_mcp_20260423_quality.json](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/reports/korean_nlp_mcp_20260423_quality.json) |
| retrieval | 4 | [tests/unit/test_search_index.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/tests/unit/test_search_index.py)<br>[reports/index.html](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/reports/index.html)<br>[radar/search_index.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/radar/search_index.py)<br>[radar/templates/index.html](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/radar/templates/index.html) |
| spec | 2 | [requirements-dev.txt](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/requirements-dev.txt)<br>[requirements.txt](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/requirements.txt) |
| eval | 77 | [tests/__init__.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/tests/conftest.py)<br>[tests/unit/__init__.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/tests/unit/__init__.py)<br>[tests/unit/test_analyzer.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/tests/unit/test_analyzer.py)<br>[tests/unit/test_check_quality_script.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/tests/unit/test_check_quality_script.py)<br>[tests/unit/test_collector_parallel.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/tests/unit/test_collector_parallel.py)<br>[tests/unit/test_collector_retry.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/tests/unit/test_collector_retry.py)<br>[tests/unit/test_date_storage.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/tests/unit/test_date_storage.py) |
| security | 0 | not obvious |
| ci | 5 | [.github/workflows/deploy-pages.yml](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/.github/workflows/deploy-pages.yml)<br>[.github/workflows/health-check.yml](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/.github/workflows/health-check.yml)<br>[.github/workflows/pr-checks.yml](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/.github/workflows/pr-checks.yml)<br>[.github/workflows/radar-crawler.yml](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/.github/workflows/radar-crawler.yml)<br>[.github/workflows/release.yml](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 1 | [AGENTS.md](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/AGENTS.md) |
| docs | 1 | [README.md](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/README.md) |
| config | 3 | [pyproject.toml](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/pyproject.toml)<br>[requirements-dev.txt](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/requirements-dev.txt)<br>[requirements.txt](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 77 | [tests/__init__.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/tests/conftest.py)<br>[tests/unit/__init__.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/tests/unit/__init__.py)<br>[tests/unit/test_analyzer.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/tests/unit/test_analyzer.py)<br>[tests/unit/test_check_quality_script.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/tests/unit/test_check_quality_script.py)<br>[tests/unit/test_collector_parallel.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/tests/unit/test_collector_parallel.py) |
| CI workflows | 5 | [.github/workflows/deploy-pages.yml](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/.github/workflows/deploy-pages.yml)<br>[.github/workflows/health-check.yml](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/.github/workflows/health-check.yml)<br>[.github/workflows/pr-checks.yml](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/.github/workflows/pr-checks.yml)<br>[.github/workflows/radar-crawler.yml](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/.github/workflows/radar-crawler.yml)<br>[.github/workflows/release.yml](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/.github/workflows/release.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/unit/test_mcp_category_config.py`, `tests/unit/test_mcp_server_source_collector.py`, `tests/unit/test_mcp_tools.py`.
2. Trace execution through entrypoints: `main.py`, `mcp_server/server.py`.
3. Map agent/tool runtime through: `AGENTS.md`, `mcp_server/tools.py`.
4. Inspect retrieval/memory/indexing through: `tests/unit/test_search_index.py`, `reports/index.html`, `radar/search_index.py`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/conftest.py`, `tests/unit/__init__.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Korean NLP and language MCP radar. 핵심 구조 신호는 HTML, pyproject.toml, requirements.txt, README.md, AGENTS.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
