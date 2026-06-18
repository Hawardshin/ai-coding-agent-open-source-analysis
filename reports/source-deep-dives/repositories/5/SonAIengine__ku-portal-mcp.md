# SonAIengine/ku-portal-mcp Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

MCP server for Korea University KUPID portal & Canvas LMS — notices, schedules, library seats, assignments, grades from Claude

## 요약

- 조사 단위: `sources/SonAIengine__ku-portal-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 35 files, 6 directories, depth score 82, key references 9개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/test_mcp_integration.py, ku_portal_mcp/__init__.py, ku_portal_mcp/__main__.py이고, 의존성 단서는 claude, mcp, playwright, 검증/운영 단서는 test/eval 경로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | SonAIengine/ku-portal-mcp |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/SonAIengine__ku-portal-mcp](../../../../sources/SonAIengine__ku-portal-mcp) |
| Existing report | [reports/korea-trending/repositories/SonAIengine__ku-portal-mcp.md](../../../korea-trending/repositories/SonAIengine__ku-portal-mcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 35 / 6 |
| Max observed depth | 3 |
| Top directories | .github, examples, ku_portal_mcp, tests |
| Top extensions | .py: 22, .md: 9, (none): 2, .example: 1, .toml: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 9 |
| .github | ci surface | 1 |
| examples | top-level component | 1 |
| ku_portal_mcp | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | ku-portal-mcp | ku-portal-mcp |


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
| browserAutomation | playwright |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [tests/test_mcp_integration.py](../../../../sources/SonAIengine__ku-portal-mcp/tests/test_mcp_integration.py) | mcp signal |
| mcp | [ku_portal_mcp/__init__.py](../../../../sources/SonAIengine__ku-portal-mcp/ku_portal_mcp/__init__.py) | mcp signal |
| mcp | [ku_portal_mcp/__main__.py](../../../../sources/SonAIengine__ku-portal-mcp/ku_portal_mcp/__main__.py) | mcp signal |
| mcp | [ku_portal_mcp/_storage.py](../../../../sources/SonAIengine__ku-portal-mcp/ku_portal_mcp/_storage.py) | mcp signal |
| entrypoints | [ku_portal_mcp/server.py](../../../../sources/SonAIengine__ku-portal-mcp/ku_portal_mcp/server.py) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/SonAIengine__ku-portal-mcp/CLAUDE.md) | instruction signal |
| config | [pyproject.toml](../../../../sources/SonAIengine__ku-portal-mcp/pyproject.toml) | config signal |
| eval | [tests/test_academic.py](../../../../sources/SonAIengine__ku-portal-mcp/tests/test_academic.py) | eval support |
| eval | [tests/test_courses.py](../../../../sources/SonAIengine__ku-portal-mcp/tests/test_courses.py) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [ku_portal_mcp/__main__.py](../../../../sources/SonAIengine__ku-portal-mcp/ku_portal_mcp/__main__.py)<br>[ku_portal_mcp/server.py](../../../../sources/SonAIengine__ku-portal-mcp/ku_portal_mcp/server.py) |
| agentRuntime | 0 | not obvious |
| mcp | 15 | [tests/test_mcp_integration.py](../../../../sources/SonAIengine__ku-portal-mcp/tests/test_mcp_integration.py)<br>[ku_portal_mcp/__init__.py](../../../../sources/SonAIengine__ku-portal-mcp/ku_portal_mcp/__init__.py)<br>[ku_portal_mcp/__main__.py](../../../../sources/SonAIengine__ku-portal-mcp/ku_portal_mcp/__main__.py)<br>[ku_portal_mcp/_storage.py](../../../../sources/SonAIengine__ku-portal-mcp/ku_portal_mcp/_storage.py)<br>[ku_portal_mcp/academic.py](../../../../sources/SonAIengine__ku-portal-mcp/ku_portal_mcp/academic.py)<br>[ku_portal_mcp/auth.py](../../../../sources/SonAIengine__ku-portal-mcp/ku_portal_mcp/auth.py)<br>[ku_portal_mcp/courses.py](../../../../sources/SonAIengine__ku-portal-mcp/ku_portal_mcp/courses.py)<br>[ku_portal_mcp/dept_notices.py](../../../../sources/SonAIengine__ku-portal-mcp/ku_portal_mcp/dept_notices.py) |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 7 | [tests/test_academic.py](../../../../sources/SonAIengine__ku-portal-mcp/tests/test_academic.py)<br>[tests/test_courses.py](../../../../sources/SonAIengine__ku-portal-mcp/tests/test_courses.py)<br>[tests/test_dept_registry.py](../../../../sources/SonAIengine__ku-portal-mcp/tests/test_dept_registry.py)<br>[tests/test_grades.py](../../../../sources/SonAIengine__ku-portal-mcp/tests/test_grades.py)<br>[tests/test_mcp_integration.py](../../../../sources/SonAIengine__ku-portal-mcp/tests/test_mcp_integration.py)<br>[tests/test_syllabus_structured.py](../../../../sources/SonAIengine__ku-portal-mcp/tests/test_syllabus_structured.py)<br>[tests/test_timetable.py](../../../../sources/SonAIengine__ku-portal-mcp/tests/test_timetable.py) |
| security | 1 | [ku_portal_mcp/auth.py](../../../../sources/SonAIengine__ku-portal-mcp/ku_portal_mcp/auth.py) |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 1 | [CLAUDE.md](../../../../sources/SonAIengine__ku-portal-mcp/CLAUDE.md) |
| docs | 1 | [README.md](../../../../sources/SonAIengine__ku-portal-mcp/README.md) |
| config | 1 | [pyproject.toml](../../../../sources/SonAIengine__ku-portal-mcp/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 7 | [tests/test_academic.py](../../../../sources/SonAIengine__ku-portal-mcp/tests/test_academic.py)<br>[tests/test_courses.py](../../../../sources/SonAIengine__ku-portal-mcp/tests/test_courses.py)<br>[tests/test_dept_registry.py](../../../../sources/SonAIengine__ku-portal-mcp/tests/test_dept_registry.py)<br>[tests/test_grades.py](../../../../sources/SonAIengine__ku-portal-mcp/tests/test_grades.py)<br>[tests/test_mcp_integration.py](../../../../sources/SonAIengine__ku-portal-mcp/tests/test_mcp_integration.py)<br>[tests/test_syllabus_structured.py](../../../../sources/SonAIengine__ku-portal-mcp/tests/test_syllabus_structured.py) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 1 | [ku_portal_mcp/auth.py](../../../../sources/SonAIengine__ku-portal-mcp/ku_portal_mcp/auth.py) |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/SonAIengine__ku-portal-mcp/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/test_mcp_integration.py`, `ku_portal_mcp/__init__.py`, `ku_portal_mcp/__main__.py`.
2. Trace execution through entrypoints: `ku_portal_mcp/__main__.py`, `ku_portal_mcp/server.py`.
3. Verify behavior through test/eval files: `tests/test_academic.py`, `tests/test_courses.py`, `tests/test_dept_registry.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 MCP server for Korea University KUPID portal & Canvas LMS — notices, schedules, library seats, assignments, grades from . 핵심 구조 신호는 Python, pyproject.toml, README.md, CLAUDE.md, LICENSE, mcp이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
