# SikamikanikoBG/homelab-monitor Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Plug-and-play homelab dashboard in one container — GPU, local-AI VRAM, Docker, systemd, host health. Built-in read-only MCP server so AI agents can explore it too.

## 요약

- 조사 단위: `sources/SikamikanikoBG__homelab-monitor` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 114 files, 16 directories, depth score 112, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp_status.py, website/mcp.md, website/assets/mcp-agents.svg이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | SikamikanikoBG/homelab-monitor |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | 126 |
| Forks | 20 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/SikamikanikoBG__homelab-monitor](../../../../sources/SikamikanikoBG__homelab-monitor) |
| Existing report | [reports/global-trending/repositories/SikamikanikoBG__homelab-monitor.md](../../../global-trending/repositories/SikamikanikoBG__homelab-monitor.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 114 / 16 |
| Max observed depth | 3 |
| Top directories | .github, deploy, design, docs, mcp, scripts, static, tests, website |
| Top extensions | .py: 30, .md: 26, .png: 22, .yml: 10, .svg: 7, (none): 5, .json: 4, .gif: 2, .html: 2, .css: 1, .js: 1, .mp4: 1 |
| Source patterns | api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 26 |
| tests | validation surface | 18 |
| .github | ci surface | 1 |
| deploy | deployment surface | 1 |
| design | top-level component | 1 |
| mcp | top-level component | 1 |
| scripts | top-level component | 1 |
| static | top-level component | 1 |
| website | documentation surface | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
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
| mcp | [mcp_status.py](../../../../sources/SikamikanikoBG__homelab-monitor/mcp_status.py) | mcp signal |
| mcp | [website/mcp.md](../../../../sources/SikamikanikoBG__homelab-monitor/website/mcp.md) | mcp signal |
| mcp | [website/assets/mcp-agents.svg](../../../../sources/SikamikanikoBG__homelab-monitor/website/assets/mcp-agents.svg) | mcp signal |
| mcp | [tests/test_mcp_status.py](../../../../sources/SikamikanikoBG__homelab-monitor/tests/test_mcp_status.py) | mcp signal |
| entrypoints | [server.json](../../../../sources/SikamikanikoBG__homelab-monitor/server.json) | entrypoints signal |
| entrypoints | [mcp/server.py](../../../../sources/SikamikanikoBG__homelab-monitor/mcp/server.py) | entrypoints signal |
| config | [mcp/requirements.txt](../../../../sources/SikamikanikoBG__homelab-monitor/mcp/requirements.txt) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/SikamikanikoBG__homelab-monitor/.github/workflows/ci.yml) | ci support |
| ci | [.github/workflows/discord-announce.yml](../../../../sources/SikamikanikoBG__homelab-monitor/.github/workflows/discord-announce.yml) | ci support |
| container | [docker-compose.yml](../../../../sources/SikamikanikoBG__homelab-monitor/docker-compose.yml) | container support |
| container | [Dockerfile](../../../../sources/SikamikanikoBG__homelab-monitor/Dockerfile) | container support |
| eval | [tests/test_backup.py](../../../../sources/SikamikanikoBG__homelab-monitor/tests/test_backup.py) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [server.json](../../../../sources/SikamikanikoBG__homelab-monitor/server.json)<br>[mcp/server.py](../../../../sources/SikamikanikoBG__homelab-monitor/mcp/server.py) |
| agentRuntime | 0 | not obvious |
| mcp | 11 | [mcp_status.py](../../../../sources/SikamikanikoBG__homelab-monitor/mcp_status.py)<br>[website/mcp.md](../../../../sources/SikamikanikoBG__homelab-monitor/website/mcp.md)<br>[website/assets/mcp-agents.svg](../../../../sources/SikamikanikoBG__homelab-monitor/website/assets/mcp-agents.svg)<br>[tests/test_mcp_status.py](../../../../sources/SikamikanikoBG__homelab-monitor/tests/test_mcp_status.py)<br>[mcp/homelab_client.py](../../../../sources/SikamikanikoBG__homelab-monitor/mcp/homelab_client.py)<br>[mcp/README.md](../../../../sources/SikamikanikoBG__homelab-monitor/mcp/README.md)<br>[mcp/requirements.txt](../../../../sources/SikamikanikoBG__homelab-monitor/mcp/requirements.txt)<br>[mcp/server.py](../../../../sources/SikamikanikoBG__homelab-monitor/mcp/server.py) |
| retrieval | 1 | [website/index.md](../../../../sources/SikamikanikoBG__homelab-monitor/website/index.md) |
| spec | 13 | [mcp/requirements.txt](../../../../sources/SikamikanikoBG__homelab-monitor/mcp/requirements.txt)<br>[docs/architecture.svg](../../../../sources/SikamikanikoBG__homelab-monitor/docs/architecture.svg)<br>[design/migration-parity.md](../../../../sources/SikamikanikoBG__homelab-monitor/design/migration-parity.md)<br>[design/nav-mockups.html](../../../../sources/SikamikanikoBG__homelab-monitor/design/nav-mockups.html)<br>[design/ai-cockpit/MORNING-REPORT.md](../../../../sources/SikamikanikoBG__homelab-monitor/design/ai-cockpit/MORNING-REPORT.md)<br>[design/ai-cockpit/PLAN.md](../../../../sources/SikamikanikoBG__homelab-monitor/design/ai-cockpit/PLAN.md)<br>[design/ai-cockpit/RELEASE-DRAFT.md](../../../../sources/SikamikanikoBG__homelab-monitor/design/ai-cockpit/RELEASE-DRAFT.md)<br>[design/ai-cockpit/research-A-feature-catalog.md](../../../../sources/SikamikanikoBG__homelab-monitor/design/ai-cockpit/research-A-feature-catalog.md) |
| eval | 19 | [tests/test_backup.py](../../../../sources/SikamikanikoBG__homelab-monitor/tests/test_backup.py)<br>[tests/test_cost.py](../../../../sources/SikamikanikoBG__homelab-monitor/tests/test_cost.py)<br>[tests/test_costs.py](../../../../sources/SikamikanikoBG__homelab-monitor/tests/test_costs.py)<br>[tests/test_devtools.py](../../../../sources/SikamikanikoBG__homelab-monitor/tests/test_devtools.py)<br>[tests/test_experiments.py](../../../../sources/SikamikanikoBG__homelab-monitor/tests/test_experiments.py)<br>[tests/test_gputelemetry.py](../../../../sources/SikamikanikoBG__homelab-monitor/tests/test_gputelemetry.py)<br>[tests/test_hardening.py](../../../../sources/SikamikanikoBG__homelab-monitor/tests/test_hardening.py)<br>[tests/test_integrations.py](../../../../sources/SikamikanikoBG__homelab-monitor/tests/test_integrations.py) |
| security | 1 | [docs/security.png](../../../../sources/SikamikanikoBG__homelab-monitor/docs/security.png) |
| ci | 7 | [.github/workflows/ci.yml](../../../../sources/SikamikanikoBG__homelab-monitor/.github/workflows/ci.yml)<br>[.github/workflows/discord-announce.yml](../../../../sources/SikamikanikoBG__homelab-monitor/.github/workflows/discord-announce.yml)<br>[.github/workflows/docs.yml](../../../../sources/SikamikanikoBG__homelab-monitor/.github/workflows/docs.yml)<br>[.github/workflows/hub-readme-sync.yml](../../../../sources/SikamikanikoBG__homelab-monitor/.github/workflows/hub-readme-sync.yml)<br>[.github/workflows/release.yml](../../../../sources/SikamikanikoBG__homelab-monitor/.github/workflows/release.yml)<br>[.github/workflows/selfhst-newsletter.yml](../../../../sources/SikamikanikoBG__homelab-monitor/.github/workflows/selfhst-newsletter.yml)<br>[.github/workflows/stats.yml](../../../../sources/SikamikanikoBG__homelab-monitor/.github/workflows/stats.yml) |
| container | 3 | [docker-compose.yml](../../../../sources/SikamikanikoBG__homelab-monitor/docker-compose.yml)<br>[Dockerfile](../../../../sources/SikamikanikoBG__homelab-monitor/Dockerfile)<br>[deploy/docker-compose.next.yml](../../../../sources/SikamikanikoBG__homelab-monitor/deploy/docker-compose.next.yml) |
| instruction | 0 | not obvious |
| docs | 47 | [mkdocs.yml](../../../../sources/SikamikanikoBG__homelab-monitor/mkdocs.yml)<br>[README.md](../../../../sources/SikamikanikoBG__homelab-monitor/README.md)<br>[website/configuration.md](../../../../sources/SikamikanikoBG__homelab-monitor/website/configuration.md)<br>[website/contributing.md](../../../../sources/SikamikanikoBG__homelab-monitor/website/contributing.md)<br>[website/features.md](../../../../sources/SikamikanikoBG__homelab-monitor/website/features.md)<br>[website/how-it-works.md](../../../../sources/SikamikanikoBG__homelab-monitor/website/how-it-works.md)<br>[website/index.md](../../../../sources/SikamikanikoBG__homelab-monitor/website/index.md)<br>[website/install.md](../../../../sources/SikamikanikoBG__homelab-monitor/website/install.md) |
| config | 1 | [mcp/requirements.txt](../../../../sources/SikamikanikoBG__homelab-monitor/mcp/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 19 | [tests/test_backup.py](../../../../sources/SikamikanikoBG__homelab-monitor/tests/test_backup.py)<br>[tests/test_cost.py](../../../../sources/SikamikanikoBG__homelab-monitor/tests/test_cost.py)<br>[tests/test_costs.py](../../../../sources/SikamikanikoBG__homelab-monitor/tests/test_costs.py)<br>[tests/test_devtools.py](../../../../sources/SikamikanikoBG__homelab-monitor/tests/test_devtools.py)<br>[tests/test_experiments.py](../../../../sources/SikamikanikoBG__homelab-monitor/tests/test_experiments.py)<br>[tests/test_gputelemetry.py](../../../../sources/SikamikanikoBG__homelab-monitor/tests/test_gputelemetry.py) |
| CI workflows | 7 | [.github/workflows/ci.yml](../../../../sources/SikamikanikoBG__homelab-monitor/.github/workflows/ci.yml)<br>[.github/workflows/discord-announce.yml](../../../../sources/SikamikanikoBG__homelab-monitor/.github/workflows/discord-announce.yml)<br>[.github/workflows/docs.yml](../../../../sources/SikamikanikoBG__homelab-monitor/.github/workflows/docs.yml)<br>[.github/workflows/hub-readme-sync.yml](../../../../sources/SikamikanikoBG__homelab-monitor/.github/workflows/hub-readme-sync.yml)<br>[.github/workflows/release.yml](../../../../sources/SikamikanikoBG__homelab-monitor/.github/workflows/release.yml)<br>[.github/workflows/selfhst-newsletter.yml](../../../../sources/SikamikanikoBG__homelab-monitor/.github/workflows/selfhst-newsletter.yml) |
| Containers / deploy | 3 | [docker-compose.yml](../../../../sources/SikamikanikoBG__homelab-monitor/docker-compose.yml)<br>[Dockerfile](../../../../sources/SikamikanikoBG__homelab-monitor/Dockerfile)<br>[deploy/docker-compose.next.yml](../../../../sources/SikamikanikoBG__homelab-monitor/deploy/docker-compose.next.yml) |
| Security / policy | 1 | [docs/security.png](../../../../sources/SikamikanikoBG__homelab-monitor/docs/security.png) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | agent instruction files not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `mcp_status.py`, `website/mcp.md`, `website/assets/mcp-agents.svg`.
2. Trace execution through entrypoints: `server.json`, `mcp/server.py`.
3. Inspect retrieval/memory/indexing through: `website/index.md`.
4. Verify behavior through test/eval files: `tests/test_backup.py`, `tests/test_cost.py`, `tests/test_costs.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Plug and play homelab dashboard in one container — GPU, local AI VRAM, Docker, systemd, host health. Built in read only . 핵심 구조 신호는 Python, Dockerfile, docker-compose.yml, README.md, LICENSE, tests이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
