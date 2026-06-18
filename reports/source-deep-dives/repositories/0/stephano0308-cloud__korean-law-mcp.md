# stephano0308-cloud/korean-law-mcp Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

stephano0308-cloud/korean-law-mcp

## 요약

- 조사 단위: `sources/stephano0308-cloud__korean-law-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 27 files, 4 directories, depth score 78, key references 6개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=src/tools.py이고, 의존성 단서는 mcp, fastapi, pydantic, 검증/운영 단서는 test/eval 경로가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 6개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | stephano0308-cloud/korean-law-mcp |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/stephano0308-cloud__korean-law-mcp](../../../../sources/stephano0308-cloud__korean-law-mcp) |
| Existing report | [reports/korea-trending/repositories/stephano0308-cloud__korean-law-mcp.md](../../../korea-trending/repositories/stephano0308-cloud__korean-law-mcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 27 / 4 |
| Max observed depth | 3 |
| Top directories | gpts, scripts, src |
| Top extensions | .py: 13, .md: 6, (none): 2, .example: 1, .json: 1, .ps1: 1, .sh: 1, .toml: 1, .txt: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, spec/docs-driven, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 3 |
| gpts | top-level component | 1 |
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
| webRuntime | fastapi |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| agentRuntime | [src/tools.py](../../../../sources/stephano0308-cloud__korean-law-mcp/src/tools.py) | agentRuntime signal |
| entrypoints | [src/main.py](../../../../sources/stephano0308-cloud__korean-law-mcp/src/main.py) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/stephano0308-cloud__korean-law-mcp/pyproject.toml) | config signal |
| config | [requirements.txt](../../../../sources/stephano0308-cloud__korean-law-mcp/requirements.txt) | config signal |
| container | [Dockerfile](../../../../sources/stephano0308-cloud__korean-law-mcp/Dockerfile) | container support |
| eval | [test_gemini.py](../../../../sources/stephano0308-cloud__korean-law-mcp/test_gemini.py) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [src/main.py](../../../../sources/stephano0308-cloud__korean-law-mcp/src/main.py) |
| agentRuntime | 1 | [src/tools.py](../../../../sources/stephano0308-cloud__korean-law-mcp/src/tools.py) |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 1 | [requirements.txt](../../../../sources/stephano0308-cloud__korean-law-mcp/requirements.txt) |
| eval | 1 | [test_gemini.py](../../../../sources/stephano0308-cloud__korean-law-mcp/test_gemini.py) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 1 | [Dockerfile](../../../../sources/stephano0308-cloud__korean-law-mcp/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 2 | [README.md](../../../../sources/stephano0308-cloud__korean-law-mcp/README.md)<br>[gpts/national-civil-service-hr/README.md](../../../../sources/stephano0308-cloud__korean-law-mcp/gpts/national-civil-service-hr/README.md) |
| config | 2 | [pyproject.toml](../../../../sources/stephano0308-cloud__korean-law-mcp/pyproject.toml)<br>[requirements.txt](../../../../sources/stephano0308-cloud__korean-law-mcp/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1 | [test_gemini.py](../../../../sources/stephano0308-cloud__korean-law-mcp/test_gemini.py) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 1 | [Dockerfile](../../../../sources/stephano0308-cloud__korean-law-mcp/Dockerfile) |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious |
| security | security/policy surface not obvious; agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/tools.py`, `src/main.py`, `pyproject.toml`.
2. Trace execution through entrypoints: `src/main.py`.
3. Map agent/tool runtime through: `src/tools.py`.
4. Verify behavior through test/eval files: `test_gemini.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 설명 메타데이터가 짧습니다. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, Dockerfile, README.md, mcp이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
