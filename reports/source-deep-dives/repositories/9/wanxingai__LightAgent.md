# wanxingai/LightAgent Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

LightAgent: Lightweight AI agent framework with memory, mcp & skill. Supports multi-agent collaboration, self-learning, and major LLMs (OpenAI/DeepSeek/Qwen). Open-source with MCP/SSE protocol integration.

## 요약

- 조사 단위: `sources/wanxingai__LightAgent` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 165 files, 32 directories, depth score 106, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp_release.md, mcp_release.zh-CN.md, mcp/lightagent_mcp_settings.json이고, 의존성 단서는 openai, mcp, express, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | wanxingai/LightAgent |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 1146 |
| Forks | 147 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/wanxingai__LightAgent](../../../../sources/wanxingai__LightAgent) |
| Existing report | [reports/global-trending/repositories/wanxingai__LightAgent.md](../../../global-trending/repositories/wanxingai__LightAgent.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 165 / 32 |
| Max observed depth | 8 |
| Top directories | .github, docs, example, LightAgent, mcp, skills, tests |
| Top extensions | .py: 63, .md: 44, .xsd: 39, .txt: 5, .yml: 4, .png: 3, (none): 3, .jpg: 1, .json: 1, .lock: 1, .toml: 1 |
| Source patterns | api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 25 |
| tests | validation surface | 12 |
| .github | ci surface | 1 |
| example | top-level component | 1 |
| LightAgent | top-level component | 1 |
| mcp | top-level component | 1 |
| skills | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | express |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [mcp_release.md](../../../../sources/wanxingai__LightAgent/mcp_release.md) | mcp signal |
| mcp | [mcp_release.zh-CN.md](../../../../sources/wanxingai__LightAgent/mcp_release.zh-CN.md) | mcp signal |
| mcp | [mcp/lightagent_mcp_settings.json](../../../../sources/wanxingai__LightAgent/mcp/lightagent_mcp_settings.json) | mcp signal |
| mcp | [mcp/mcpServers/mcpServer_demo_stdio.py](../../../../sources/wanxingai__LightAgent/mcp/mcpServers/mcpServer_demo_stdio.py) | mcp signal |
| agentRuntime | [skills/xlsx/LICENSE.txt](../../../../sources/wanxingai__LightAgent/skills/xlsx/LICENSE.txt) | agentRuntime signal |
| agentRuntime | [skills/xlsx/SKILL.md](../../../../sources/wanxingai__LightAgent/skills/xlsx/SKILL.md) | agentRuntime signal |
| agentRuntime | [skills/xlsx/scripts/recalc.py](../../../../sources/wanxingai__LightAgent/skills/xlsx/scripts/recalc.py) | agentRuntime signal |
| agentRuntime | [skills/xlsx/scripts/office/pack.py](../../../../sources/wanxingai__LightAgent/skills/xlsx/scripts/office/pack.py) | agentRuntime signal |
| config | [poetry.lock](../../../../sources/wanxingai__LightAgent/poetry.lock) | config signal |
| config | [pyproject.toml](../../../../sources/wanxingai__LightAgent/pyproject.toml) | config signal |
| config | [requirements.txt](../../../../sources/wanxingai__LightAgent/requirements.txt) | config signal |
| config | [skills/gupiaozhushou/requirements.txt](../../../../sources/wanxingai__LightAgent/skills/gupiaozhushou/requirements.txt) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 88 | [skills/xlsx/LICENSE.txt](../../../../sources/wanxingai__LightAgent/skills/xlsx/LICENSE.txt)<br>[skills/xlsx/SKILL.md](../../../../sources/wanxingai__LightAgent/skills/xlsx/SKILL.md)<br>[skills/xlsx/scripts/recalc.py](../../../../sources/wanxingai__LightAgent/skills/xlsx/scripts/recalc.py)<br>[skills/xlsx/scripts/office/pack.py](../../../../sources/wanxingai__LightAgent/skills/xlsx/scripts/office/pack.py)<br>[skills/xlsx/scripts/office/soffice.py](../../../../sources/wanxingai__LightAgent/skills/xlsx/scripts/office/soffice.py)<br>[skills/xlsx/scripts/office/unpack.py](../../../../sources/wanxingai__LightAgent/skills/xlsx/scripts/office/unpack.py)<br>[skills/xlsx/scripts/office/validate.py](../../../../sources/wanxingai__LightAgent/skills/xlsx/scripts/office/validate.py)<br>[skills/xlsx/scripts/office/validators/__init__.py](../../../../sources/wanxingai__LightAgent/skills/xlsx/scripts/office/validators/__init__.py) |
| mcp | 8 | [mcp_release.md](../../../../sources/wanxingai__LightAgent/mcp_release.md)<br>[mcp_release.zh-CN.md](../../../../sources/wanxingai__LightAgent/mcp_release.zh-CN.md)<br>[mcp/lightagent_mcp_settings.json](../../../../sources/wanxingai__LightAgent/mcp/lightagent_mcp_settings.json)<br>[mcp/mcpServers/mcpServer_demo_stdio.py](../../../../sources/wanxingai__LightAgent/mcp/mcpServers/mcpServer_demo_stdio.py)<br>[mcp/mcpServers/mcpServer_weather_sse.py](../../../../sources/wanxingai__LightAgent/mcp/mcpServers/mcpServer_weather_sse.py)<br>[mcp/mcpServers/weather.py](../../../../sources/wanxingai__LightAgent/mcp/mcpServers/weather.py)<br>[LightAgent/mcp_client_manager.py](../../../../sources/wanxingai__LightAgent/LightAgent/mcp_client_manager.py)<br>[example/07.use_mcp.py](../../../../sources/wanxingai__LightAgent/example/07.use_mcp.py) |
| retrieval | 8 | [tests/test_memory_policy.py](../../../../sources/wanxingai__LightAgent/tests/test_memory_policy.py)<br>[tests/test_vector_memory_adapter_example.py](../../../../sources/wanxingai__LightAgent/tests/test_vector_memory_adapter_example.py)<br>[example/03.memory_mem0.py](../../../../sources/wanxingai__LightAgent/example/03.memory_mem0.py)<br>[example/11.vector_memory_adapter.py](../../../../sources/wanxingai__LightAgent/example/11.vector_memory_adapter.py)<br>[docs/memory_admission.md](../../../../sources/wanxingai__LightAgent/docs/memory_admission.md)<br>[docs/memory_security.md](../../../../sources/wanxingai__LightAgent/docs/memory_security.md)<br>[docs/memory_trace_swarm_boundaries.md](../../../../sources/wanxingai__LightAgent/docs/memory_trace_swarm_boundaries.md)<br>[docs/vector_memory_adapter.md](../../../../sources/wanxingai__LightAgent/docs/vector_memory_adapter.md) |
| spec | 6 | [requirements.txt](../../../../sources/wanxingai__LightAgent/requirements.txt)<br>[roadmap.md](../../../../sources/wanxingai__LightAgent/roadmap.md)<br>[skills/gupiaozhushou/requirements.txt](../../../../sources/wanxingai__LightAgent/skills/gupiaozhushou/requirements.txt)<br>[skills/frontend-design/LICENSE.txt](../../../../sources/wanxingai__LightAgent/skills/frontend-design/LICENSE.txt)<br>[skills/frontend-design/SKILL.md](../../../../sources/wanxingai__LightAgent/skills/frontend-design/SKILL.md)<br>[skills/front-tech-map/references/visual_spec.md](../../../../sources/wanxingai__LightAgent/skills/front-tech-map/references/visual_spec.md) |
| eval | 12 | [tests/test_guardrails.py](../../../../sources/wanxingai__LightAgent/tests/test_guardrails.py)<br>[tests/test_lightflow.py](../../../../sources/wanxingai__LightAgent/tests/test_lightflow.py)<br>[tests/test_litellm_client.py](../../../../sources/wanxingai__LightAgent/tests/test_litellm_client.py)<br>[tests/test_memory_policy.py](../../../../sources/wanxingai__LightAgent/tests/test_memory_policy.py)<br>[tests/test_skill_manager_logging.py](../../../../sources/wanxingai__LightAgent/tests/test_skill_manager_logging.py)<br>[tests/test_v065_core.py](../../../../sources/wanxingai__LightAgent/tests/test_v065_core.py)<br>[tests/test_v070_tracing.py](../../../../sources/wanxingai__LightAgent/tests/test_v070_tracing.py)<br>[tests/test_vector_memory_adapter_example.py](../../../../sources/wanxingai__LightAgent/tests/test_vector_memory_adapter_example.py) |
| security | 3 | [SECURITY.md](../../../../sources/wanxingai__LightAgent/SECURITY.md)<br>[tests/test_memory_policy.py](../../../../sources/wanxingai__LightAgent/tests/test_memory_policy.py)<br>[docs/memory_security.md](../../../../sources/wanxingai__LightAgent/docs/memory_security.md) |
| ci | 1 | [.github/workflows/ci.yml](../../../../sources/wanxingai__LightAgent/.github/workflows/ci.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 28 | [README.de.md](../../../../sources/wanxingai__LightAgent/README.de.md)<br>[README.es.md](../../../../sources/wanxingai__LightAgent/README.es.md)<br>[README.fr.md](../../../../sources/wanxingai__LightAgent/README.fr.md)<br>[README.ja.md](../../../../sources/wanxingai__LightAgent/README.ja.md)<br>[README.ko.md](../../../../sources/wanxingai__LightAgent/README.ko.md)<br>[README.md](../../../../sources/wanxingai__LightAgent/README.md)<br>[README.pt.md](../../../../sources/wanxingai__LightAgent/README.pt.md)<br>[README.ru.md](../../../../sources/wanxingai__LightAgent/README.ru.md) |
| config | 4 | [poetry.lock](../../../../sources/wanxingai__LightAgent/poetry.lock)<br>[pyproject.toml](../../../../sources/wanxingai__LightAgent/pyproject.toml)<br>[requirements.txt](../../../../sources/wanxingai__LightAgent/requirements.txt)<br>[skills/gupiaozhushou/requirements.txt](../../../../sources/wanxingai__LightAgent/skills/gupiaozhushou/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 12 | [tests/test_guardrails.py](../../../../sources/wanxingai__LightAgent/tests/test_guardrails.py)<br>[tests/test_lightflow.py](../../../../sources/wanxingai__LightAgent/tests/test_lightflow.py)<br>[tests/test_litellm_client.py](../../../../sources/wanxingai__LightAgent/tests/test_litellm_client.py)<br>[tests/test_memory_policy.py](../../../../sources/wanxingai__LightAgent/tests/test_memory_policy.py)<br>[tests/test_skill_manager_logging.py](../../../../sources/wanxingai__LightAgent/tests/test_skill_manager_logging.py)<br>[tests/test_v065_core.py](../../../../sources/wanxingai__LightAgent/tests/test_v065_core.py) |
| CI workflows | 1 | [.github/workflows/ci.yml](../../../../sources/wanxingai__LightAgent/.github/workflows/ci.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 3 | [SECURITY.md](../../../../sources/wanxingai__LightAgent/SECURITY.md)<br>[tests/test_memory_policy.py](../../../../sources/wanxingai__LightAgent/tests/test_memory_policy.py)<br>[docs/memory_security.md](../../../../sources/wanxingai__LightAgent/docs/memory_security.md) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `mcp_release.md`, `mcp_release.zh-CN.md`, `mcp/lightagent_mcp_settings.json`.
2. Map agent/tool runtime through: `skills/xlsx/LICENSE.txt`, `skills/xlsx/SKILL.md`, `skills/xlsx/scripts/recalc.py`.
3. Inspect retrieval/memory/indexing through: `tests/test_memory_policy.py`, `tests/test_vector_memory_adapter_example.py`, `example/03.memory_mem0.py`.
4. Verify behavior through test/eval files: `tests/test_guardrails.py`, `tests/test_lightflow.py`, `tests/test_litellm_client.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 LightAgent Lightweight AI agent framework with memory, mcp & skill. Supports multi agent collaboration, self learning, a. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, README.md, LICENSE, openai이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
