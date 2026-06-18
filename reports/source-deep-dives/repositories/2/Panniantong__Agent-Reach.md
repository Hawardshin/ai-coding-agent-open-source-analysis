# Panniantong/Agent-Reach Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Give your AI agent eyes to see the entire internet. Read & search Twitter, Reddit, YouTube, GitHub, Bilibili, XiaoHongShu — one CLI, zero API fees.

## 요약

- 조사 단위: `sources/Panniantong__Agent-Reach` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 89 files, 16 directories, depth score 89, key references 10개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 mcp=agent_reach/integrations/mcp_server.py이고, 의존성 단서는 openai, claude, mcp, playwright, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Panniantong/Agent-Reach |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 33152 |
| Forks | 2668 |
| License | MIT |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/Panniantong__Agent-Reach](../../../../sources/Panniantong__Agent-Reach) |
| Existing report | [reports/global-trending/repositories/Panniantong__Agent-Reach.md](../../../global-trending/repositories/Panniantong__Agent-Reach.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 89 / 16 |
| Max observed depth | 4 |
| Top directories | .github, agent_reach, config, docs, scripts, tests |
| Top extensions | .py: 45, .md: 26, .png: 3, .sh: 3, .svg: 3, .txt: 2, (none): 2, .example: 1, .jpg: 1, .json: 1, .toml: 1, .yml: 1 |
| Source patterns | cli-first, agent/tool runtime, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 16 |
| tests | validation surface | 16 |
| .github | ci surface | 1 |
| agent_reach | top-level component | 1 |
| config | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | agent-reach | agent-reach |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, claude |
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
| mcp | [agent_reach/integrations/mcp_server.py](../../../../sources/Panniantong__Agent-Reach/agent_reach/integrations/mcp_server.py) | mcp signal |
| agentRuntime | [agent_reach/__init__.py](../../../../sources/Panniantong__Agent-Reach/agent_reach/__init__.py) | agentRuntime signal |
| agentRuntime | [agent_reach/cli.py](../../../../sources/Panniantong__Agent-Reach/agent_reach/cli.py) | agentRuntime signal |
| agentRuntime | [agent_reach/config.py](../../../../sources/Panniantong__Agent-Reach/agent_reach/config.py) | agentRuntime signal |
| agentRuntime | [agent_reach/cookie_extract.py](../../../../sources/Panniantong__Agent-Reach/agent_reach/cookie_extract.py) | agentRuntime signal |
| instruction | [CLAUDE.md](../../../../sources/Panniantong__Agent-Reach/CLAUDE.md) | instruction signal |
| config | [pyproject.toml](../../../../sources/Panniantong__Agent-Reach/pyproject.toml) | config signal |
| ci | [.github/workflows/pytest.yml](../../../../sources/Panniantong__Agent-Reach/.github/workflows/pytest.yml) | ci support |
| eval | [test.sh](../../../../sources/Panniantong__Agent-Reach/test.sh) | eval support |
| eval | [tests/test_channel_contracts.py](../../../../sources/Panniantong__Agent-Reach/tests/test_channel_contracts.py) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 44 | [agent_reach/__init__.py](../../../../sources/Panniantong__Agent-Reach/agent_reach/__init__.py)<br>[agent_reach/cli.py](../../../../sources/Panniantong__Agent-Reach/agent_reach/cli.py)<br>[agent_reach/config.py](../../../../sources/Panniantong__Agent-Reach/agent_reach/config.py)<br>[agent_reach/cookie_extract.py](../../../../sources/Panniantong__Agent-Reach/agent_reach/cookie_extract.py)<br>[agent_reach/core.py](../../../../sources/Panniantong__Agent-Reach/agent_reach/core.py)<br>[agent_reach/doctor.py](../../../../sources/Panniantong__Agent-Reach/agent_reach/doctor.py)<br>[agent_reach/probe.py](../../../../sources/Panniantong__Agent-Reach/agent_reach/probe.py)<br>[agent_reach/transcribe.py](../../../../sources/Panniantong__Agent-Reach/agent_reach/transcribe.py) |
| mcp | 1 | [agent_reach/integrations/mcp_server.py](../../../../sources/Panniantong__Agent-Reach/agent_reach/integrations/mcp_server.py) |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 16 | [test.sh](../../../../sources/Panniantong__Agent-Reach/test.sh)<br>[tests/test_channel_contracts.py](../../../../sources/Panniantong__Agent-Reach/tests/test_channel_contracts.py)<br>[tests/test_channels.py](../../../../sources/Panniantong__Agent-Reach/tests/test_channels.py)<br>[tests/test_cli.py](../../../../sources/Panniantong__Agent-Reach/tests/test_cli.py)<br>[tests/test_config.py](../../../../sources/Panniantong__Agent-Reach/tests/test_config.py)<br>[tests/test_cookie_extract_perms.py](../../../../sources/Panniantong__Agent-Reach/tests/test_cookie_extract_perms.py)<br>[tests/test_core.py](../../../../sources/Panniantong__Agent-Reach/tests/test_core.py)<br>[tests/test_doctor.py](../../../../sources/Panniantong__Agent-Reach/tests/test_doctor.py) |
| security | 1 | [SECURITY.md](../../../../sources/Panniantong__Agent-Reach/SECURITY.md) |
| ci | 1 | [.github/workflows/pytest.yml](../../../../sources/Panniantong__Agent-Reach/.github/workflows/pytest.yml) |
| container | 0 | not obvious |
| instruction | 1 | [CLAUDE.md](../../../../sources/Panniantong__Agent-Reach/CLAUDE.md) |
| docs | 16 | [README.md](../../../../sources/Panniantong__Agent-Reach/README.md)<br>[docs/cookie-export.md](../../../../sources/Panniantong__Agent-Reach/docs/cookie-export.md)<br>[docs/dependency-locking.md](../../../../sources/Panniantong__Agent-Reach/docs/dependency-locking.md)<br>[docs/install.md](../../../../sources/Panniantong__Agent-Reach/docs/install.md)<br>[docs/README_en.md](../../../../sources/Panniantong__Agent-Reach/docs/README_en.md)<br>[docs/README_ja.md](../../../../sources/Panniantong__Agent-Reach/docs/README_ja.md)<br>[docs/README_ko.md](../../../../sources/Panniantong__Agent-Reach/docs/README_ko.md)<br>[docs/troubleshooting.md](../../../../sources/Panniantong__Agent-Reach/docs/troubleshooting.md) |
| config | 1 | [pyproject.toml](../../../../sources/Panniantong__Agent-Reach/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 16 | [test.sh](../../../../sources/Panniantong__Agent-Reach/test.sh)<br>[tests/test_channel_contracts.py](../../../../sources/Panniantong__Agent-Reach/tests/test_channel_contracts.py)<br>[tests/test_channels.py](../../../../sources/Panniantong__Agent-Reach/tests/test_channels.py)<br>[tests/test_cli.py](../../../../sources/Panniantong__Agent-Reach/tests/test_cli.py)<br>[tests/test_config.py](../../../../sources/Panniantong__Agent-Reach/tests/test_config.py)<br>[tests/test_cookie_extract_perms.py](../../../../sources/Panniantong__Agent-Reach/tests/test_cookie_extract_perms.py) |
| CI workflows | 1 | [.github/workflows/pytest.yml](../../../../sources/Panniantong__Agent-Reach/.github/workflows/pytest.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 1 | [SECURITY.md](../../../../sources/Panniantong__Agent-Reach/SECURITY.md) |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/Panniantong__Agent-Reach/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `agent_reach/integrations/mcp_server.py`, `agent_reach/__init__.py`, `agent_reach/cli.py`.
2. Map agent/tool runtime through: `agent_reach/__init__.py`, `agent_reach/cli.py`, `agent_reach/config.py`.
3. Verify behavior through test/eval files: `test.sh`, `tests/test_channel_contracts.py`, `tests/test_channels.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Give your AI agent eyes to see the entire internet. Read & search Twitter, Reddit, YouTube, GitHub, Bilibili, XiaoHongSh. 핵심 구조 신호는 Python, pyproject.toml, README.md, CLAUDE.md, LICENSE, openai이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 needs deeper structural scan입니다.
