# hypn4/tossinvest-mcp Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

MCP server for Toss Securities (토스증권) Open API: Korean stock (KRX) quotes, holdings, orders & technical analysis for Claude and other AI agents. Read-only by default.

## 요약

- 조사 단위: `sources/hypn4__tossinvest-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 30 files, 6 directories, depth score 93, key references 11개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=tossinvest_mcp/__init__.py, tossinvest_mcp/__main__.py, tossinvest_mcp/analytics.py이고, 의존성 단서는 claude, mcp, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | hypn4/tossinvest-mcp |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/hypn4__tossinvest-mcp](../../../../sources/hypn4__tossinvest-mcp) |
| Existing report | [reports/korea-trending/repositories/hypn4__tossinvest-mcp.md](../../../korea-trending/repositories/hypn4__tossinvest-mcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 30 / 6 |
| Max observed depth | 3 |
| Top directories | .github, scripts, tests, tossinvest_mcp |
| Top extensions | .py: 17, (none): 4, .md: 3, .yml: 2, .example: 1, .json: 1, .lock: 1, .toml: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 9 |
| .github | ci surface | 1 |
| scripts | top-level component | 1 |
| tossinvest_mcp | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | tossinvest-mcp | tossinvest-mcp |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | claude |
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
| mcp | [tossinvest_mcp/__init__.py](../../../../sources/hypn4__tossinvest-mcp/tossinvest_mcp/__init__.py) | mcp signal |
| mcp | [tossinvest_mcp/__main__.py](../../../../sources/hypn4__tossinvest-mcp/tossinvest_mcp/__main__.py) | mcp signal |
| mcp | [tossinvest_mcp/analytics.py](../../../../sources/hypn4__tossinvest-mcp/tossinvest_mcp/analytics.py) | mcp signal |
| mcp | [tossinvest_mcp/auth.py](../../../../sources/hypn4__tossinvest-mcp/tossinvest_mcp/auth.py) | mcp signal |
| entrypoints | [tossinvest_mcp/server.py](../../../../sources/hypn4__tossinvest-mcp/tossinvest_mcp/server.py) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/hypn4__tossinvest-mcp/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/hypn4__tossinvest-mcp/uv.lock) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/hypn4__tossinvest-mcp/.github/workflows/ci.yml) | ci support |
| ci | [.github/workflows/publish.yml](../../../../sources/hypn4__tossinvest-mcp/.github/workflows/publish.yml) | ci support |
| eval | [tossinvest_mcp/spec/openapi.json](../../../../sources/hypn4__tossinvest-mcp/tossinvest_mcp/spec/openapi.json) | eval support |
| eval | [tossinvest_mcp/spec/overview.md](../../../../sources/hypn4__tossinvest-mcp/tossinvest_mcp/spec/overview.md) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [tossinvest_mcp/__main__.py](../../../../sources/hypn4__tossinvest-mcp/tossinvest_mcp/__main__.py)<br>[tossinvest_mcp/server.py](../../../../sources/hypn4__tossinvest-mcp/tossinvest_mcp/server.py) |
| agentRuntime | 0 | not obvious |
| mcp | 12 | [tossinvest_mcp/__init__.py](../../../../sources/hypn4__tossinvest-mcp/tossinvest_mcp/__init__.py)<br>[tossinvest_mcp/__main__.py](../../../../sources/hypn4__tossinvest-mcp/tossinvest_mcp/__main__.py)<br>[tossinvest_mcp/analytics.py](../../../../sources/hypn4__tossinvest-mcp/tossinvest_mcp/analytics.py)<br>[tossinvest_mcp/auth.py](../../../../sources/hypn4__tossinvest-mcp/tossinvest_mcp/auth.py)<br>[tossinvest_mcp/client.py](../../../../sources/hypn4__tossinvest-mcp/tossinvest_mcp/client.py)<br>[tossinvest_mcp/config.py](../../../../sources/hypn4__tossinvest-mcp/tossinvest_mcp/config.py)<br>[tossinvest_mcp/prompts.py](../../../../sources/hypn4__tossinvest-mcp/tossinvest_mcp/prompts.py)<br>[tossinvest_mcp/retry.py](../../../../sources/hypn4__tossinvest-mcp/tossinvest_mcp/retry.py) |
| retrieval | 0 | not obvious |
| spec | 4 | [tossinvest_mcp/spec/openapi.json](../../../../sources/hypn4__tossinvest-mcp/tossinvest_mcp/spec/openapi.json)<br>[tossinvest_mcp/spec/overview.md](../../../../sources/hypn4__tossinvest-mcp/tossinvest_mcp/spec/overview.md)<br>[tossinvest_mcp/spec/SOURCE.md](../../../../sources/hypn4__tossinvest-mcp/tossinvest_mcp/spec/SOURCE.md)<br>[scripts/refresh_spec.py](../../../../sources/hypn4__tossinvest-mcp/scripts/refresh_spec.py) |
| eval | 11 | [tossinvest_mcp/spec/openapi.json](../../../../sources/hypn4__tossinvest-mcp/tossinvest_mcp/spec/openapi.json)<br>[tossinvest_mcp/spec/overview.md](../../../../sources/hypn4__tossinvest-mcp/tossinvest_mcp/spec/overview.md)<br>[tossinvest_mcp/spec/SOURCE.md](../../../../sources/hypn4__tossinvest-mcp/tossinvest_mcp/spec/SOURCE.md)<br>[tests/test_analytics.py](../../../../sources/hypn4__tossinvest-mcp/tests/test_analytics.py)<br>[tests/test_auth.py](../../../../sources/hypn4__tossinvest-mcp/tests/test_auth.py)<br>[tests/test_e2e.py](../../../../sources/hypn4__tossinvest-mcp/tests/test_e2e.py)<br>[tests/test_integration.py](../../../../sources/hypn4__tossinvest-mcp/tests/test_integration.py)<br>[tests/test_logging.py](../../../../sources/hypn4__tossinvest-mcp/tests/test_logging.py) |
| security | 2 | [tossinvest_mcp/auth.py](../../../../sources/hypn4__tossinvest-mcp/tossinvest_mcp/auth.py)<br>[tests/test_auth.py](../../../../sources/hypn4__tossinvest-mcp/tests/test_auth.py) |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/hypn4__tossinvest-mcp/.github/workflows/ci.yml)<br>[.github/workflows/publish.yml](../../../../sources/hypn4__tossinvest-mcp/.github/workflows/publish.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/hypn4__tossinvest-mcp/README.md) |
| config | 2 | [pyproject.toml](../../../../sources/hypn4__tossinvest-mcp/pyproject.toml)<br>[uv.lock](../../../../sources/hypn4__tossinvest-mcp/uv.lock) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 11 | [tossinvest_mcp/spec/openapi.json](../../../../sources/hypn4__tossinvest-mcp/tossinvest_mcp/spec/openapi.json)<br>[tossinvest_mcp/spec/overview.md](../../../../sources/hypn4__tossinvest-mcp/tossinvest_mcp/spec/overview.md)<br>[tossinvest_mcp/spec/SOURCE.md](../../../../sources/hypn4__tossinvest-mcp/tossinvest_mcp/spec/SOURCE.md)<br>[tests/test_analytics.py](../../../../sources/hypn4__tossinvest-mcp/tests/test_analytics.py)<br>[tests/test_auth.py](../../../../sources/hypn4__tossinvest-mcp/tests/test_auth.py)<br>[tests/test_e2e.py](../../../../sources/hypn4__tossinvest-mcp/tests/test_e2e.py) |
| CI workflows | 2 | [.github/workflows/ci.yml](../../../../sources/hypn4__tossinvest-mcp/.github/workflows/ci.yml)<br>[.github/workflows/publish.yml](../../../../sources/hypn4__tossinvest-mcp/.github/workflows/publish.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 2 | [tossinvest_mcp/auth.py](../../../../sources/hypn4__tossinvest-mcp/tossinvest_mcp/auth.py)<br>[tests/test_auth.py](../../../../sources/hypn4__tossinvest-mcp/tests/test_auth.py) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tossinvest_mcp/__init__.py`, `tossinvest_mcp/__main__.py`, `tossinvest_mcp/analytics.py`.
2. Trace execution through entrypoints: `tossinvest_mcp/__main__.py`, `tossinvest_mcp/server.py`.
3. Verify behavior through test/eval files: `tossinvest_mcp/spec/openapi.json`, `tossinvest_mcp/spec/overview.md`, `tossinvest_mcp/spec/SOURCE.md`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 MCP server for Toss Securities 토스증권 Open API Korean stock KRX quotes, holdings, orders & technical analysis for Claude a. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, mcp, pydantic이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
