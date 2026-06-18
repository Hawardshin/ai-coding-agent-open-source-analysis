# OpenSPG/KAG Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

KAG is a logical form-guided reasoning and retrieval framework based on OpenSPG engine and LLMs. It is used to build logical reasoning and factual Q&A solutions for professional domain knowledge bases. It can effectively overcome the shortcomings of the traditional RAG vector similarity calculation model.

## 요약

- 조사 단위: `sources/OpenSPG__KAG` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,211 files, 263 directories, depth score 114, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=tests/unit/builder/component/test_external_graph.py, knext/search/rest/models/vector_search_request.py, knext/schema/rest/models/type/index_type.py이고, 의존성 단서는 openai, mcp, pydantic, click, ollama, llama, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | OpenSPG/KAG |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 8834 |
| Forks | 688 |
| License | Apache-2.0 |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/OpenSPG__KAG](../../../../sources/OpenSPG__KAG) |
| Existing report | [reports/llm-wiki/repositories/OpenSPG__KAG.md](../../../llm-wiki/repositories/OpenSPG__KAG.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1211 / 263 |
| Max observed depth | 9 |
| Top directories | _static, .github, docs, kag, knext, tests |
| Top extensions | .py: 736, .md: 251, .yaml: 47, .csv: 44, .json: 32, .png: 17, (none): 16, .schema: 13, .txt: 12, .gif: 5, .yml: 5, .dsl: 4 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 45 |
| _static | top-level component | 1 |
| .github | ci surface | 1 |
| docs | documentation surface | 1 |
| kag | top-level component | 1 |
| knext | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | ollama, llama |
| webRuntime | none |
| developerSurface | click |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [tests/unit/builder/component/test_external_graph.py](../../../../sources/OpenSPG__KAG/tests/unit/builder/component/test_external_graph.py) | retrieval signal |
| retrieval | [knext/search/rest/models/vector_search_request.py](../../../../sources/OpenSPG__KAG/knext/search/rest/models/vector_search_request.py) | retrieval signal |
| retrieval | [knext/schema/rest/models/type/index_type.py](../../../../sources/OpenSPG__KAG/knext/schema/rest/models/type/index_type.py) | retrieval signal |
| retrieval | [knext/reasoner/rest/models/sub_graph.py](../../../../sources/OpenSPG__KAG/knext/reasoner/rest/models/sub_graph.py) | retrieval signal |
| entrypoints | [kag/bin/__init__.py](../../../../sources/OpenSPG__KAG/kag/bin/__init__.py) | entrypoints signal |
| entrypoints | [kag/bin/base.py](../../../../sources/OpenSPG__KAG/kag/bin/base.py) | entrypoints signal |
| entrypoints | [kag/bin/kag_cmds.py](../../../../sources/OpenSPG__KAG/kag/bin/kag_cmds.py) | entrypoints signal |
| entrypoints | [kag/bin/commands/__init__.py](../../../../sources/OpenSPG__KAG/kag/bin/commands/__init__.py) | entrypoints signal |
| docs | [README_cn.md](../../../../sources/OpenSPG__KAG/README_cn.md) | docs signal |
| docs | [README_ja.md](../../../../sources/OpenSPG__KAG/README_ja.md) | docs signal |
| docs | [README.md](../../../../sources/OpenSPG__KAG/README.md) | docs signal |
| docs | [kag/open_benchmark/prqa/README_cn.md](../../../../sources/OpenSPG__KAG/kag/open_benchmark/prqa/README_cn.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 8 | [kag/bin/__init__.py](../../../../sources/OpenSPG__KAG/kag/bin/__init__.py)<br>[kag/bin/base.py](../../../../sources/OpenSPG__KAG/kag/bin/base.py)<br>[kag/bin/kag_cmds.py](../../../../sources/OpenSPG__KAG/kag/bin/kag_cmds.py)<br>[kag/bin/commands/__init__.py](../../../../sources/OpenSPG__KAG/kag/bin/commands/__init__.py)<br>[kag/bin/commands/benchmark.py](../../../../sources/OpenSPG__KAG/kag/bin/commands/benchmark.py)<br>[kag/bin/commands/builder.py](../../../../sources/OpenSPG__KAG/kag/bin/commands/builder.py)<br>[kag/bin/commands/info.py](../../../../sources/OpenSPG__KAG/kag/bin/commands/info.py)<br>[kag/bin/commands/mcp_server.py](../../../../sources/OpenSPG__KAG/kag/bin/commands/mcp_server.py) |
| agentRuntime | 97 | [tests/unit/executor/__init__.py](../../../../sources/OpenSPG__KAG/tests/unit/executor/__init__.py)<br>[tests/unit/executor/kag_config.yaml](../../../../sources/OpenSPG__KAG/tests/unit/executor/kag_config.yaml)<br>[tests/unit/executor/kag_pipeline_test.py](../../../../sources/OpenSPG__KAG/tests/unit/executor/kag_pipeline_test.py)<br>[kag/solver/prompt/context_select_prompt.py](../../../../sources/OpenSPG__KAG/kag/solver/prompt/context_select_prompt.py)<br>[kag/solver/planner/__init__.py](../../../../sources/OpenSPG__KAG/kag/solver/planner/__init__.py)<br>[kag/solver/planner/kag_iterative_planner.py](../../../../sources/OpenSPG__KAG/kag/solver/planner/kag_iterative_planner.py)<br>[kag/solver/planner/kag_model_planner.py](../../../../sources/OpenSPG__KAG/kag/solver/planner/kag_model_planner.py)<br>[kag/solver/planner/kag_static_planner.py](../../../../sources/OpenSPG__KAG/kag/solver/planner/kag_static_planner.py) |
| mcp | 29 | [kag/solver/prompt/mcp_tool_call.py](../../../../sources/OpenSPG__KAG/kag/solver/prompt/mcp_tool_call.py)<br>[kag/solver/planner/mcp_planner.py](../../../../sources/OpenSPG__KAG/kag/solver/planner/mcp_planner.py)<br>[kag/solver/pipelineconf/mcp.yaml](../../../../sources/OpenSPG__KAG/kag/solver/pipelineconf/mcp.yaml)<br>[kag/solver/pipeline/mcp_pipeline.py](../../../../sources/OpenSPG__KAG/kag/solver/pipeline/mcp_pipeline.py)<br>[kag/solver/executor/mcp/__init__.py](../../../../sources/OpenSPG__KAG/kag/solver/executor/mcp/__init__.py)<br>[kag/solver/executor/mcp/mcp_client.py](../../../../sources/OpenSPG__KAG/kag/solver/executor/mcp/mcp_client.py)<br>[kag/solver/executor/mcp/mcp_executor.py](../../../../sources/OpenSPG__KAG/kag/solver/executor/mcp/mcp_executor.py)<br>[kag/solver/executor/mcp/mcp.json](../../../../sources/OpenSPG__KAG/kag/solver/executor/mcp/mcp.json) |
| retrieval | 119 | [tests/unit/builder/component/test_external_graph.py](../../../../sources/OpenSPG__KAG/tests/unit/builder/component/test_external_graph.py)<br>[knext/search/rest/models/vector_search_request.py](../../../../sources/OpenSPG__KAG/knext/search/rest/models/vector_search_request.py)<br>[knext/schema/rest/models/type/index_type.py](../../../../sources/OpenSPG__KAG/knext/schema/rest/models/type/index_type.py)<br>[knext/reasoner/rest/models/sub_graph.py](../../../../sources/OpenSPG__KAG/knext/reasoner/rest/models/sub_graph.py)<br>[knext/graph/__init__.py](../../../../sources/OpenSPG__KAG/knext/graph/__init__.py)<br>[knext/graph/client.py](../../../../sources/OpenSPG__KAG/knext/graph/client.py)<br>[knext/graph/rest/__init__.py](../../../../sources/OpenSPG__KAG/knext/graph/rest/__init__.py)<br>[knext/graph/rest/graph_api.py](../../../../sources/OpenSPG__KAG/knext/graph/rest/graph_api.py) |
| spec | 2 | [requirements.txt](../../../../sources/OpenSPG__KAG/requirements.txt)<br>[kag/solver/server/requirement.txt](../../../../sources/OpenSPG__KAG/kag/solver/server/requirement.txt) |
| eval | 213 | [tests/__init__.py](../../../../sources/OpenSPG__KAG/tests/__init__.py)<br>[tests/unit/__init__.py](../../../../sources/OpenSPG__KAG/tests/unit/__init__.py)<br>[tests/unit/.coverage](../../../../sources/OpenSPG__KAG/tests/unit/.coverage)<br>[tests/unit/.coverage.MacBook-Pro.local.61268.XgTYnYax](../../../../sources/OpenSPG__KAG/tests/unit/.coverage.MacBook-Pro.local.61268.XgTYnYax)<br>[tests/unit/kag_config.yaml](../../../../sources/OpenSPG__KAG/tests/unit/kag_config.yaml)<br>[tests/unit/test_planner/__init__.py](../../../../sources/OpenSPG__KAG/tests/unit/test_planner/__init__.py)<br>[tests/unit/test_planner/kag_config.yaml](../../../../sources/OpenSPG__KAG/tests/unit/test_planner/kag_config.yaml)<br>[tests/unit/test_planner/solver/__init__.py](../../../../sources/OpenSPG__KAG/tests/unit/test_planner/solver/__init__.py) |
| security | 0 | not obvious |
| ci | 2 | [.github/workflows/code-check.yml](../../../../sources/OpenSPG__KAG/.github/workflows/code-check.yml)<br>[.github/workflows/pr-title-check.yml](../../../../sources/OpenSPG__KAG/.github/workflows/pr-title-check.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 46 | [README_cn.md](../../../../sources/OpenSPG__KAG/README_cn.md)<br>[README_ja.md](../../../../sources/OpenSPG__KAG/README_ja.md)<br>[README.md](../../../../sources/OpenSPG__KAG/README.md)<br>[kag/open_benchmark/prqa/README_cn.md](../../../../sources/OpenSPG__KAG/kag/open_benchmark/prqa/README_cn.md)<br>[kag/open_benchmark/prqa/README.md](../../../../sources/OpenSPG__KAG/kag/open_benchmark/prqa/README.md)<br>[kag/open_benchmark/musique/README_cn.md](../../../../sources/OpenSPG__KAG/kag/open_benchmark/musique/README_cn.md)<br>[kag/open_benchmark/musique/README.md](../../../../sources/OpenSPG__KAG/kag/open_benchmark/musique/README.md)<br>[kag/open_benchmark/hotpotqa/README_cn.md](../../../../sources/OpenSPG__KAG/kag/open_benchmark/hotpotqa/README_cn.md) |
| config | 3 | [requirements.txt](../../../../sources/OpenSPG__KAG/requirements.txt)<br>[kag/examples/baidu_map_mcp/pyproject.toml](../../../../sources/OpenSPG__KAG/kag/examples/baidu_map_mcp/pyproject.toml)<br>[kag/examples/baidu_map_mcp/uv.lock](../../../../sources/OpenSPG__KAG/kag/examples/baidu_map_mcp/uv.lock) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 213 | [tests/__init__.py](../../../../sources/OpenSPG__KAG/tests/__init__.py)<br>[tests/unit/__init__.py](../../../../sources/OpenSPG__KAG/tests/unit/__init__.py)<br>[tests/unit/.coverage](../../../../sources/OpenSPG__KAG/tests/unit/.coverage)<br>[tests/unit/.coverage.MacBook-Pro.local.61268.XgTYnYax](../../../../sources/OpenSPG__KAG/tests/unit/.coverage.MacBook-Pro.local.61268.XgTYnYax)<br>[tests/unit/kag_config.yaml](../../../../sources/OpenSPG__KAG/tests/unit/kag_config.yaml)<br>[tests/unit/test_planner/__init__.py](../../../../sources/OpenSPG__KAG/tests/unit/test_planner/__init__.py) |
| CI workflows | 2 | [.github/workflows/code-check.yml](../../../../sources/OpenSPG__KAG/.github/workflows/code-check.yml)<br>[.github/workflows/pr-title-check.yml](../../../../sources/OpenSPG__KAG/.github/workflows/pr-title-check.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/unit/builder/component/test_external_graph.py`, `knext/search/rest/models/vector_search_request.py`, `knext/schema/rest/models/type/index_type.py`.
2. Trace execution through entrypoints: `kag/bin/__init__.py`, `kag/bin/base.py`, `kag/bin/kag_cmds.py`.
3. Map agent/tool runtime through: `tests/unit/executor/__init__.py`, `tests/unit/executor/kag_config.yaml`, `tests/unit/executor/kag_pipeline_test.py`.
4. Inspect retrieval/memory/indexing through: `tests/unit/builder/component/test_external_graph.py`, `knext/search/rest/models/vector_search_request.py`, `knext/schema/rest/models/type/index_type.py`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/unit/__init__.py`, `tests/unit/.coverage`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 KAG is a logical form guided reasoning and retrieval framework based on OpenSPG engine and LLMs. It is used to build log. 핵심 구조 신호는 Python, requirements.txt, README.md, LICENSE, openai, mcp이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 needs deeper structural scan입니다.
