# GiovanniPasq/agentic-rag-for-dummies Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

A modular Agentic RAG built with LangGraph — learn Retrieval-Augmented Generation Agents in minutes.

## 요약

- 조사 단위: `sources/GiovanniPasq__agentic-rag-for-dummies` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 39 files, 9 directories, depth score 87, key references 11개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 retrieval=project/rag_agent/__init__.py, project/rag_agent/edges.py, project/rag_agent/graph_state.py이고, 의존성 단서는 langchain, langgraph, transformers, ollama, llama, qdrant, 검증/운영 단서는 test/eval 경로가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | GiovanniPasq/agentic-rag-for-dummies |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Jupyter Notebook |
| Stars | 3502 |
| Forks | 461 |
| License | MIT |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/GiovanniPasq__agentic-rag-for-dummies](../../../../sources/GiovanniPasq__agentic-rag-for-dummies) |
| Existing report | [reports/llm-wiki/repositories/GiovanniPasq__agentic-rag-for-dummies.md](../../../llm-wiki/repositories/GiovanniPasq__agentic-rag-for-dummies.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 39 / 9 |
| Max observed depth | 3 |
| Top directories | assets, notebooks, project |
| Top extensions | .py: 23, .ipynb: 4, .png: 3, (none): 3, .md: 2, .example: 1, .gif: 1, .json: 1, .txt: 1 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| assets | top-level component | 1 |
| notebooks | top-level component | 1 |
| project | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | langchain, langgraph |
| vectorStores | qdrant |
| modelRuntime | transformers, ollama, llama |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [project/rag_agent/__init__.py](../../../../sources/GiovanniPasq__agentic-rag-for-dummies/project/rag_agent/__init__.py) | retrieval signal |
| retrieval | [project/rag_agent/edges.py](../../../../sources/GiovanniPasq__agentic-rag-for-dummies/project/rag_agent/edges.py) | retrieval signal |
| retrieval | [project/rag_agent/graph_state.py](../../../../sources/GiovanniPasq__agentic-rag-for-dummies/project/rag_agent/graph_state.py) | retrieval signal |
| retrieval | [project/rag_agent/graph.py](../../../../sources/GiovanniPasq__agentic-rag-for-dummies/project/rag_agent/graph.py) | retrieval signal |
| docs | [README.md](../../../../sources/GiovanniPasq__agentic-rag-for-dummies/README.md) | docs signal |
| docs | [project/README.md](../../../../sources/GiovanniPasq__agentic-rag-for-dummies/project/README.md) | docs signal |
| eval | [project/core/observability.py](../../../../sources/GiovanniPasq__agentic-rag-for-dummies/project/core/observability.py) | eval signal |
| eval | [notebooks/evaluation.ipynb](../../../../sources/GiovanniPasq__agentic-rag-for-dummies/notebooks/evaluation.ipynb) | eval signal |
| eval | [notebooks/observability.ipynb](../../../../sources/GiovanniPasq__agentic-rag-for-dummies/notebooks/observability.ipynb) | eval signal |
| config | [requirements.txt](../../../../sources/GiovanniPasq__agentic-rag-for-dummies/requirements.txt) | config signal |
| container | [project/Dockerfile](../../../../sources/GiovanniPasq__agentic-rag-for-dummies/project/Dockerfile) | container support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 1 | [project/rag_agent/tools.py](../../../../sources/GiovanniPasq__agentic-rag-for-dummies/project/rag_agent/tools.py) |
| mcp | 0 | not obvious |
| retrieval | 12 | [project/rag_agent/__init__.py](../../../../sources/GiovanniPasq__agentic-rag-for-dummies/project/rag_agent/__init__.py)<br>[project/rag_agent/edges.py](../../../../sources/GiovanniPasq__agentic-rag-for-dummies/project/rag_agent/edges.py)<br>[project/rag_agent/graph_state.py](../../../../sources/GiovanniPasq__agentic-rag-for-dummies/project/rag_agent/graph_state.py)<br>[project/rag_agent/graph.py](../../../../sources/GiovanniPasq__agentic-rag-for-dummies/project/rag_agent/graph.py)<br>[project/rag_agent/nodes.py](../../../../sources/GiovanniPasq__agentic-rag-for-dummies/project/rag_agent/nodes.py)<br>[project/rag_agent/prompts.py](../../../../sources/GiovanniPasq__agentic-rag-for-dummies/project/rag_agent/prompts.py)<br>[project/rag_agent/schemas.py](../../../../sources/GiovanniPasq__agentic-rag-for-dummies/project/rag_agent/schemas.py)<br>[project/rag_agent/tools.py](../../../../sources/GiovanniPasq__agentic-rag-for-dummies/project/rag_agent/tools.py) |
| spec | 1 | [requirements.txt](../../../../sources/GiovanniPasq__agentic-rag-for-dummies/requirements.txt) |
| eval | 3 | [project/core/observability.py](../../../../sources/GiovanniPasq__agentic-rag-for-dummies/project/core/observability.py)<br>[notebooks/evaluation.ipynb](../../../../sources/GiovanniPasq__agentic-rag-for-dummies/notebooks/evaluation.ipynb)<br>[notebooks/observability.ipynb](../../../../sources/GiovanniPasq__agentic-rag-for-dummies/notebooks/observability.ipynb) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 1 | [project/Dockerfile](../../../../sources/GiovanniPasq__agentic-rag-for-dummies/project/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 2 | [README.md](../../../../sources/GiovanniPasq__agentic-rag-for-dummies/README.md)<br>[project/README.md](../../../../sources/GiovanniPasq__agentic-rag-for-dummies/project/README.md) |
| config | 1 | [requirements.txt](../../../../sources/GiovanniPasq__agentic-rag-for-dummies/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 3 | [project/core/observability.py](../../../../sources/GiovanniPasq__agentic-rag-for-dummies/project/core/observability.py)<br>[notebooks/evaluation.ipynb](../../../../sources/GiovanniPasq__agentic-rag-for-dummies/notebooks/evaluation.ipynb)<br>[notebooks/observability.ipynb](../../../../sources/GiovanniPasq__agentic-rag-for-dummies/notebooks/observability.ipynb) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 1 | [project/Dockerfile](../../../../sources/GiovanniPasq__agentic-rag-for-dummies/project/Dockerfile) |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `project/rag_agent/__init__.py`, `project/rag_agent/edges.py`, `project/rag_agent/graph_state.py`.
2. Map agent/tool runtime through: `project/rag_agent/tools.py`.
3. Inspect retrieval/memory/indexing through: `project/rag_agent/__init__.py`, `project/rag_agent/edges.py`, `project/rag_agent/graph_state.py`.
4. Verify behavior through test/eval files: `project/core/observability.py`, `notebooks/evaluation.ipynb`, `notebooks/observability.ipynb`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 A modular Agentic RAG built with LangGraph — learn Retrieval Augmented Generation Agents in minutes.. 핵심 구조 신호는 Jupyter Notebook, requirements.txt, README.md, LICENSE, langchain, transformers이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
