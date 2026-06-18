# civilian7/korean-people-persona Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Korean persona dataset (NVIDIA Nemotron-Personas-Korea) → SQLite + FTS5 + MCP server for AI agents

## 요약

- 조사 단위: `sources/civilian7__korean-people-persona` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 28 files, 8 directories, depth score 82, key references 11개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 api/server, agent/tool runtime, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 mcp=.mcp.json, src/mcp_server/__init__.py, src/mcp_server/__main__.py이고, 의존성 단서는 mcp, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | civilian7/korean-people-persona |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/civilian7__korean-people-persona](../../../../sources/civilian7__korean-people-persona) |
| Existing report | [reports/korea-trending/repositories/civilian7__korean-people-persona.md](../../../korea-trending/repositories/civilian7__korean-people-persona.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 28 / 8 |
| Max observed depth | 4 |
| Top directories | docs, examples, src |
| Top extensions | .py: 15, .md: 6, .txt: 2, .bat: 1, .json: 1, .ps1: 1, .sh: 1, (none): 1 |
| Source patterns | api/server, agent/tool runtime, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 12 |
| docs | documentation surface | 7 |
| examples/requirements.txt | examples workspace | 2 |
| examples | top-level component | 1 |
| examples/copy_ab_test.py | examples workspace | 1 |
| examples/test_demos.py | examples workspace | 1 |


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
| mcp | [.mcp.json](../../../../sources/civilian7__korean-people-persona/.mcp.json) | mcp signal |
| mcp | [src/mcp_server/__init__.py](../../../../sources/civilian7__korean-people-persona/src/mcp_server/__init__.py) | mcp signal |
| mcp | [src/mcp_server/__main__.py](../../../../sources/civilian7__korean-people-persona/src/mcp_server/__main__.py) | mcp signal |
| mcp | [src/mcp_server/db.py](../../../../sources/civilian7__korean-people-persona/src/mcp_server/db.py) | mcp signal |
| agentRuntime | [src/mcp_server/tools.py](../../../../sources/civilian7__korean-people-persona/src/mcp_server/tools.py) | agentRuntime signal |
| entrypoints | [src/mcp_server/server.py](../../../../sources/civilian7__korean-people-persona/src/mcp_server/server.py) | entrypoints signal |
| entrypoints | [src/convert/__main__.py](../../../../sources/civilian7__korean-people-persona/src/convert/__main__.py) | entrypoints signal |
| config | [requirements.txt](../../../../sources/civilian7__korean-people-persona/requirements.txt) | config signal |
| config | [examples/requirements.txt](../../../../sources/civilian7__korean-people-persona/examples/requirements.txt) | config signal |
| eval | [src/mcp_server/test_smoke.py](../../../../sources/civilian7__korean-people-persona/src/mcp_server/test_smoke.py) | eval support |
| eval | [examples/copy_ab_test.py](../../../../sources/civilian7__korean-people-persona/examples/copy_ab_test.py) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [src/mcp_server/__main__.py](../../../../sources/civilian7__korean-people-persona/src/mcp_server/__main__.py)<br>[src/mcp_server/server.py](../../../../sources/civilian7__korean-people-persona/src/mcp_server/server.py)<br>[src/convert/__main__.py](../../../../sources/civilian7__korean-people-persona/src/convert/__main__.py) |
| agentRuntime | 1 | [src/mcp_server/tools.py](../../../../sources/civilian7__korean-people-persona/src/mcp_server/tools.py) |
| mcp | 7 | [.mcp.json](../../../../sources/civilian7__korean-people-persona/.mcp.json)<br>[src/mcp_server/__init__.py](../../../../sources/civilian7__korean-people-persona/src/mcp_server/__init__.py)<br>[src/mcp_server/__main__.py](../../../../sources/civilian7__korean-people-persona/src/mcp_server/__main__.py)<br>[src/mcp_server/db.py](../../../../sources/civilian7__korean-people-persona/src/mcp_server/db.py)<br>[src/mcp_server/server.py](../../../../sources/civilian7__korean-people-persona/src/mcp_server/server.py)<br>[src/mcp_server/test_smoke.py](../../../../sources/civilian7__korean-people-persona/src/mcp_server/test_smoke.py)<br>[src/mcp_server/tools.py](../../../../sources/civilian7__korean-people-persona/src/mcp_server/tools.py) |
| retrieval | 0 | not obvious |
| spec | 4 | [requirements.txt](../../../../sources/civilian7__korean-people-persona/requirements.txt)<br>[examples/requirements.txt](../../../../sources/civilian7__korean-people-persona/examples/requirements.txt)<br>[docs/superpowers/specs/2026-06-11-llm-agent-use-cases-design.md](../../../../sources/civilian7__korean-people-persona/docs/superpowers/specs/2026-06-11-llm-agent-use-cases-design.md)<br>[docs/superpowers/specs/2026-06-11-persona-demo-samples-design.md](../../../../sources/civilian7__korean-people-persona/docs/superpowers/specs/2026-06-11-persona-demo-samples-design.md) |
| eval | 3 | [src/mcp_server/test_smoke.py](../../../../sources/civilian7__korean-people-persona/src/mcp_server/test_smoke.py)<br>[examples/copy_ab_test.py](../../../../sources/civilian7__korean-people-persona/examples/copy_ab_test.py)<br>[examples/test_demos.py](../../../../sources/civilian7__korean-people-persona/examples/test_demos.py) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 5 | [README.md](../../../../sources/civilian7__korean-people-persona/README.md)<br>[docs/use-cases.md](../../../../sources/civilian7__korean-people-persona/docs/use-cases.md)<br>[docs/superpowers/specs/2026-06-11-llm-agent-use-cases-design.md](../../../../sources/civilian7__korean-people-persona/docs/superpowers/specs/2026-06-11-llm-agent-use-cases-design.md)<br>[docs/superpowers/specs/2026-06-11-persona-demo-samples-design.md](../../../../sources/civilian7__korean-people-persona/docs/superpowers/specs/2026-06-11-persona-demo-samples-design.md)<br>[docs/superpowers/plans/2026-06-11-persona-demo-samples.md](../../../../sources/civilian7__korean-people-persona/docs/superpowers/plans/2026-06-11-persona-demo-samples.md) |
| config | 2 | [requirements.txt](../../../../sources/civilian7__korean-people-persona/requirements.txt)<br>[examples/requirements.txt](../../../../sources/civilian7__korean-people-persona/examples/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 3 | [src/mcp_server/test_smoke.py](../../../../sources/civilian7__korean-people-persona/src/mcp_server/test_smoke.py)<br>[examples/copy_ab_test.py](../../../../sources/civilian7__korean-people-persona/examples/copy_ab_test.py)<br>[examples/test_demos.py](../../../../sources/civilian7__korean-people-persona/examples/test_demos.py) |
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

1. Start from key references: `.mcp.json`, `src/mcp_server/__init__.py`, `src/mcp_server/__main__.py`.
2. Trace execution through entrypoints: `src/mcp_server/__main__.py`, `src/mcp_server/server.py`, `src/convert/__main__.py`.
3. Map agent/tool runtime through: `src/mcp_server/tools.py`.
4. Verify behavior through test/eval files: `src/mcp_server/test_smoke.py`, `examples/copy_ab_test.py`, `examples/test_demos.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Korean persona dataset NVIDIA Nemotron Personas Korea → SQLite + FTS5 + MCP server for AI agents. 핵심 구조 신호는 Python, requirements.txt, README.md, mcp, docs, spec-artifacts이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
