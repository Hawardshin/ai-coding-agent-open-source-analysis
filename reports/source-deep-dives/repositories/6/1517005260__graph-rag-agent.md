# 1517005260/graph-rag-agent Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

拼好RAG：手搓并融合了GraphRAG、LightRAG、Neo4j-llm-graph-builder进行知识图谱构建以及搜索；整合DeepSearch技术实现私域RAG的推理；自制针对GraphRAG的评估框架| Integrate GraphRAG, LightRAG, and Neo4j-llm-graph-builder for knowledge graph construction and search. Combine DeepSearch for private RAG reasoning. Create a custom evaluation framework for GraphRAG.

## 요약

- 조사 단위: `sources/1517005260__graph-rag-agent` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 274 files, 59 directories, depth score 115, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=server/routers/knowledge_graph.py, graphrag_agent/__init__.py, graphrag_agent/readme.md이고, 의존성 단서는 openai, langchain, langgraph, fastapi, pydantic, torch, 검증/운영 단서는 test/eval 경로가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | 1517005260/graph-rag-agent |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | mixed |
| Language | Python |
| Stars | 2227 |
| Forks | 315 |
| License | MIT |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/1517005260__graph-rag-agent](../../../../sources/1517005260__graph-rag-agent) |
| Existing report | [reports/llm-wiki/repositories/1517005260__graph-rag-agent.md](../../../llm-wiki/repositories/1517005260__graph-rag-agent.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 274 / 59 |
| Max observed depth | 6 |
| Top directories | assets, datasets, files, frontend, graphrag_agent, server, test, training |
| Top extensions | .py: 222, .md: 22, .txt: 11, .png: 5, .pdf: 3, .doc: 2, .json: 2, .svg: 2, (none): 2, .example: 1, .ipynb: 1, .yaml: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| server | source boundary | 5 |
| assets | top-level component | 1 |
| datasets | top-level component | 1 |
| files | top-level component | 1 |
| frontend | top-level component | 1 |
| graphrag_agent | top-level component | 1 |
| test | validation surface | 1 |
| training | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | none |
| agentFrameworks | langchain, langgraph |
| vectorStores | faiss |
| modelRuntime | torch, transformers, vllm |
| webRuntime | fastapi |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [server/routers/knowledge_graph.py](../../../../sources/1517005260__graph-rag-agent/server/routers/knowledge_graph.py) | retrieval signal |
| retrieval | [graphrag_agent/__init__.py](../../../../sources/1517005260__graph-rag-agent/graphrag_agent/__init__.py) | retrieval signal |
| retrieval | [graphrag_agent/readme.md](../../../../sources/1517005260__graph-rag-agent/graphrag_agent/readme.md) | retrieval signal |
| retrieval | [graphrag_agent/search/__init__.py](../../../../sources/1517005260__graph-rag-agent/graphrag_agent/search/__init__.py) | retrieval signal |
| entrypoints | [server/main.py](../../../../sources/1517005260__graph-rag-agent/server/main.py) | entrypoints signal |
| docs | [readme.md](../../../../sources/1517005260__graph-rag-agent/readme.md) | docs signal |
| docs | [training/readme.md](../../../../sources/1517005260__graph-rag-agent/training/readme.md) | docs signal |
| docs | [test/readme.md](../../../../sources/1517005260__graph-rag-agent/test/readme.md) | docs signal |
| docs | [server/readme.md](../../../../sources/1517005260__graph-rag-agent/server/readme.md) | docs signal |
| eval | [test/hotpot_multi_agent_eval.py](../../../../sources/1517005260__graph-rag-agent/test/hotpot_multi_agent_eval.py) | eval signal |
| eval | [test/search_with_stream.py](../../../../sources/1517005260__graph-rag-agent/test/search_with_stream.py) | eval signal |
| eval | [test/search_without_stream.py](../../../../sources/1517005260__graph-rag-agent/test/search_without_stream.py) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [server/main.py](../../../../sources/1517005260__graph-rag-agent/server/main.py) |
| agentRuntime | 79 | [AGENTS.md](../../../../sources/1517005260__graph-rag-agent/AGENTS.md)<br>[server/services/agent_service.py](../../../../sources/1517005260__graph-rag-agent/server/services/agent_service.py)<br>[graphrag_agent/search/tool_registry.py](../../../../sources/1517005260__graph-rag-agent/graphrag_agent/search/tool_registry.py)<br>[graphrag_agent/search/tool/__init__.py](../../../../sources/1517005260__graph-rag-agent/graphrag_agent/search/tool/__init__.py)<br>[graphrag_agent/search/tool/base.py](../../../../sources/1517005260__graph-rag-agent/graphrag_agent/search/tool/base.py)<br>[graphrag_agent/search/tool/chain_exploration_tool.py](../../../../sources/1517005260__graph-rag-agent/graphrag_agent/search/tool/chain_exploration_tool.py)<br>[graphrag_agent/search/tool/deep_research_tool.py](../../../../sources/1517005260__graph-rag-agent/graphrag_agent/search/tool/deep_research_tool.py)<br>[graphrag_agent/search/tool/deeper_research_tool.py](../../../../sources/1517005260__graph-rag-agent/graphrag_agent/search/tool/deeper_research_tool.py) |
| mcp | 1 | [graphrag_agent/search/tool_registry.py](../../../../sources/1517005260__graph-rag-agent/graphrag_agent/search/tool_registry.py) |
| retrieval | 198 | [server/routers/knowledge_graph.py](../../../../sources/1517005260__graph-rag-agent/server/routers/knowledge_graph.py)<br>[graphrag_agent/__init__.py](../../../../sources/1517005260__graph-rag-agent/graphrag_agent/__init__.py)<br>[graphrag_agent/readme.md](../../../../sources/1517005260__graph-rag-agent/graphrag_agent/readme.md)<br>[graphrag_agent/search/__init__.py](../../../../sources/1517005260__graph-rag-agent/graphrag_agent/search/__init__.py)<br>[graphrag_agent/search/global_search.py](../../../../sources/1517005260__graph-rag-agent/graphrag_agent/search/global_search.py)<br>[graphrag_agent/search/local_search.py](../../../../sources/1517005260__graph-rag-agent/graphrag_agent/search/local_search.py)<br>[graphrag_agent/search/readme.md](../../../../sources/1517005260__graph-rag-agent/graphrag_agent/search/readme.md)<br>[graphrag_agent/search/retrieval_adapter.py](../../../../sources/1517005260__graph-rag-agent/graphrag_agent/search/retrieval_adapter.py) |
| spec | 2 | [requirements.txt](../../../../sources/1517005260__graph-rag-agent/requirements.txt)<br>[graphrag_agent/agents/multi_agent/core/plan_spec.py](../../../../sources/1517005260__graph-rag-agent/graphrag_agent/agents/multi_agent/core/plan_spec.py) |
| eval | 45 | [test/hotpot_multi_agent_eval.py](../../../../sources/1517005260__graph-rag-agent/test/hotpot_multi_agent_eval.py)<br>[test/readme.md](../../../../sources/1517005260__graph-rag-agent/test/readme.md)<br>[test/search_with_stream.py](../../../../sources/1517005260__graph-rag-agent/test/search_with_stream.py)<br>[test/search_without_stream.py](../../../../sources/1517005260__graph-rag-agent/test/search_without_stream.py)<br>[test/test_cache_system.py](../../../../sources/1517005260__graph-rag-agent/test/test_cache_system.py)<br>[test/test_deep_agent.py](../../../../sources/1517005260__graph-rag-agent/test/test_deep_agent.py)<br>[graphrag_agent/models/test_stream_model.py](../../../../sources/1517005260__graph-rag-agent/graphrag_agent/models/test_stream_model.py)<br>[graphrag_agent/graph/processing/entity_quality.py](../../../../sources/1517005260__graph-rag-agent/graphrag_agent/graph/processing/entity_quality.py) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 1 | [docker-compose.yaml](../../../../sources/1517005260__graph-rag-agent/docker-compose.yaml) |
| instruction | 2 | [AGENTS.md](../../../../sources/1517005260__graph-rag-agent/AGENTS.md)<br>[CLAUDE.md](../../../../sources/1517005260__graph-rag-agent/CLAUDE.md) |
| docs | 19 | [readme.md](../../../../sources/1517005260__graph-rag-agent/readme.md)<br>[training/readme.md](../../../../sources/1517005260__graph-rag-agent/training/readme.md)<br>[test/readme.md](../../../../sources/1517005260__graph-rag-agent/test/readme.md)<br>[server/readme.md](../../../../sources/1517005260__graph-rag-agent/server/readme.md)<br>[graphrag_agent/readme.md](../../../../sources/1517005260__graph-rag-agent/graphrag_agent/readme.md)<br>[graphrag_agent/search/readme.md](../../../../sources/1517005260__graph-rag-agent/graphrag_agent/search/readme.md)<br>[graphrag_agent/search/tool/reasoning/readme.md](../../../../sources/1517005260__graph-rag-agent/graphrag_agent/search/tool/reasoning/readme.md)<br>[graphrag_agent/pipelines/ingestion/readme.md](../../../../sources/1517005260__graph-rag-agent/graphrag_agent/pipelines/ingestion/readme.md) |
| config | 1 | [requirements.txt](../../../../sources/1517005260__graph-rag-agent/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 45 | [test/hotpot_multi_agent_eval.py](../../../../sources/1517005260__graph-rag-agent/test/hotpot_multi_agent_eval.py)<br>[test/readme.md](../../../../sources/1517005260__graph-rag-agent/test/readme.md)<br>[test/search_with_stream.py](../../../../sources/1517005260__graph-rag-agent/test/search_with_stream.py)<br>[test/search_without_stream.py](../../../../sources/1517005260__graph-rag-agent/test/search_without_stream.py)<br>[test/test_cache_system.py](../../../../sources/1517005260__graph-rag-agent/test/test_cache_system.py)<br>[test/test_deep_agent.py](../../../../sources/1517005260__graph-rag-agent/test/test_deep_agent.py) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 1 | [docker-compose.yaml](../../../../sources/1517005260__graph-rag-agent/docker-compose.yaml) |
| Security / policy | 0 | not obvious |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/1517005260__graph-rag-agent/AGENTS.md)<br>[CLAUDE.md](../../../../sources/1517005260__graph-rag-agent/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `server/routers/knowledge_graph.py`, `graphrag_agent/__init__.py`, `graphrag_agent/readme.md`.
2. Trace execution through entrypoints: `server/main.py`.
3. Map agent/tool runtime through: `AGENTS.md`, `server/services/agent_service.py`, `graphrag_agent/search/tool_registry.py`.
4. Inspect retrieval/memory/indexing through: `server/routers/knowledge_graph.py`, `graphrag_agent/__init__.py`, `graphrag_agent/readme.md`.
5. Verify behavior through test/eval files: `test/hotpot_multi_agent_eval.py`, `test/readme.md`, `test/search_with_stream.py`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 拼好RAG：手搓并融合了GraphRAG、LightRAG、Neo4j llm graph builder进行知识图谱构建以及搜索；整合DeepSearch技术实现私域RAG的推理；自制针对GraphRAG的评估框架 Integrate G. 핵심 구조 신호는 Python, requirements.txt, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 ci signal not obvious, needs deeper structural scan입니다.
