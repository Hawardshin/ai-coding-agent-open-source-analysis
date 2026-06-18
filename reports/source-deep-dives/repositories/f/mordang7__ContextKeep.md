# mordang7/ContextKeep Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Infinite Long-Term Memory for AI Agents (MCP Server)

## 요약

- 조사 단위: `sources/mordang7__ContextKeep` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 43 files, 8 directories, depth score 92, key references 10개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp_config.antigravity.example.json, mcp_config.docker.example.json, mcp_config.example.json이고, 의존성 단서는 mcp, 검증/운영 단서는 container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | mordang7/ContextKeep |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 156 |
| Forks | 36 |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/mordang7__ContextKeep](../../../../sources/mordang7__ContextKeep) |
| Existing report | [reports/global-trending/repositories/mordang7__ContextKeep.md](../../../global-trending/repositories/mordang7__ContextKeep.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 43 / 8 |
| Max observed depth | 3 |
| Top directories | assets, core, docs, scripts, static, templates |
| Top extensions | .py: 14, .md: 8, .png: 5, .json: 4, (none): 3, .service: 2, .css: 1, .html: 1, .js: 1, .sh: 1, .toml: 1, .txt: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 7 |
| assets | top-level component | 1 |
| core | top-level component | 1 |
| scripts | top-level component | 1 |
| static | top-level component | 1 |
| templates | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | pyproject.toml | contextkeep-server | contextkeep-server |
| utility | pyproject.toml | contextkeep-webui | contextkeep-webui |
| utility | pyproject.toml | contextkeep-migrate | contextkeep-migrate |


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
| mcp | [mcp_config.antigravity.example.json](../../../../sources/mordang7__ContextKeep/mcp_config.antigravity.example.json) | mcp signal |
| mcp | [mcp_config.docker.example.json](../../../../sources/mordang7__ContextKeep/mcp_config.docker.example.json) | mcp signal |
| mcp | [mcp_config.example.json](../../../../sources/mordang7__ContextKeep/mcp_config.example.json) | mcp signal |
| mcp | [mcp_config.sse.example.json](../../../../sources/mordang7__ContextKeep/mcp_config.sse.example.json) | mcp signal |
| agentRuntime | [core/memory_manager.py](../../../../sources/mordang7__ContextKeep/core/memory_manager.py) | agentRuntime signal |
| entrypoints | [server.py](../../../../sources/mordang7__ContextKeep/server.py) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/mordang7__ContextKeep/pyproject.toml) | config signal |
| config | [requirements.txt](../../../../sources/mordang7__ContextKeep/requirements.txt) | config signal |
| container | [docker-compose.yml](../../../../sources/mordang7__ContextKeep/docker-compose.yml) | container support |
| container | [Dockerfile](../../../../sources/mordang7__ContextKeep/Dockerfile) | container support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [server.py](../../../../sources/mordang7__ContextKeep/server.py) |
| agentRuntime | 1 | [core/memory_manager.py](../../../../sources/mordang7__ContextKeep/core/memory_manager.py) |
| mcp | 4 | [mcp_config.antigravity.example.json](../../../../sources/mordang7__ContextKeep/mcp_config.antigravity.example.json)<br>[mcp_config.docker.example.json](../../../../sources/mordang7__ContextKeep/mcp_config.docker.example.json)<br>[mcp_config.example.json](../../../../sources/mordang7__ContextKeep/mcp_config.example.json)<br>[mcp_config.sse.example.json](../../../../sources/mordang7__ContextKeep/mcp_config.sse.example.json) |
| retrieval | 2 | [templates/index.html](../../../../sources/mordang7__ContextKeep/templates/index.html)<br>[core/memory_manager.py](../../../../sources/mordang7__ContextKeep/core/memory_manager.py) |
| spec | 1 | [requirements.txt](../../../../sources/mordang7__ContextKeep/requirements.txt) |
| eval | 0 | not obvious |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 2 | [docker-compose.yml](../../../../sources/mordang7__ContextKeep/docker-compose.yml)<br>[Dockerfile](../../../../sources/mordang7__ContextKeep/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 7 | [README.md](../../../../sources/mordang7__ContextKeep/README.md)<br>[docs/CLIENT_CONFIGURATION.md](../../../../sources/mordang7__ContextKeep/docs/CLIENT_CONFIGURATION.md)<br>[docs/DIRECTIVE_UPDATE.md](../../../../sources/mordang7__ContextKeep/docs/DIRECTIVE_UPDATE.md)<br>[docs/DOCKER_V2_1.md](../../../../sources/mordang7__ContextKeep/docs/DOCKER_V2_1.md)<br>[docs/MIGRATION_GUIDE.md](../../../../sources/mordang7__ContextKeep/docs/MIGRATION_GUIDE.md)<br>[docs/SAFE_UPGRADE.md](../../../../sources/mordang7__ContextKeep/docs/SAFE_UPGRADE.md)<br>[docs/UPGRADING_FROM_V1.md](../../../../sources/mordang7__ContextKeep/docs/UPGRADING_FROM_V1.md) |
| config | 2 | [pyproject.toml](../../../../sources/mordang7__ContextKeep/pyproject.toml)<br>[requirements.txt](../../../../sources/mordang7__ContextKeep/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 0 | not obvious |
| CI workflows | 0 | not obvious |
| Containers / deploy | 2 | [docker-compose.yml](../../../../sources/mordang7__ContextKeep/docker-compose.yml)<br>[Dockerfile](../../../../sources/mordang7__ContextKeep/Dockerfile) |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious; test/eval path not obvious |
| security | security/policy surface not obvious; agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `mcp_config.antigravity.example.json`, `mcp_config.docker.example.json`, `mcp_config.example.json`.
2. Trace execution through entrypoints: `server.py`.
3. Map agent/tool runtime through: `core/memory_manager.py`.
4. Inspect retrieval/memory/indexing through: `templates/index.html`, `core/memory_manager.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Infinite Long Term Memory for AI Agents MCP Server. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, Dockerfile, docker-compose.yml, README.md이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
