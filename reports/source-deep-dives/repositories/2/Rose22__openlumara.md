# Rose22/openlumara Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

AI agent framework, written from scratch (not based on openclaw), focused on stripping it down to the bare necessities, optimizing token count, reducing security risks. modular so you can enable only exactly what you need.

## 요약

- 조사 단위: `sources/Rose22__openlumara` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 208 files, 17 directories, depth score 79, key references 7개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=modules/memory.py, docs/openlumara_dev_docs/core/context.md, core/context.py이고, 의존성 단서는 openai, 검증/운영 단서는 운영 보조 파일은 추가 확인 필요이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Rose22/openlumara |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 271 |
| Forks | 25 |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/Rose22__openlumara](../../../../sources/Rose22__openlumara) |
| Existing report | [reports/global-trending/repositories/Rose22__openlumara.md](../../../global-trending/repositories/Rose22__openlumara.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 208 / 17 |
| Max observed depth | 6 |
| Top directories | channels, core, docs, modules |
| Top extensions | .md: 56, .py: 47, .js: 34, .json: 31, .css: 24, .sh: 3, .txt: 3, .bat: 2, .html: 2, .png: 2, (none): 2, .example: 1 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 42 |
| channels | top-level component | 1 |
| core | top-level component | 1 |
| modules | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
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
| agentRuntime | [modules/memory.py](../../../../sources/Rose22__openlumara/modules/memory.py) | agentRuntime signal |
| agentRuntime | [docs/openlumara_dev_docs/core/context.md](../../../../sources/Rose22__openlumara/docs/openlumara_dev_docs/core/context.md) | agentRuntime signal |
| agentRuntime | [core/context.py](../../../../sources/Rose22__openlumara/core/context.py) | agentRuntime signal |
| entrypoints | [main.py](../../../../sources/Rose22__openlumara/main.py) | entrypoints signal |
| config | [requirements_matrix.txt](../../../../sources/Rose22__openlumara/requirements_matrix.txt) | config signal |
| config | [requirements_termux.txt](../../../../sources/Rose22__openlumara/requirements_termux.txt) | config signal |
| config | [requirements.txt](../../../../sources/Rose22__openlumara/requirements.txt) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [main.py](../../../../sources/Rose22__openlumara/main.py) |
| agentRuntime | 3 | [modules/memory.py](../../../../sources/Rose22__openlumara/modules/memory.py)<br>[docs/openlumara_dev_docs/core/context.md](../../../../sources/Rose22__openlumara/docs/openlumara_dev_docs/core/context.md)<br>[core/context.py](../../../../sources/Rose22__openlumara/core/context.py) |
| mcp | 0 | not obvious |
| retrieval | 2 | [modules/memory.py](../../../../sources/Rose22__openlumara/modules/memory.py)<br>[channels/webui/index.html](../../../../sources/Rose22__openlumara/channels/webui/index.html) |
| spec | 4 | [requirements_matrix.txt](../../../../sources/Rose22__openlumara/requirements_matrix.txt)<br>[requirements_termux.txt](../../../../sources/Rose22__openlumara/requirements_termux.txt)<br>[requirements.txt](../../../../sources/Rose22__openlumara/requirements.txt)<br>[docs/openlumara_dev_docs/architecture.md](../../../../sources/Rose22__openlumara/docs/openlumara_dev_docs/architecture.md) |
| eval | 0 | not obvious |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 55 | [README.md](../../../../sources/Rose22__openlumara/README.md)<br>[docs/openlumara_user_guide/advanced_use.md](../../../../sources/Rose22__openlumara/docs/openlumara_user_guide/advanced_use.md)<br>[docs/openlumara_user_guide/ai_disclaimer.md](../../../../sources/Rose22__openlumara/docs/openlumara_user_guide/ai_disclaimer.md)<br>[docs/openlumara_user_guide/channels.md](../../../../sources/Rose22__openlumara/docs/openlumara_user_guide/channels.md)<br>[docs/openlumara_user_guide/chats.md](../../../../sources/Rose22__openlumara/docs/openlumara_user_guide/chats.md)<br>[docs/openlumara_user_guide/cli.md](../../../../sources/Rose22__openlumara/docs/openlumara_user_guide/cli.md)<br>[docs/openlumara_user_guide/commands_and_settings.md](../../../../sources/Rose22__openlumara/docs/openlumara_user_guide/commands_and_settings.md)<br>[docs/openlumara_user_guide/discord.md](../../../../sources/Rose22__openlumara/docs/openlumara_user_guide/discord.md) |
| config | 3 | [requirements_matrix.txt](../../../../sources/Rose22__openlumara/requirements_matrix.txt)<br>[requirements_termux.txt](../../../../sources/Rose22__openlumara/requirements_termux.txt)<br>[requirements.txt](../../../../sources/Rose22__openlumara/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 0 | not obvious |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious; container/deploy path not obvious; test/eval path not obvious |
| security | security/policy surface not obvious; agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `modules/memory.py`, `docs/openlumara_dev_docs/core/context.md`, `core/context.py`.
2. Trace execution through entrypoints: `main.py`.
3. Map agent/tool runtime through: `modules/memory.py`, `docs/openlumara_dev_docs/core/context.md`, `core/context.py`.
4. Inspect retrieval/memory/indexing through: `modules/memory.py`, `channels/webui/index.html`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 AI agent framework, written from scratch not based on openclaw , focused on stripping it down to the bare necessities, o. 핵심 구조 신호는 Python, requirements.txt, README.md, LICENSE, openai, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
