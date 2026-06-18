# PlateerLab/document-adapter Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

LLM이 DOCX/PPTX/HWPX 문서를 직접 편집할 수 있게 해주는 통합 어댑터 + MCP 서버. Claude Desktop / Claude Code / Anthropic API Tool Use 호환. pip install document-adapter

## 요약

- 조사 단위: `sources/PlateerLab__document-adapter` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 52 files, 8 directories, depth score 68, key references 6개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 mcp=document_adapter/mcp_server.py이고, 의존성 단서는 anthropic, claude, mcp, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 6개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | PlateerLab/document-adapter |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/PlateerLab__document-adapter](../../../../sources/PlateerLab__document-adapter) |
| Existing report | [reports/korea-trending/repositories/PlateerLab__document-adapter.md](../../../korea-trending/repositories/PlateerLab__document-adapter.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 52 / 8 |
| Max observed depth | 3 |
| Top directories | .github, document_adapter, examples, scripts, tests |
| Top extensions | .py: 45, (none): 3, .md: 2, .toml: 1, .yml: 1 |
| Source patterns | cli-first, agent/tool runtime, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 4 |
| .github | ci surface | 1 |
| document_adapter | documentation surface | 1 |
| examples | top-level component | 1 |
| examples/eval_run.py | examples workspace | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | document-adapter-mcp | document-adapter-mcp |


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
| mcp | [document_adapter/mcp_server.py](../../../../sources/PlateerLab__document-adapter/document_adapter/mcp_server.py) | mcp signal |
| agentRuntime | [document_adapter/tools.py](../../../../sources/PlateerLab__document-adapter/document_adapter/tools.py) | agentRuntime signal |
| config | [pyproject.toml](../../../../sources/PlateerLab__document-adapter/pyproject.toml) | config signal |
| ci | [.github/workflows/tests.yml](../../../../sources/PlateerLab__document-adapter/.github/workflows/tests.yml) | ci support |
| eval | [tests/test_eval_harness.py](../../../../sources/PlateerLab__document-adapter/tests/test_eval_harness.py) | eval support |
| eval | [tests/test_scenarios.py](../../../../sources/PlateerLab__document-adapter/tests/test_scenarios.py) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 1 | [document_adapter/tools.py](../../../../sources/PlateerLab__document-adapter/document_adapter/tools.py) |
| mcp | 1 | [document_adapter/mcp_server.py](../../../../sources/PlateerLab__document-adapter/document_adapter/mcp_server.py) |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 9 | [tests/test_eval_harness.py](../../../../sources/PlateerLab__document-adapter/tests/test_eval_harness.py)<br>[tests/test_scenarios.py](../../../../sources/PlateerLab__document-adapter/tests/test_scenarios.py)<br>[tests/test_smoke.py](../../../../sources/PlateerLab__document-adapter/tests/test_smoke.py)<br>[examples/eval_run.py](../../../../sources/PlateerLab__document-adapter/examples/eval_run.py)<br>[document_adapter/eval/__init__.py](../../../../sources/PlateerLab__document-adapter/document_adapter/eval/__init__.py)<br>[document_adapter/eval/fixtures.py](../../../../sources/PlateerLab__document-adapter/document_adapter/eval/fixtures.py)<br>[document_adapter/eval/harness.py](../../../../sources/PlateerLab__document-adapter/document_adapter/eval/harness.py)<br>[document_adapter/eval/scenarios.py](../../../../sources/PlateerLab__document-adapter/document_adapter/eval/scenarios.py) |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/tests.yml](../../../../sources/PlateerLab__document-adapter/.github/workflows/tests.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/PlateerLab__document-adapter/README.md) |
| config | 1 | [pyproject.toml](../../../../sources/PlateerLab__document-adapter/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 9 | [tests/test_eval_harness.py](../../../../sources/PlateerLab__document-adapter/tests/test_eval_harness.py)<br>[tests/test_scenarios.py](../../../../sources/PlateerLab__document-adapter/tests/test_scenarios.py)<br>[tests/test_smoke.py](../../../../sources/PlateerLab__document-adapter/tests/test_smoke.py)<br>[examples/eval_run.py](../../../../sources/PlateerLab__document-adapter/examples/eval_run.py)<br>[document_adapter/eval/__init__.py](../../../../sources/PlateerLab__document-adapter/document_adapter/eval/__init__.py)<br>[document_adapter/eval/fixtures.py](../../../../sources/PlateerLab__document-adapter/document_adapter/eval/fixtures.py) |
| CI workflows | 1 | [.github/workflows/tests.yml](../../../../sources/PlateerLab__document-adapter/.github/workflows/tests.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious; agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `document_adapter/mcp_server.py`, `document_adapter/tools.py`, `pyproject.toml`.
2. Map agent/tool runtime through: `document_adapter/tools.py`.
3. Verify behavior through test/eval files: `tests/test_eval_harness.py`, `tests/test_scenarios.py`, `tests/test_smoke.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 LLM이 DOCX/PPTX/HWPX 문서를 직접 편집할 수 있게 해주는 통합 어댑터 + MCP 서버. Claude Desktop / Claude Code / Anthropic API Tool Use 호환. pip i. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, anthropic, mcp이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
