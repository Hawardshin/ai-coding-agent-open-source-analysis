# bits-bytes-nn/omnisummary Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Proactive daily AI/ML digest — multi-source collection, LLM ranking, and a Korean editorial digest to Slack. Powered by Amazon Bedrock (Claude) on AWS.

## 요약

- 조사 단위: `sources/bits-bytes-nn__omnisummary` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 116 files, 17 directories, depth score 108, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=shared/memory.py, agent_runtime/__init__.py, agent_runtime/app.py이고, 의존성 단서는 openai, langchain, fastapi, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | bits-bytes-nn/omnisummary |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/bits-bytes-nn__omnisummary](../../../../sources/bits-bytes-nn__omnisummary) |
| Existing report | [reports/korea-trending/repositories/bits-bytes-nn__omnisummary.md](../../../korea-trending/repositories/bits-bytes-nn__omnisummary.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 116 / 17 |
| Max observed depth | 3 |
| Top directories | .github, agent, agent_runtime, cloudflare-proxy, collectors, config, docs, infrastructure, lambda_handlers, output, pipeline, scripts, shared, tests |
| Top extensions | .py: 96, .md: 3, (none): 3, .png: 2, .toml: 2, .agentcore: 1, .drawio: 1, .excalidraw: 1, .js: 1, .lock: 1, .mjs: 1, .sh: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 42 |
| docs | documentation surface | 8 |
| .github | ci surface | 1 |
| agent | top-level component | 1 |
| agent_runtime | top-level component | 1 |
| cloudflare-proxy | top-level component | 1 |
| collectors | top-level component | 1 |
| config | top-level component | 1 |
| infrastructure | top-level component | 1 |
| lambda_handlers | top-level component | 1 |
| output | top-level component | 1 |
| pipeline | top-level component | 1 |
| scripts | top-level component | 1 |
| shared | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | none |
| agentFrameworks | langchain |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | fastapi |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| agentRuntime | [shared/memory.py](../../../../sources/bits-bytes-nn__omnisummary/shared/memory.py) | agentRuntime signal |
| agentRuntime | [agent_runtime/__init__.py](../../../../sources/bits-bytes-nn__omnisummary/agent_runtime/__init__.py) | agentRuntime signal |
| agentRuntime | [agent_runtime/app.py](../../../../sources/bits-bytes-nn__omnisummary/agent_runtime/app.py) | agentRuntime signal |
| agentRuntime | [agent/__init__.py](../../../../sources/bits-bytes-nn__omnisummary/agent/__init__.py) | agentRuntime signal |
| entrypoints | [__main__.py](../../../../sources/bits-bytes-nn__omnisummary/__main__.py) | entrypoints signal |
| entrypoints | [main.py](../../../../sources/bits-bytes-nn__omnisummary/main.py) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/bits-bytes-nn__omnisummary/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/bits-bytes-nn__omnisummary/uv.lock) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/bits-bytes-nn__omnisummary/.github/workflows/ci.yml) | ci support |
| container | [Dockerfile](../../../../sources/bits-bytes-nn__omnisummary/Dockerfile) | container support |
| container | [Dockerfile.agentcore](../../../../sources/bits-bytes-nn__omnisummary/Dockerfile.agentcore) | container support |
| eval | [tests/__init__.py](../../../../sources/bits-bytes-nn__omnisummary/tests/__init__.py) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [__main__.py](../../../../sources/bits-bytes-nn__omnisummary/__main__.py)<br>[main.py](../../../../sources/bits-bytes-nn__omnisummary/main.py) |
| agentRuntime | 8 | [shared/memory.py](../../../../sources/bits-bytes-nn__omnisummary/shared/memory.py)<br>[agent_runtime/__init__.py](../../../../sources/bits-bytes-nn__omnisummary/agent_runtime/__init__.py)<br>[agent_runtime/app.py](../../../../sources/bits-bytes-nn__omnisummary/agent_runtime/app.py)<br>[agent/__init__.py](../../../../sources/bits-bytes-nn__omnisummary/agent/__init__.py)<br>[agent/agent_tools.py](../../../../sources/bits-bytes-nn__omnisummary/agent/agent_tools.py)<br>[agent/agent.py](../../../../sources/bits-bytes-nn__omnisummary/agent/agent.py)<br>[agent/tool_state.py](../../../../sources/bits-bytes-nn__omnisummary/agent/tool_state.py)<br>[agent/visuals.py](../../../../sources/bits-bytes-nn__omnisummary/agent/visuals.py) |
| mcp | 0 | not obvious |
| retrieval | 2 | [tests/test_memory_store.py](../../../../sources/bits-bytes-nn__omnisummary/tests/test_memory_store.py)<br>[shared/memory.py](../../../../sources/bits-bytes-nn__omnisummary/shared/memory.py) |
| spec | 2 | [docs/diagrams/architecture.drawio](../../../../sources/bits-bytes-nn__omnisummary/docs/diagrams/architecture.drawio)<br>[docs/diagrams/architecture.png](../../../../sources/bits-bytes-nn__omnisummary/docs/diagrams/architecture.png) |
| eval | 40 | [tests/__init__.py](../../../../sources/bits-bytes-nn__omnisummary/tests/__init__.py)<br>[tests/test_agent_cache.py](../../../../sources/bits-bytes-nn__omnisummary/tests/test_agent_cache.py)<br>[tests/test_agent_tools.py](../../../../sources/bits-bytes-nn__omnisummary/tests/test_agent_tools.py)<br>[tests/test_agentcore_app.py](../../../../sources/bits-bytes-nn__omnisummary/tests/test_agentcore_app.py)<br>[tests/test_aggregator.py](../../../../sources/bits-bytes-nn__omnisummary/tests/test_aggregator.py)<br>[tests/test_base_collector.py](../../../../sources/bits-bytes-nn__omnisummary/tests/test_base_collector.py)<br>[tests/test_collectors_health.py](../../../../sources/bits-bytes-nn__omnisummary/tests/test_collectors_health.py)<br>[tests/test_config_validation.py](../../../../sources/bits-bytes-nn__omnisummary/tests/test_config_validation.py) |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/ci.yml](../../../../sources/bits-bytes-nn__omnisummary/.github/workflows/ci.yml) |
| container | 2 | [Dockerfile](../../../../sources/bits-bytes-nn__omnisummary/Dockerfile)<br>[Dockerfile.agentcore](../../../../sources/bits-bytes-nn__omnisummary/Dockerfile.agentcore) |
| instruction | 0 | not obvious |
| docs | 7 | [README.ko.md](../../../../sources/bits-bytes-nn__omnisummary/README.ko.md)<br>[README.md](../../../../sources/bits-bytes-nn__omnisummary/README.md)<br>[docs/tech-doc.md](../../../../sources/bits-bytes-nn__omnisummary/docs/tech-doc.md)<br>[docs/diagrams/architecture.drawio](../../../../sources/bits-bytes-nn__omnisummary/docs/diagrams/architecture.drawio)<br>[docs/diagrams/architecture.png](../../../../sources/bits-bytes-nn__omnisummary/docs/diagrams/architecture.png)<br>[docs/diagrams/concept-pipeline.excalidraw](../../../../sources/bits-bytes-nn__omnisummary/docs/diagrams/concept-pipeline.excalidraw)<br>[docs/diagrams/concept-pipeline.png](../../../../sources/bits-bytes-nn__omnisummary/docs/diagrams/concept-pipeline.png) |
| config | 2 | [pyproject.toml](../../../../sources/bits-bytes-nn__omnisummary/pyproject.toml)<br>[uv.lock](../../../../sources/bits-bytes-nn__omnisummary/uv.lock) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 40 | [tests/__init__.py](../../../../sources/bits-bytes-nn__omnisummary/tests/__init__.py)<br>[tests/test_agent_cache.py](../../../../sources/bits-bytes-nn__omnisummary/tests/test_agent_cache.py)<br>[tests/test_agent_tools.py](../../../../sources/bits-bytes-nn__omnisummary/tests/test_agent_tools.py)<br>[tests/test_agentcore_app.py](../../../../sources/bits-bytes-nn__omnisummary/tests/test_agentcore_app.py)<br>[tests/test_aggregator.py](../../../../sources/bits-bytes-nn__omnisummary/tests/test_aggregator.py)<br>[tests/test_base_collector.py](../../../../sources/bits-bytes-nn__omnisummary/tests/test_base_collector.py) |
| CI workflows | 1 | [.github/workflows/ci.yml](../../../../sources/bits-bytes-nn__omnisummary/.github/workflows/ci.yml) |
| Containers / deploy | 2 | [Dockerfile](../../../../sources/bits-bytes-nn__omnisummary/Dockerfile)<br>[Dockerfile.agentcore](../../../../sources/bits-bytes-nn__omnisummary/Dockerfile.agentcore) |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | security/policy surface not obvious; agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `shared/memory.py`, `agent_runtime/__init__.py`, `agent_runtime/app.py`.
2. Trace execution through entrypoints: `__main__.py`, `main.py`.
3. Map agent/tool runtime through: `shared/memory.py`, `agent_runtime/__init__.py`, `agent_runtime/app.py`.
4. Inspect retrieval/memory/indexing through: `tests/test_memory_store.py`, `shared/memory.py`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/test_agent_cache.py`, `tests/test_agent_tools.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Proactive daily AI/ML digest — multi source collection, LLM ranking, and a Korean editorial digest to Slack. Powered by . 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, README.md, LICENSE, openai이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
