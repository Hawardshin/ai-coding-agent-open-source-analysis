# MICONNM/openclaw-consensus-mcp Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

9-LLM consensus MCP server. Built by 16yo Korean solo dev.

## 요약

- 조사 단위: `sources/MICONNM__openclaw-consensus-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 24 files, 8 directories, depth score 75, key references 6개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 entrypoints=server.json, src/openclaw_consensus/server.py이고, 의존성 단서는 anthropic, claude, mcp, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 6개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | MICONNM/openclaw-consensus-mcp |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/MICONNM__openclaw-consensus-mcp](../../../../sources/MICONNM__openclaw-consensus-mcp) |
| Existing report | [reports/korea-trending/repositories/MICONNM__openclaw-consensus-mcp.md](../../../korea-trending/repositories/MICONNM__openclaw-consensus-mcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 24 / 8 |
| Max observed depth | 3 |
| Top directories | .github, assets, docs, src, tests |
| Top extensions | .md: 8, .py: 4, .yml: 4, (none): 4, .json: 1, .png: 1, .toml: 1, .yaml: 1 |
| Source patterns | cli-first, api/server, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 2 |
| src | source boundary | 2 |
| tests | validation surface | 2 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | openclaw-consensus | openclaw-consensus |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | anthropic, claude |
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
| entrypoints | [server.json](../../../../sources/MICONNM__openclaw-consensus-mcp/server.json) | entrypoints signal |
| entrypoints | [src/openclaw_consensus/server.py](../../../../sources/MICONNM__openclaw-consensus-mcp/src/openclaw_consensus/server.py) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/MICONNM__openclaw-consensus-mcp/pyproject.toml) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/MICONNM__openclaw-consensus-mcp/.github/workflows/ci.yml) | ci support |
| container | [Dockerfile](../../../../sources/MICONNM__openclaw-consensus-mcp/Dockerfile) | container support |
| eval | [tests/test_smoke.py](../../../../sources/MICONNM__openclaw-consensus-mcp/tests/test_smoke.py) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [server.json](../../../../sources/MICONNM__openclaw-consensus-mcp/server.json)<br>[src/openclaw_consensus/server.py](../../../../sources/MICONNM__openclaw-consensus-mcp/src/openclaw_consensus/server.py) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 1 | [tests/test_smoke.py](../../../../sources/MICONNM__openclaw-consensus-mcp/tests/test_smoke.py) |
| security | 1 | [SECURITY.md](../../../../sources/MICONNM__openclaw-consensus-mcp/SECURITY.md) |
| ci | 1 | [.github/workflows/ci.yml](../../../../sources/MICONNM__openclaw-consensus-mcp/.github/workflows/ci.yml) |
| container | 1 | [Dockerfile](../../../../sources/MICONNM__openclaw-consensus-mcp/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 2 | [README.md](../../../../sources/MICONNM__openclaw-consensus-mcp/README.md)<br>[docs/maintainer-workflow.md](../../../../sources/MICONNM__openclaw-consensus-mcp/docs/maintainer-workflow.md) |
| config | 1 | [pyproject.toml](../../../../sources/MICONNM__openclaw-consensus-mcp/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1 | [tests/test_smoke.py](../../../../sources/MICONNM__openclaw-consensus-mcp/tests/test_smoke.py) |
| CI workflows | 1 | [.github/workflows/ci.yml](../../../../sources/MICONNM__openclaw-consensus-mcp/.github/workflows/ci.yml) |
| Containers / deploy | 1 | [Dockerfile](../../../../sources/MICONNM__openclaw-consensus-mcp/Dockerfile) |
| Security / policy | 1 | [SECURITY.md](../../../../sources/MICONNM__openclaw-consensus-mcp/SECURITY.md) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `server.json`, `src/openclaw_consensus/server.py`, `pyproject.toml`.
2. Trace execution through entrypoints: `server.json`, `src/openclaw_consensus/server.py`.
3. Verify behavior through test/eval files: `tests/test_smoke.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 9 LLM consensus MCP server. Built by 16yo Korean solo dev.. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, README.md, LICENSE, anthropic이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
