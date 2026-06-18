# 1517005260/graph-rag-agent 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

拼好RAG：手搓并融合了GraphRAG、LightRAG、Neo4j-llm-graph-builder进行知识图谱构建以及搜索；整合DeepSearch技术实现私域RAG的推理；自制针对GraphRAG的评估框架| Integrate GraphRAG, LightRAG, and Neo4j-llm-graph-builder for knowledge graph construction and search. Combine DeepSearch for private RAG reasoning. Create a custom evaluation framework for GraphRAG.

## 요약

- 조사 단위: `sources/1517005260__graph-rag-agent` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 274 files, 59 directories, depth score 109, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=server/routers/knowledge_graph.py, graphrag_agent/__init__.py, graphrag_agent/readme.md이고, 의존성 단서는 openai, langchain, langgraph, fastapi, pydantic, torch, 검증/운영 단서는 test/eval 경로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | 1517005260/graph-rag-agent |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | mixed |
| Language | Python |
| Stars | 2227 |
| Forks | 315 |
| License | MIT |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/1517005260__graph-rag-agent](../../../../sources/1517005260__graph-rag-agent) |
| 기존 보고서 | [reports/llm-wiki/repositories/1517005260__graph-rag-agent.md](../../../llm-wiki/repositories/1517005260__graph-rag-agent.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 274 / 59 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | assets, datasets, files, frontend, graphrag_agent, server, test, training |
| 상위 확장자 | .py: 222, .md: 22, .txt: 11, .png: 5, .pdf: 3, .doc: 2, .json: 2, .svg: 2, (none): 2, .example: 1, .ipynb: 1, .yaml: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| server | source boundary | 5 |
| assets | top-level component | 1 |
| datasets | top-level component | 1 |
| files | top-level component | 1 |
| frontend | top-level component | 1 |
| graphrag_agent | top-level component | 1 |
| test | validation surface | 1 |
| training | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | 없음 |
| agentFrameworks | langchain, langgraph |
| vectorStores | faiss |
| modelRuntime | torch, transformers, vllm |
| webRuntime | fastapi |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [server/main.py](../../../../sources/1517005260__graph-rag-agent/server/main.py) |
| agentRuntime | 79 | [AGENTS.md](../../../../sources/1517005260__graph-rag-agent/AGENTS.md)<br>[server/services/agent_service.py](../../../../sources/1517005260__graph-rag-agent/server/services/agent_service.py)<br>[graphrag_agent/search/tool_registry.py](../../../../sources/1517005260__graph-rag-agent/graphrag_agent/search/tool_registry.py)<br>[graphrag_agent/search/tool/__init__.py](../../../../sources/1517005260__graph-rag-agent/graphrag_agent/search/tool/__init__.py)<br>[graphrag_agent/search/tool/base.py](../../../../sources/1517005260__graph-rag-agent/graphrag_agent/search/tool/base.py)<br>[graphrag_agent/search/tool/chain_exploration_tool.py](../../../../sources/1517005260__graph-rag-agent/graphrag_agent/search/tool/chain_exploration_tool.py)<br>[graphrag_agent/search/tool/deep_research_tool.py](../../../../sources/1517005260__graph-rag-agent/graphrag_agent/search/tool/deep_research_tool.py)<br>[graphrag_agent/search/tool/deeper_research_tool.py](../../../../sources/1517005260__graph-rag-agent/graphrag_agent/search/tool/deeper_research_tool.py) |
| mcp | 1 | [graphrag_agent/search/tool_registry.py](../../../../sources/1517005260__graph-rag-agent/graphrag_agent/search/tool_registry.py) |
| retrieval | 198 | [server/routers/knowledge_graph.py](../../../../sources/1517005260__graph-rag-agent/server/routers/knowledge_graph.py)<br>[graphrag_agent/__init__.py](../../../../sources/1517005260__graph-rag-agent/graphrag_agent/__init__.py)<br>[graphrag_agent/readme.md](../../../../sources/1517005260__graph-rag-agent/graphrag_agent/readme.md)<br>[graphrag_agent/search/__init__.py](../../../../sources/1517005260__graph-rag-agent/graphrag_agent/search/__init__.py)<br>[graphrag_agent/search/global_search.py](../../../../sources/1517005260__graph-rag-agent/graphrag_agent/search/global_search.py)<br>[graphrag_agent/search/local_search.py](../../../../sources/1517005260__graph-rag-agent/graphrag_agent/search/local_search.py)<br>[graphrag_agent/search/readme.md](../../../../sources/1517005260__graph-rag-agent/graphrag_agent/search/readme.md)<br>[graphrag_agent/search/retrieval_adapter.py](../../../../sources/1517005260__graph-rag-agent/graphrag_agent/search/retrieval_adapter.py) |
| spec | 2 | [requirements.txt](../../../../sources/1517005260__graph-rag-agent/requirements.txt)<br>[graphrag_agent/agents/multi_agent/core/plan_spec.py](../../../../sources/1517005260__graph-rag-agent/graphrag_agent/agents/multi_agent/core/plan_spec.py) |
| eval | 45 | [test/hotpot_multi_agent_eval.py](../../../../sources/1517005260__graph-rag-agent/test/hotpot_multi_agent_eval.py)<br>[test/readme.md](../../../../sources/1517005260__graph-rag-agent/test/readme.md)<br>[test/search_with_stream.py](../../../../sources/1517005260__graph-rag-agent/test/search_with_stream.py)<br>[test/search_without_stream.py](../../../../sources/1517005260__graph-rag-agent/test/search_without_stream.py)<br>[test/test_cache_system.py](../../../../sources/1517005260__graph-rag-agent/test/test_cache_system.py)<br>[test/test_deep_agent.py](../../../../sources/1517005260__graph-rag-agent/test/test_deep_agent.py)<br>[graphrag_agent/models/test_stream_model.py](../../../../sources/1517005260__graph-rag-agent/graphrag_agent/models/test_stream_model.py)<br>[graphrag_agent/graph/processing/entity_quality.py](../../../../sources/1517005260__graph-rag-agent/graphrag_agent/graph/processing/entity_quality.py) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 1 | [docker-compose.yaml](../../../../sources/1517005260__graph-rag-agent/docker-compose.yaml) |
| instruction | 2 | [AGENTS.md](../../../../sources/1517005260__graph-rag-agent/AGENTS.md)<br>[CLAUDE.md](../../../../sources/1517005260__graph-rag-agent/CLAUDE.md) |
| docs | 19 | [readme.md](../../../../sources/1517005260__graph-rag-agent/readme.md)<br>[training/readme.md](../../../../sources/1517005260__graph-rag-agent/training/readme.md)<br>[test/readme.md](../../../../sources/1517005260__graph-rag-agent/test/readme.md)<br>[server/readme.md](../../../../sources/1517005260__graph-rag-agent/server/readme.md)<br>[graphrag_agent/readme.md](../../../../sources/1517005260__graph-rag-agent/graphrag_agent/readme.md)<br>[graphrag_agent/search/readme.md](../../../../sources/1517005260__graph-rag-agent/graphrag_agent/search/readme.md)<br>[graphrag_agent/search/tool/reasoning/readme.md](../../../../sources/1517005260__graph-rag-agent/graphrag_agent/search/tool/reasoning/readme.md)<br>[graphrag_agent/pipelines/ingestion/readme.md](../../../../sources/1517005260__graph-rag-agent/graphrag_agent/pipelines/ingestion/readme.md) |
| config | 1 | [requirements.txt](../../../../sources/1517005260__graph-rag-agent/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 45 | [test/hotpot_multi_agent_eval.py](../../../../sources/1517005260__graph-rag-agent/test/hotpot_multi_agent_eval.py)<br>[test/readme.md](../../../../sources/1517005260__graph-rag-agent/test/readme.md)<br>[test/search_with_stream.py](../../../../sources/1517005260__graph-rag-agent/test/search_with_stream.py)<br>[test/search_without_stream.py](../../../../sources/1517005260__graph-rag-agent/test/search_without_stream.py)<br>[test/test_cache_system.py](../../../../sources/1517005260__graph-rag-agent/test/test_cache_system.py)<br>[test/test_deep_agent.py](../../../../sources/1517005260__graph-rag-agent/test/test_deep_agent.py) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 1 | [docker-compose.yaml](../../../../sources/1517005260__graph-rag-agent/docker-compose.yaml) |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/1517005260__graph-rag-agent/AGENTS.md)<br>[CLAUDE.md](../../../../sources/1517005260__graph-rag-agent/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `server/routers/knowledge_graph.py`, `graphrag_agent/__init__.py`, `graphrag_agent/readme.md`.
2. entrypoint를 따라 실행 흐름 확인: `server/main.py`.
3. agent/tool runtime 매핑: `AGENTS.md`, `server/services/agent_service.py`, `graphrag_agent/search/tool_registry.py`.
4. retrieval/memory/indexing 확인: `server/routers/knowledge_graph.py`, `graphrag_agent/__init__.py`, `graphrag_agent/readme.md`.
5. test/eval 파일로 동작 검증: `test/hotpot_multi_agent_eval.py`, `test/readme.md`, `test/search_with_stream.py`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 拼好RAG：手搓并融合了GraphRAG、LightRAG、Neo4j llm graph builder进行知识图谱构建以及搜索；整合DeepSearch技术实现私域RAG的推理；自制针对GraphRAG的评估框架 Integrate G. 핵심 구조 신호는 Python, requirements.txt, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 CI 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
