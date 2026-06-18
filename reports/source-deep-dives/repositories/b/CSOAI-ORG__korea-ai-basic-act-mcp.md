# CSOAI-ORG/korea-ai-basic-act-mcp Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Korea AI Basic Act — in force since 22 January 2026

## 요약

- 조사 단위: `sources/CSOAI-ORG__korea-ai-basic-act-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 30 files, 5 directories, depth score 88, key references 10개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=.well-known/mcp-server-card.json, .github/workflows/mcp-smithery-publish.yml이고, 의존성 단서는 mcp, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | CSOAI-ORG/korea-ai-basic-act-mcp |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/CSOAI-ORG__korea-ai-basic-act-mcp](../../../../sources/CSOAI-ORG__korea-ai-basic-act-mcp) |
| Existing report | [reports/korea-trending/repositories/CSOAI-ORG__korea-ai-basic-act-mcp.md](../../../korea-trending/repositories/CSOAI-ORG__korea-ai-basic-act-mcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 30 / 5 |
| Max observed depth | 3 |
| Top directories | .github, .well-known, ISSUE_TEMPLATE, tests |
| Top extensions | .json: 6, .yml: 6, .md: 5, .py: 4, (none): 3, .png: 2, .yaml: 2, .toml: 1, .txt: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 4 |
| .github | ci surface | 1 |
| ISSUE_TEMPLATE | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | korea-ai-basic-act-mcp | korea-ai-basic-act-mcp |


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
| mcp | [.well-known/mcp-server-card.json](../../../../sources/CSOAI-ORG__korea-ai-basic-act-mcp/.well-known/mcp-server-card.json) | mcp signal |
| mcp | [.github/workflows/mcp-smithery-publish.yml](../../../../sources/CSOAI-ORG__korea-ai-basic-act-mcp/.github/workflows/mcp-smithery-publish.yml) | mcp signal |
| agentRuntime | [.well-known/agent-card.json](../../../../sources/CSOAI-ORG__korea-ai-basic-act-mcp/.well-known/agent-card.json) | agentRuntime signal |
| agentRuntime | [.well-known/agent.json](../../../../sources/CSOAI-ORG__korea-ai-basic-act-mcp/.well-known/agent.json) | agentRuntime signal |
| entrypoints | [server.json](../../../../sources/CSOAI-ORG__korea-ai-basic-act-mcp/server.json) | entrypoints signal |
| entrypoints | [server.py](../../../../sources/CSOAI-ORG__korea-ai-basic-act-mcp/server.py) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/CSOAI-ORG__korea-ai-basic-act-mcp/pyproject.toml) | config signal |
| ci | [.github/workflows/test.yml](../../../../sources/CSOAI-ORG__korea-ai-basic-act-mcp/.github/workflows/test.yml) | ci support |
| eval | [tests/__init__.py](../../../../sources/CSOAI-ORG__korea-ai-basic-act-mcp/tests/__init__.py) | eval support |
| eval | [tests/test_korea.py](../../../../sources/CSOAI-ORG__korea-ai-basic-act-mcp/tests/test_korea.py) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [server.json](../../../../sources/CSOAI-ORG__korea-ai-basic-act-mcp/server.json)<br>[server.py](../../../../sources/CSOAI-ORG__korea-ai-basic-act-mcp/server.py) |
| agentRuntime | 2 | [.well-known/agent-card.json](../../../../sources/CSOAI-ORG__korea-ai-basic-act-mcp/.well-known/agent-card.json)<br>[.well-known/agent.json](../../../../sources/CSOAI-ORG__korea-ai-basic-act-mcp/.well-known/agent.json) |
| mcp | 2 | [.well-known/mcp-server-card.json](../../../../sources/CSOAI-ORG__korea-ai-basic-act-mcp/.well-known/mcp-server-card.json)<br>[.github/workflows/mcp-smithery-publish.yml](../../../../sources/CSOAI-ORG__korea-ai-basic-act-mcp/.github/workflows/mcp-smithery-publish.yml) |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 4 | [tests/__init__.py](../../../../sources/CSOAI-ORG__korea-ai-basic-act-mcp/tests/__init__.py)<br>[tests/test_korea.py](../../../../sources/CSOAI-ORG__korea-ai-basic-act-mcp/tests/test_korea.py)<br>[tests/test_server.py](../../../../sources/CSOAI-ORG__korea-ai-basic-act-mcp/tests/test_server.py)<br>[.github/workflows/test.yml](../../../../sources/CSOAI-ORG__korea-ai-basic-act-mcp/.github/workflows/test.yml) |
| security | 1 | [SECURITY.md](../../../../sources/CSOAI-ORG__korea-ai-basic-act-mcp/SECURITY.md) |
| ci | 2 | [.github/workflows/mcp-smithery-publish.yml](../../../../sources/CSOAI-ORG__korea-ai-basic-act-mcp/.github/workflows/mcp-smithery-publish.yml)<br>[.github/workflows/test.yml](../../../../sources/CSOAI-ORG__korea-ai-basic-act-mcp/.github/workflows/test.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/CSOAI-ORG__korea-ai-basic-act-mcp/README.md) |
| config | 1 | [pyproject.toml](../../../../sources/CSOAI-ORG__korea-ai-basic-act-mcp/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 4 | [tests/__init__.py](../../../../sources/CSOAI-ORG__korea-ai-basic-act-mcp/tests/__init__.py)<br>[tests/test_korea.py](../../../../sources/CSOAI-ORG__korea-ai-basic-act-mcp/tests/test_korea.py)<br>[tests/test_server.py](../../../../sources/CSOAI-ORG__korea-ai-basic-act-mcp/tests/test_server.py)<br>[.github/workflows/test.yml](../../../../sources/CSOAI-ORG__korea-ai-basic-act-mcp/.github/workflows/test.yml) |
| CI workflows | 2 | [.github/workflows/mcp-smithery-publish.yml](../../../../sources/CSOAI-ORG__korea-ai-basic-act-mcp/.github/workflows/mcp-smithery-publish.yml)<br>[.github/workflows/test.yml](../../../../sources/CSOAI-ORG__korea-ai-basic-act-mcp/.github/workflows/test.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 1 | [SECURITY.md](../../../../sources/CSOAI-ORG__korea-ai-basic-act-mcp/SECURITY.md) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `.well-known/mcp-server-card.json`, `.github/workflows/mcp-smithery-publish.yml`, `.well-known/agent-card.json`.
2. Trace execution through entrypoints: `server.json`, `server.py`.
3. Map agent/tool runtime through: `.well-known/agent-card.json`, `.well-known/agent.json`.
4. Verify behavior through test/eval files: `tests/__init__.py`, `tests/test_korea.py`, `tests/test_server.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Korea AI Basic Act — in force since 22 January 2026. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, mcp, tests이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
