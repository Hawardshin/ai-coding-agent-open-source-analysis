# z0nam/korea-rio-mcp Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Regional Input-Output economic-impact analysis as an MCP server, built on Bank of Korea regional IO tables. Computes production/value-added/employment induced effects (in-region vs out-of-region) for Claude Code, Codex, Gemini CLI.

## 요약

- 조사 단위: `sources/z0nam__korea-rio-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 47 files, 14 directories, depth score 69, key references 7개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=src/rio_mcp/__init__.py, src/rio_mcp/_paths.py, src/rio_mcp/server.py이고, 의존성 단서는 mcp, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | z0nam/korea-rio-mcp |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/z0nam__korea-rio-mcp](../../../../sources/z0nam__korea-rio-mcp) |
| Existing report | [reports/korea-trending/repositories/z0nam__korea-rio-mcp.md](../../../korea-trending/repositories/z0nam__korea-rio-mcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 47 / 14 |
| Max observed depth | 5 |
| Top directories | data, scripts, src, tests |
| Top extensions | .csv: 22, .py: 17, .md: 5, (none): 2, .toml: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 36 |
| tests | validation surface | 4 |
| data | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | korea-rio-mcp | korea-rio-mcp |


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
| mcp | [src/rio_mcp/__init__.py](../../../../sources/z0nam__korea-rio-mcp/src/rio_mcp/__init__.py) | mcp signal |
| mcp | [src/rio_mcp/_paths.py](../../../../sources/z0nam__korea-rio-mcp/src/rio_mcp/_paths.py) | mcp signal |
| mcp | [src/rio_mcp/server.py](../../../../sources/z0nam__korea-rio-mcp/src/rio_mcp/server.py) | mcp signal |
| mcp | [src/rio_mcp/store/__init__.py](../../../../sources/z0nam__korea-rio-mcp/src/rio_mcp/store/__init__.py) | mcp signal |
| config | [pyproject.toml](../../../../sources/z0nam__korea-rio-mcp/pyproject.toml) | config signal |
| eval | [tests/test_golden_jeju.py](../../../../sources/z0nam__korea-rio-mcp/tests/test_golden_jeju.py) | eval support |
| eval | [tests/fixtures/induce_coefficients_jeju_medium.csv](../../../../sources/z0nam__korea-rio-mcp/tests/fixtures/induce_coefficients_jeju_medium.csv) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [src/rio_mcp/server.py](../../../../sources/z0nam__korea-rio-mcp/src/rio_mcp/server.py) |
| agentRuntime | 0 | not obvious |
| mcp | 32 | [src/rio_mcp/__init__.py](../../../../sources/z0nam__korea-rio-mcp/src/rio_mcp/__init__.py)<br>[src/rio_mcp/_paths.py](../../../../sources/z0nam__korea-rio-mcp/src/rio_mcp/_paths.py)<br>[src/rio_mcp/server.py](../../../../sources/z0nam__korea-rio-mcp/src/rio_mcp/server.py)<br>[src/rio_mcp/store/__init__.py](../../../../sources/z0nam__korea-rio-mcp/src/rio_mcp/store/__init__.py)<br>[src/rio_mcp/store/cache.py](../../../../sources/z0nam__korea-rio-mcp/src/rio_mcp/store/cache.py)<br>[src/rio_mcp/engine/__init__.py](../../../../sources/z0nam__korea-rio-mcp/src/rio_mcp/engine/__init__.py)<br>[src/rio_mcp/engine/coefficients.py](../../../../sources/z0nam__korea-rio-mcp/src/rio_mcp/engine/coefficients.py)<br>[src/rio_mcp/engine/defaults.py](../../../../sources/z0nam__korea-rio-mcp/src/rio_mcp/engine/defaults.py) |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 3 | [tests/test_golden_jeju.py](../../../../sources/z0nam__korea-rio-mcp/tests/test_golden_jeju.py)<br>[tests/fixtures/induce_coefficients_jeju_medium.csv](../../../../sources/z0nam__korea-rio-mcp/tests/fixtures/induce_coefficients_jeju_medium.csv)<br>[tests/fixtures/spending_industry_mapping_p09.csv](../../../../sources/z0nam__korea-rio-mcp/tests/fixtures/spending_industry_mapping_p09.csv) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 4 | [README.ko.md](../../../../sources/z0nam__korea-rio-mcp/README.ko.md)<br>[README.md](../../../../sources/z0nam__korea-rio-mcp/README.md)<br>[src/rio_mcp/docs/__init__.py](../../../../sources/z0nam__korea-rio-mcp/src/rio_mcp/docs/__init__.py)<br>[src/rio_mcp/docs/report.py](../../../../sources/z0nam__korea-rio-mcp/src/rio_mcp/docs/report.py) |
| config | 1 | [pyproject.toml](../../../../sources/z0nam__korea-rio-mcp/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 3 | [tests/test_golden_jeju.py](../../../../sources/z0nam__korea-rio-mcp/tests/test_golden_jeju.py)<br>[tests/fixtures/induce_coefficients_jeju_medium.csv](../../../../sources/z0nam__korea-rio-mcp/tests/fixtures/induce_coefficients_jeju_medium.csv)<br>[tests/fixtures/spending_industry_mapping_p09.csv](../../../../sources/z0nam__korea-rio-mcp/tests/fixtures/spending_industry_mapping_p09.csv) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | security/policy surface not obvious; agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/rio_mcp/__init__.py`, `src/rio_mcp/_paths.py`, `src/rio_mcp/server.py`.
2. Trace execution through entrypoints: `src/rio_mcp/server.py`.
3. Verify behavior through test/eval files: `tests/test_golden_jeju.py`, `tests/fixtures/induce_coefficients_jeju_medium.csv`, `tests/fixtures/spending_industry_mapping_p09.csv`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Regional Input Output economic impact analysis as an MCP server, built on Bank of Korea regional IO tables. Computes pro. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, mcp, tests이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
