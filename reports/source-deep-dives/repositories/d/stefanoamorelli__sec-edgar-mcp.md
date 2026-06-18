# stefanoamorelli/sec-edgar-mcp Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

A SEC EDGAR MCP (Model Context Protocol) Server

## 요약

- 조사 단위: `sources/stefanoamorelli__sec-edgar-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 75 files, 17 directories, depth score 110, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=sec-edgar-mcp-logo.png, sec_edgar_mcp/__init__.py, sec_edgar_mcp/config.py이고, 의존성 단서는 mcp, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | stefanoamorelli/sec-edgar-mcp |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 319 |
| Forks | 88 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/stefanoamorelli__sec-edgar-mcp](../../../../sources/stefanoamorelli__sec-edgar-mcp) |
| Existing report | [reports/global-trending/repositories/stefanoamorelli__sec-edgar-mcp.md](../../../global-trending/repositories/stefanoamorelli__sec-edgar-mcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 75 / 17 |
| Max observed depth | 4 |
| Top directories | .github, conda, docs, evals, sec_edgar_mcp, tests |
| Top extensions | .py: 21, .mdx: 17, .yml: 8, (none): 6, .md: 5, .json: 4, .png: 3, .yaml: 3, .bat: 2, .cff: 1, .example: 1, .ini: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 26 |
| tests | validation surface | 3 |
| .github | ci surface | 1 |
| conda | top-level component | 1 |
| evals | top-level component | 1 |
| sec_edgar_mcp | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | sec-edgar-mcp | sec-edgar-mcp |


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
| mcp | [sec-edgar-mcp-logo.png](../../../../sources/stefanoamorelli__sec-edgar-mcp/sec-edgar-mcp-logo.png) | mcp signal |
| mcp | [sec_edgar_mcp/__init__.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/sec_edgar_mcp/__init__.py) | mcp signal |
| mcp | [sec_edgar_mcp/config.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/sec_edgar_mcp/config.py) | mcp signal |
| mcp | [sec_edgar_mcp/document_parser.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/sec_edgar_mcp/document_parser.py) | mcp signal |
| agentRuntime | [sec_edgar_mcp/tools/__init__.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/sec_edgar_mcp/tools/__init__.py) | agentRuntime signal |
| agentRuntime | [sec_edgar_mcp/tools/base.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/sec_edgar_mcp/tools/base.py) | agentRuntime signal |
| agentRuntime | [sec_edgar_mcp/tools/company.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/sec_edgar_mcp/tools/company.py) | agentRuntime signal |
| agentRuntime | [sec_edgar_mcp/tools/filings.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/sec_edgar_mcp/tools/filings.py) | agentRuntime signal |
| entrypoints | [server.json](../../../../sources/stefanoamorelli__sec-edgar-mcp/server.json) | entrypoints signal |
| entrypoints | [sec_edgar_mcp/server.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/sec_edgar_mcp/server.py) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/stefanoamorelli__sec-edgar-mcp/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/stefanoamorelli__sec-edgar-mcp/uv.lock) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [server.json](../../../../sources/stefanoamorelli__sec-edgar-mcp/server.json)<br>[sec_edgar_mcp/server.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/sec_edgar_mcp/server.py) |
| agentRuntime | 10 | [sec_edgar_mcp/tools/__init__.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/sec_edgar_mcp/tools/__init__.py)<br>[sec_edgar_mcp/tools/base.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/sec_edgar_mcp/tools/base.py)<br>[sec_edgar_mcp/tools/company.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/sec_edgar_mcp/tools/company.py)<br>[sec_edgar_mcp/tools/filings.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/sec_edgar_mcp/tools/filings.py)<br>[sec_edgar_mcp/tools/financial.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/sec_edgar_mcp/tools/financial.py)<br>[sec_edgar_mcp/tools/insider_complex.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/sec_edgar_mcp/tools/insider_complex.py)<br>[sec_edgar_mcp/tools/insider.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/sec_edgar_mcp/tools/insider.py)<br>[sec_edgar_mcp/tools/xbrl.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/sec_edgar_mcp/tools/xbrl.py) |
| mcp | 22 | [sec-edgar-mcp-logo.png](../../../../sources/stefanoamorelli__sec-edgar-mcp/sec-edgar-mcp-logo.png)<br>[sec_edgar_mcp/__init__.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/sec_edgar_mcp/__init__.py)<br>[sec_edgar_mcp/config.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/sec_edgar_mcp/config.py)<br>[sec_edgar_mcp/document_parser.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/sec_edgar_mcp/document_parser.py)<br>[sec_edgar_mcp/server.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/sec_edgar_mcp/server.py)<br>[sec_edgar_mcp/utils/__init__.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/sec_edgar_mcp/utils/__init__.py)<br>[sec_edgar_mcp/utils/cache.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/sec_edgar_mcp/utils/cache.py)<br>[sec_edgar_mcp/utils/constants.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/sec_edgar_mcp/utils/constants.py) |
| retrieval | 0 | not obvious |
| spec | 1 | [docs/concepts/architecture.mdx](../../../../sources/stefanoamorelli__sec-edgar-mcp/docs/concepts/architecture.mdx) |
| eval | 2 | [tests/__init__.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/tests/__init__.py)<br>[tests/test_base_parse_date.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/tests/test_base_parse_date.py) |
| security | 1 | [SECURITY.md](../../../../sources/stefanoamorelli__sec-edgar-mcp/SECURITY.md) |
| ci | 7 | [.github/workflows/ci.yml](../../../../sources/stefanoamorelli__sec-edgar-mcp/.github/workflows/ci.yml)<br>[.github/workflows/docker-publish.yml](../../../../sources/stefanoamorelli__sec-edgar-mcp/.github/workflows/docker-publish.yml)<br>[.github/workflows/docs.yml](../../../../sources/stefanoamorelli__sec-edgar-mcp/.github/workflows/docs.yml)<br>[.github/workflows/evals.yml](../../../../sources/stefanoamorelli__sec-edgar-mcp/.github/workflows/evals.yml)<br>[.github/workflows/lint.yml](../../../../sources/stefanoamorelli__sec-edgar-mcp/.github/workflows/lint.yml)<br>[.github/workflows/publish_conda.yml](../../../../sources/stefanoamorelli__sec-edgar-mcp/.github/workflows/publish_conda.yml)<br>[.github/workflows/publish_pypi.yml](../../../../sources/stefanoamorelli__sec-edgar-mcp/.github/workflows/publish_pypi.yml) |
| container | 1 | [Dockerfile](../../../../sources/stefanoamorelli__sec-edgar-mcp/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 23 | [README.md](../../../../sources/stefanoamorelli__sec-edgar-mcp/README.md)<br>[evals/README.md](../../../../sources/stefanoamorelli__sec-edgar-mcp/evals/README.md)<br>[docs/authors.mdx](../../../../sources/stefanoamorelli__sec-edgar-mcp/docs/authors.mdx)<br>[docs/docs.json](../../../../sources/stefanoamorelli__sec-edgar-mcp/docs/docs.json)<br>[docs/favicon.png](../../../../sources/stefanoamorelli__sec-edgar-mcp/docs/favicon.png)<br>[docs/installation.mdx](../../../../sources/stefanoamorelli__sec-edgar-mcp/docs/installation.mdx)<br>[docs/introduction.mdx](../../../../sources/stefanoamorelli__sec-edgar-mcp/docs/introduction.mdx)<br>[docs/license.mdx](../../../../sources/stefanoamorelli__sec-edgar-mcp/docs/license.mdx) |
| config | 3 | [pyproject.toml](../../../../sources/stefanoamorelli__sec-edgar-mcp/pyproject.toml)<br>[uv.lock](../../../../sources/stefanoamorelli__sec-edgar-mcp/uv.lock)<br>[evals/package.json](../../../../sources/stefanoamorelli__sec-edgar-mcp/evals/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 2 | [tests/__init__.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/tests/__init__.py)<br>[tests/test_base_parse_date.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/tests/test_base_parse_date.py) |
| CI workflows | 7 | [.github/workflows/ci.yml](../../../../sources/stefanoamorelli__sec-edgar-mcp/.github/workflows/ci.yml)<br>[.github/workflows/docker-publish.yml](../../../../sources/stefanoamorelli__sec-edgar-mcp/.github/workflows/docker-publish.yml)<br>[.github/workflows/docs.yml](../../../../sources/stefanoamorelli__sec-edgar-mcp/.github/workflows/docs.yml)<br>[.github/workflows/evals.yml](../../../../sources/stefanoamorelli__sec-edgar-mcp/.github/workflows/evals.yml)<br>[.github/workflows/lint.yml](../../../../sources/stefanoamorelli__sec-edgar-mcp/.github/workflows/lint.yml)<br>[.github/workflows/publish_conda.yml](../../../../sources/stefanoamorelli__sec-edgar-mcp/.github/workflows/publish_conda.yml) |
| Containers / deploy | 1 | [Dockerfile](../../../../sources/stefanoamorelli__sec-edgar-mcp/Dockerfile) |
| Security / policy | 1 | [SECURITY.md](../../../../sources/stefanoamorelli__sec-edgar-mcp/SECURITY.md) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `sec-edgar-mcp-logo.png`, `sec_edgar_mcp/__init__.py`, `sec_edgar_mcp/config.py`.
2. Trace execution through entrypoints: `server.json`, `sec_edgar_mcp/server.py`.
3. Map agent/tool runtime through: `sec_edgar_mcp/tools/__init__.py`, `sec_edgar_mcp/tools/base.py`, `sec_edgar_mcp/tools/company.py`.
4. Verify behavior through test/eval files: `tests/__init__.py`, `tests/test_base_parse_date.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 A SEC EDGAR MCP Model Context Protocol Server. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, README.md, LICENSE, mcp이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
