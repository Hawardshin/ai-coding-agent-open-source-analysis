# Azure/gpt-rag-orchestrator Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

The GPT-RAG Orchestrator service is an agentic orchestration layer built on Microsoft Foundry Agent Service and the Microsoft Agent framework. It enables agent-based RAG workflows by coordinating multiple specialized agents to collaboratively generate accurate, context-aware responses for complex user queries.

## 요약

- 조사 단위: `sources/Azure__gpt-rag-orchestrator` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 148 files, 36 directories, depth score 124, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=tests/test_retrieval_intent.py, tests/test_single_agent_rag_v2_conversation_scope.py, tests/test_single_agent_rag_v2_direct_llm_history.py이고, 의존성 단서는 openai, mcp, fastapi, pydantic, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Azure/gpt-rag-orchestrator |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | Python |
| Stars | 91 |
| Forks | 110 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/Azure__gpt-rag-orchestrator](../../../../sources/Azure__gpt-rag-orchestrator) |
| Existing report | [reports/global-trending/repositories/Azure__gpt-rag-orchestrator.md](../../../global-trending/repositories/Azure__gpt-rag-orchestrator.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 148 / 36 |
| Max observed depth | 4 |
| Top directories | .devcontainer, .github, dataset, docs, evaluations, infra, media, notebooks, samples, scripts, src, tests |
| Top extensions | .py: 74, .json: 28, .md: 9, .txt: 8, .png: 5, (none): 5, .ps1: 4, .sh: 3, .yaml: 3, .yml: 3, .bicep: 1, .ipynb: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 25 |
| src | source boundary | 15 |
| docs | documentation surface | 2 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| dataset | top-level component | 1 |
| evaluations | top-level component | 1 |
| infra | top-level component | 1 |
| media | top-level component | 1 |
| notebooks | top-level component | 1 |
| samples | top-level component | 1 |
| scripts | top-level component | 1 |


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
| webRuntime | fastapi |
| developerSurface | none |
| observability | opentelemetry |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [tests/test_retrieval_intent.py](../../../../sources/Azure__gpt-rag-orchestrator/tests/test_retrieval_intent.py) | retrieval signal |
| retrieval | [tests/test_single_agent_rag_v2_conversation_scope.py](../../../../sources/Azure__gpt-rag-orchestrator/tests/test_single_agent_rag_v2_conversation_scope.py) | retrieval signal |
| retrieval | [tests/test_single_agent_rag_v2_direct_llm_history.py](../../../../sources/Azure__gpt-rag-orchestrator/tests/test_single_agent_rag_v2_direct_llm_history.py) | retrieval signal |
| retrieval | [tests/test_single_agent_rag_v2_thread_conversation.py](../../../../sources/Azure__gpt-rag-orchestrator/tests/test_single_agent_rag_v2_thread_conversation.py) | retrieval signal |
| entrypoints | [src/main.py](../../../../sources/Azure__gpt-rag-orchestrator/src/main.py) | entrypoints signal |
| docs | [README.md](../../../../sources/Azure__gpt-rag-orchestrator/README.md) | docs signal |
| docs | [infra/README.md](../../../../sources/Azure__gpt-rag-orchestrator/infra/README.md) | docs signal |
| docs | [evaluations/README.md](../../../../sources/Azure__gpt-rag-orchestrator/evaluations/README.md) | docs signal |
| docs | [docs/pull_request_template.md](../../../../sources/Azure__gpt-rag-orchestrator/docs/pull_request_template.md) | docs signal |
| eval | [tests/conftest.py](../../../../sources/Azure__gpt-rag-orchestrator/tests/conftest.py) | eval signal |
| eval | [tests/rbac.ps1](../../../../sources/Azure__gpt-rag-orchestrator/tests/rbac.ps1) | eval signal |
| eval | [tests/test_agent_strategies.py](../../../../sources/Azure__gpt-rag-orchestrator/tests/test_agent_strategies.py) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [src/main.py](../../../../sources/Azure__gpt-rag-orchestrator/src/main.py) |
| agentRuntime | 5 | [AGENTS.md](../../../../sources/Azure__gpt-rag-orchestrator/AGENTS.md)<br>[src/util/tools.py](../../../../sources/Azure__gpt-rag-orchestrator/src/util/tools.py)<br>[src/strategies/agent_provider_v2.py](../../../../sources/Azure__gpt-rag-orchestrator/src/strategies/agent_provider_v2.py)<br>[src/strategies/agent_strategies.py](../../../../sources/Azure__gpt-rag-orchestrator/src/strategies/agent_strategies.py)<br>[src/strategies/agent_strategy_factory.py](../../../../sources/Azure__gpt-rag-orchestrator/src/strategies/agent_strategy_factory.py) |
| mcp | 2 | [src/strategies/mcp_strategy.py](../../../../sources/Azure__gpt-rag-orchestrator/src/strategies/mcp_strategy.py)<br>[src/prompts/mcp/main.txt](../../../../sources/Azure__gpt-rag-orchestrator/src/prompts/mcp/main.txt) |
| retrieval | 10 | [tests/test_retrieval_intent.py](../../../../sources/Azure__gpt-rag-orchestrator/tests/test_retrieval_intent.py)<br>[tests/test_single_agent_rag_v2_conversation_scope.py](../../../../sources/Azure__gpt-rag-orchestrator/tests/test_single_agent_rag_v2_conversation_scope.py)<br>[tests/test_single_agent_rag_v2_direct_llm_history.py](../../../../sources/Azure__gpt-rag-orchestrator/tests/test_single_agent_rag_v2_direct_llm_history.py)<br>[tests/test_single_agent_rag_v2_thread_conversation.py](../../../../sources/Azure__gpt-rag-orchestrator/tests/test_single_agent_rag_v2_thread_conversation.py)<br>[src/strategies/retrieval_intent.py](../../../../sources/Azure__gpt-rag-orchestrator/src/strategies/retrieval_intent.py)<br>[src/strategies/single_agent_rag_strategy_v2.py](../../../../sources/Azure__gpt-rag-orchestrator/src/strategies/single_agent_rag_strategy_v2.py)<br>[src/strategies/maf_plugins/user_profile_memory.py](../../../../sources/Azure__gpt-rag-orchestrator/src/strategies/maf_plugins/user_profile_memory.py)<br>[src/prompts/single_agent_rag/main.jinja2](../../../../sources/Azure__gpt-rag-orchestrator/src/prompts/single_agent_rag/main.jinja2) |
| spec | 2 | [requirements.txt](../../../../sources/Azure__gpt-rag-orchestrator/requirements.txt)<br>[evaluations/requirements.txt](../../../../sources/Azure__gpt-rag-orchestrator/evaluations/requirements.txt) |
| eval | 21 | [tests/conftest.py](../../../../sources/Azure__gpt-rag-orchestrator/tests/conftest.py)<br>[tests/rbac.ps1](../../../../sources/Azure__gpt-rag-orchestrator/tests/rbac.ps1)<br>[tests/test_agent_strategies.py](../../../../sources/Azure__gpt-rag-orchestrator/tests/test_agent_strategies.py)<br>[tests/test_agent_strategy_factory.py](../../../../sources/Azure__gpt-rag-orchestrator/tests/test_agent_strategy_factory.py)<br>[tests/test_base_agent_strategy.py](../../../../sources/Azure__gpt-rag-orchestrator/tests/test_base_agent_strategy.py)<br>[tests/test_build_conversation_filter.py](../../../../sources/Azure__gpt-rag-orchestrator/tests/test_build_conversation_filter.py)<br>[tests/test_citations.py](../../../../sources/Azure__gpt-rag-orchestrator/tests/test_citations.py)<br>[tests/test_conversation_compaction.py](../../../../sources/Azure__gpt-rag-orchestrator/tests/test_conversation_compaction.py) |
| security | 2 | [SECURITY.md](../../../../sources/Azure__gpt-rag-orchestrator/SECURITY.md)<br>[tests/rbac.ps1](../../../../sources/Azure__gpt-rag-orchestrator/tests/rbac.ps1) |
| ci | 3 | [.github/workflows/block-pr-to-main.yml](../../../../sources/Azure__gpt-rag-orchestrator/.github/workflows/block-pr-to-main.yml)<br>[.github/workflows/cicd_pipeline.yaml](../../../../sources/Azure__gpt-rag-orchestrator/.github/workflows/cicd_pipeline.yaml)<br>[.github/workflows/pr_pipeline.yaml](../../../../sources/Azure__gpt-rag-orchestrator/.github/workflows/pr_pipeline.yaml) |
| container | 1 | [Dockerfile](../../../../sources/Azure__gpt-rag-orchestrator/Dockerfile) |
| instruction | 2 | [AGENTS.md](../../../../sources/Azure__gpt-rag-orchestrator/AGENTS.md)<br>[.github/copilot-instructions.md](../../../../sources/Azure__gpt-rag-orchestrator/.github/copilot-instructions.md) |
| docs | 4 | [README.md](../../../../sources/Azure__gpt-rag-orchestrator/README.md)<br>[infra/README.md](../../../../sources/Azure__gpt-rag-orchestrator/infra/README.md)<br>[evaluations/README.md](../../../../sources/Azure__gpt-rag-orchestrator/evaluations/README.md)<br>[docs/pull_request_template.md](../../../../sources/Azure__gpt-rag-orchestrator/docs/pull_request_template.md) |
| config | 3 | [pyproject.toml](../../../../sources/Azure__gpt-rag-orchestrator/pyproject.toml)<br>[requirements.txt](../../../../sources/Azure__gpt-rag-orchestrator/requirements.txt)<br>[evaluations/requirements.txt](../../../../sources/Azure__gpt-rag-orchestrator/evaluations/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 21 | [tests/conftest.py](../../../../sources/Azure__gpt-rag-orchestrator/tests/conftest.py)<br>[tests/rbac.ps1](../../../../sources/Azure__gpt-rag-orchestrator/tests/rbac.ps1)<br>[tests/test_agent_strategies.py](../../../../sources/Azure__gpt-rag-orchestrator/tests/test_agent_strategies.py)<br>[tests/test_agent_strategy_factory.py](../../../../sources/Azure__gpt-rag-orchestrator/tests/test_agent_strategy_factory.py)<br>[tests/test_base_agent_strategy.py](../../../../sources/Azure__gpt-rag-orchestrator/tests/test_base_agent_strategy.py)<br>[tests/test_build_conversation_filter.py](../../../../sources/Azure__gpt-rag-orchestrator/tests/test_build_conversation_filter.py) |
| CI workflows | 3 | [.github/workflows/block-pr-to-main.yml](../../../../sources/Azure__gpt-rag-orchestrator/.github/workflows/block-pr-to-main.yml)<br>[.github/workflows/cicd_pipeline.yaml](../../../../sources/Azure__gpt-rag-orchestrator/.github/workflows/cicd_pipeline.yaml)<br>[.github/workflows/pr_pipeline.yaml](../../../../sources/Azure__gpt-rag-orchestrator/.github/workflows/pr_pipeline.yaml) |
| Containers / deploy | 1 | [Dockerfile](../../../../sources/Azure__gpt-rag-orchestrator/Dockerfile) |
| Security / policy | 2 | [SECURITY.md](../../../../sources/Azure__gpt-rag-orchestrator/SECURITY.md)<br>[tests/rbac.ps1](../../../../sources/Azure__gpt-rag-orchestrator/tests/rbac.ps1) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/Azure__gpt-rag-orchestrator/AGENTS.md)<br>[.github/copilot-instructions.md](../../../../sources/Azure__gpt-rag-orchestrator/.github/copilot-instructions.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/test_retrieval_intent.py`, `tests/test_single_agent_rag_v2_conversation_scope.py`, `tests/test_single_agent_rag_v2_direct_llm_history.py`.
2. Trace execution through entrypoints: `src/main.py`.
3. Map agent/tool runtime through: `AGENTS.md`, `src/util/tools.py`, `src/strategies/agent_provider_v2.py`.
4. Inspect retrieval/memory/indexing through: `tests/test_retrieval_intent.py`, `tests/test_single_agent_rag_v2_conversation_scope.py`, `tests/test_single_agent_rag_v2_direct_llm_history.py`.
5. Verify behavior through test/eval files: `tests/conftest.py`, `tests/rbac.ps1`, `tests/test_agent_strategies.py`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 The GPT RAG Orchestrator service is an agentic orchestration layer built on Microsoft Foundry Agent Service and the Micr. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, Dockerfile, README.md, AGENTS.md이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
